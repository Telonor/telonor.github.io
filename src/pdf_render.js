import JsPDF from 'jspdf/dist/jspdf.es.js';
import { getAge, getDateBetweenStr, DBMY, DBY } from './utils';

const ptToMM = 0.3528;
const borderOffset = 15;
const rightColumnX = 60;
const linkColor = '#007bff';
const textColor = '000000';
const urlMarkdownPattern = /\[([\w ]+)\]\(([\w:/\-._]+)\)/g;
const urlConfigPositionNotSet = -1;
const fontName = 'helvetica';


class UrlConfig {
    constructor(text, url, xPosition=urlConfigPositionNotSet, yPosition=urlConfigPositionNotSet) {
        this.text = text;
        this.url = url;
        // -1 indicates that it was not set yet (for multiline)
        this.replaceX = xPosition;
        this.replaceY = yPosition;
    }
}


export default class PDFRender {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.doc = JsPDF({lineHeight: 1.4});
        this._page = 0;
        this._pageUserHeight = this.doc.getPageHeight() - 2 * borderOffset;
        this._pageUserWidth = this.doc.getPageWidth - 2 * borderOffset;
        this._prevRowY = {
          0: 0,
        };
        this.doc.setFont(fontName);
    }

    render() {
        this._renderHeader();
        this._renderBasicInfo();
        this._renderSkills();
        this._renderLanguages();
        this._renderExperience();
        this._renderEducation();
        this._renderTrainings();
        this._renderCodeSamples();
        this._renderAdditionalInfo();

        const fileName = this.dataSource.basics['name'].replace(' ', '_')
        this.doc.save(`${fileName}.pdf`);
    }

    _getLineInterval() {
        return this.doc.internal.getLineHeight() * ptToMM;
    }

    _setFontNormal() {
        this.doc.setFont(fontName, 'normal');
    };

    _setFontBold() {
        this.doc.setFont(fontName, 'bold');

    }

    _setFontItalic() {
        this.doc.setFont(fontName, 'italic');
    }

    _addPage() {
        this._page = this._page + 1;
        this._setPrevRowY(0);
        this.doc.addPage();
    }

    _replaceWithSpaces(originText, replaceText) {
        const replaceTextWidth = this.doc.getTextWidth(replaceText);
        const spaceWidth = this.doc.getTextWidth(' ');
        const spacesCount = replaceTextWidth / spaceWidth;

        return originText.replace(replaceText, ' '.repeat(spacesCount));
    }

    _renderLinkMarkdown(text, y, x=borderOffset, maxLen=0) {
        // if text contains links
        // lets for now assume that we may hold only one link with same linkText
        // linkText doesn't collate with other text in original string
        // as well as the link should use same font params as other text
        // @TODO make in possible to hold multiple links with same linkText
        let urlConfigs = {};
        let _buffText;

        // replace link markdowns with urlText
        _buffText = text.replace(
            urlMarkdownPattern,
            (match, urlText, urlLink, position) => {
                // collect information about found link markdowns
                urlConfigs[urlText] = new UrlConfig(urlText, urlLink);
                return urlText;
            }
        );

        const matchesKeys = Object.keys(urlConfigs);
        // if we don't have what to replace just print original text
        if (!matchesKeys.length) {
            // if we should fit some size
            let _text;
            if (maxLen) {
                _text = this.doc.splitTextToSize(
                    _buffText,
                    maxLen
                );
            } else {
                _text = _buffText;
            }

            this._text(
                _text,
                y,
                x
            );

            return;
        }

        // if we are here we have checked that we have link markdown(s)
        if (maxLen) {
            // first of all - split text to fit size
            _buffText = this.doc.splitTextToSize(
                _buffText,
                maxLen
            );

            // for each row in splitted text array try to find and and calculate replace x and y of the url
            _buffText.forEach(
                (row, idx) => {
                    matchesKeys.forEach(
                        (urlText) => {
                            const config = urlConfigs[urlText];
                            const indexOfUrl = row.indexOf(urlText);
                            if (indexOfUrl !== -1) {
                                config.replaceX = x + this.doc.getTextWidth(
                                    row.slice(0, row.indexOf(urlText))
                                );

                                config.replaceY = y + idx * this._getLineInterval();
                            }
                        }
                    )
                }
            );

            // replace urlText with spaces
            matchesKeys.forEach(
                (urlText) => {
                    _buffText.forEach(
                        (row, idx) => {
                            _buffText[idx] = this._replaceWithSpaces(row, urlText);
                        }
                    );

                }
            );


            // print links
            matchesKeys.forEach(
                (urlText) => {
                    const config = urlConfigs[urlText];
                    this._textWithLink(
                        urlText,
                        config.replaceY,
                        config.replaceX,
                        {url: config.url}
                    );
                }
            );

            // just print for now
            this._text(_buffText, y, x)

        // if we may left text single line
        } else {
            // calculate replaceX of the links
            matchesKeys.forEach(
                (urlText) => {
                    const config = urlConfigs[urlText];
                    config.replaceX = x + this.doc.getTextWidth(
                        _buffText.slice(0, _buffText.indexOf(urlText))
                    )
                }
            );

            matchesKeys.forEach(
                (urlText) => {
                    const config = urlConfigs[urlText];
                    // replace original linkText with space placeholders
                    _buffText = this._replaceWithSpaces(_buffText, urlText);

                    // print links first
                    this._textWithLink(
                        urlText,
                        y,
                        config.replaceX,
                        {url: config.url}
                    );
                }
            );

            // print origin text with space placeholders for links
            this._text(
                _buffText,
                y,
                x
            )
        }
    }

    _text(text, y, x=borderOffset) {
        if (y >= this._pageUserHeight) {
            this._addPage();
            y = this._getNextRowY();
        }

        // it's possible to get string or array of strings as input
        if (Object.prototype.toString.call(text) === '[object Array]' && text.length > 1) {
            this._setPrevRowY(y + this._getLineInterval() * (text.length -1));
        } else {
            this._setPrevRowY(y);
        }

        this.doc.text(text, x, y);
    }

    _setPrevRowY(y) {
        this._prevRowY[this._page] = y;
    }

    _textWithLink(text, y, x=borderOffset, options=undefined) {
        this._setPrevRowY(y);
        this.doc.setTextColor(linkColor);
        this.doc.textWithLink(text, x, y, options);
        this.doc.setTextColor(textColor);
    }

    _getNextRowY(blank_lines=0) {
        // et least one blank line should be.
        if (!this._prevRowY[this._page]) {
            return borderOffset;
        }
        return this._prevRowY[this._page] + this._getLineInterval() * (1 + blank_lines);
    }

    _getTextWidth(text) {
        return this.doc.getStringUnitWidth(text) * this.doc.internal.getFontSize() / this.doc.internal.scaleFactor;
    }

    _centeredText(text, y) {
        const textWidth = this._getTextWidth(text);
        const textOffset = (this.doc.internal.pageSize.getWidth() - textWidth) / 2;
        this._text(text, y, textOffset);
    }

    _rightAlignedText(text, y) {
        const textWidth = this._getTextWidth(text);
        const textOffset = this.doc.internal.pageSize.getWidth() - borderOffset - textWidth;
        this._text(text, y, textOffset)
    }

    _renderHeader() {
        const basicInfo = this.dataSource.basics;
        this._setFontBold();

        this.doc.setFontSize(14);
        this._centeredText(basicInfo['name'], this._getNextRowY());

        this.doc.setFontSize(12);
        this._centeredText(basicInfo['label'], this._getNextRowY());
    }

    _renderBasicInfo() {
        const basicInfo = this.dataSource.basics;

        this._setFontNormal();
        this.doc.setFontSize(11);

        this._text(`Age: ${getAge(basicInfo['bday'])}`, this._getNextRowY(1));
        this._text(`City: ${basicInfo['location']['city']}`, this._getNextRowY());
        this._text(`Family status: ${basicInfo['family_status']}`, this._getNextRowY());
        this._text(`Email: ${basicInfo['email']}`, this._getNextRowY());

        let pageTitle = 'Web-page:';
        this._text(pageTitle, this._getNextRowY());
        this._textWithLink(
            basicInfo['website'],
            this._prevRowY[this._page],
            borderOffset + this._getTextWidth(pageTitle) + this._getTextWidth(' '),
            {url: basicInfo['website']}
        );

        this._text(`Skype: ${basicInfo['skype']}`, this._getNextRowY());
    }

    _renderSkills() {
        const skills = this.dataSource.skills;
        const groupY = this._getNextRowY(1);

        this._setFontBold();
        this.doc.setFontSize(10);
        // left column
        this._text('Skills:', groupY);
        // right column

        this._setFontNormal();
        skills.forEach(
            (skillGroup, index) => {
                const y = index ? this._getNextRowY(1) : groupY;
                const groupTitle = `${skillGroup['name']}: `;

                // prepend with spaces of title length * needed space count
                // calculate coefficient
                // save bold title with
                this._setFontBold();
                const boldWidth = this.doc.getTextWidth(groupTitle);
                // save normal title with
                this._setFontNormal();
                const normalWidth = this.doc.getTextWidth(' ');
                const spacesCount = boldWidth / normalWidth;

                const groupSkillsString = `${' '.repeat(spacesCount)} ${skillGroup['keywords'].join(', ')}`;
                const splittedToSize = this.doc.splitTextToSize(
                    groupSkillsString,
                    this.doc.internal.pageSize.getWidth() - borderOffset - rightColumnX
                );

                // group title
                this._setFontBold();
                this._text(
                    groupTitle,
                    y,
                    rightColumnX
                );

                // group skills
                this._setFontNormal();
                this._text(
                    splittedToSize,
                    y,
                    rightColumnX
                );
            }
        );
    }

    _renderLanguages() {
        const languages = this.dataSource.languages;
        const groupY = this._getNextRowY(1);
        let formattedLanguages = [];

        // left column
        this._setFontBold();
        this._text(
            'Language skills:',
            groupY
        );

        // right column
        this._setFontNormal();


        languages.forEach(
            (language, index) => {
                formattedLanguages.push(`${language['language']}: ${language['fluency']}`);
            }
        )
        this._text(
            `${formattedLanguages.join(', ')}`,
            groupY,
            rightColumnX,
        )
    }

    _renderExperience() {
        const experience = this.dataSource.experience;
        const groupY = this._getNextRowY(1);

        // left column
        this._setFontBold();
        this._text(
            'Experience:',
            groupY
        );

        // right column
        experience.forEach(
            (exp, index) => {
                const date = getDateBetweenStr(exp['startDate'], exp['endDate'], DBMY);

                // date
                this._setFontItalic();
                this._rightAlignedText(
                    date,
                    index ? this._getNextRowY() : groupY
                );

                // company
                this._setFontBold();
                this._text(
                    exp['company'],
                    this._getNextRowY(),
                    rightColumnX
                );

                // position
                this._text(
                    exp['position'],
                    this._getNextRowY(),
                    rightColumnX
                );

                // description
                this._setFontItalic();
                this._renderLinkMarkdown(
                    exp['summary'],
                    this._getNextRowY(),
                    rightColumnX,
                    this.doc.internal.pageSize.getWidth() - borderOffset - rightColumnX
                )
            }
        );

    }

    _renderEducation() {
        const education = this.dataSource.education;
        const groupY = this._getNextRowY(1);

        // left column
        this._setFontBold();
        this._text(
            'Education:',
            groupY
        );

        // right column
        education.forEach(
            (edu, index) => {
                const date = getDateBetweenStr(edu['startDate'], edu['endDate'], DBY);
                const title = `${edu['institution']}, ${edu['studyType']} degree of ${edu['area']}`;

                this._setFontItalic();
                this._rightAlignedText(
                    date,
                    index ? this._getNextRowY() : groupY,
                );

                this._setFontNormal();
                this._text(
                    title,
                    this._getNextRowY(),
                    rightColumnX
                );
            }
        );


    }

    _renderTrainings() {
        const trainings = this.dataSource.trainings;
        const groupY = this._getNextRowY(1);

        // left column
        this._setFontBold();
        this._text(
            'Trainings:',
            groupY
        );

        // right column
        trainings.forEach(
            (trn, index) => {
                const date = getDateBetweenStr(trn['startDate'], trn['endDate'], DBY);

                this._setFontItalic();
                this._rightAlignedText(
                    date,
                    index ? this._getNextRowY() : groupY
                );

                let trnY = this._getNextRowY();

                this._setFontNormal();

                if (trn.url) {
                    this._textWithLink(
                        trn['name'],
                        trnY,
                        rightColumnX,
                        {url: trn['url']}
                    );
                } else {
                    this._text(
                        trn['name'],
                        trnY,
                        rightColumnX,
                    );
                }

                if (trn['target']) {
                    this._text(
                        ` - ${trn['target']}`,
                        trnY,
                        rightColumnX + this._getTextWidth(trn['name'])
                    );
                }
            }
        )
    }

    _renderCodeSamples() {
        const groupY = this._getNextRowY(1);
        const codeSamples = this.dataSource.codeSamples;
        // left column
        this._setFontBold();
        this._text(
            'Code samples:',
            groupY
        );

        // right column
        codeSamples.forEach(
            (sample, index) => {

                this._setFontNormal();
                this._textWithLink(
                    sample['name'],
                    index ? this._getNextRowY() : groupY,
                    rightColumnX,
                    {url: sample['url']}
                );
            }
        )
    }

    _renderAdditionalInfo() {
        const additional = this.dataSource.basics['summary'];
        const groupY = this._getNextRowY(1);

        // left column
        this._setFontBold();
        this._text(
            'Additional information: ',
            groupY
        );

        // right column
        // @TODO remove goo.gl link after jsPDF will fix unicode support
        this._setFontNormal();
        this._renderLinkMarkdown(
            additional,
            groupY,
            rightColumnX,
            this.doc.internal.pageSize.getWidth() - rightColumnX - borderOffset
        );
    }
};
