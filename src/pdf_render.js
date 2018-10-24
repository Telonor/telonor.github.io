import JsPDF from "jspdf";
import cvData from "./cv_data";
import {getAge} from "./utils";
import React from "react";

// @TODO get this from doc
const rowInterval = 5;
const borderOffset = 15;
const rightColumnX = 60;

export default class PDFRenderer {
    constructor() {
        this.doc = JsPDF();
        this._prevRowY = 0;
        this.doc.setFont('helvetica');
    }

    render() {
        this._renderHeader();
        this._renderBasicInfo();
        this._renderSkills();
        this._renderLanguages();
        this._renderExperience();
        this._renderEducation();
        // @TODO trainings
        // @TODO code samples
        // @TODO additional
        this.doc.save(`${cvData['basic_info']['fio']}.pdf`);
    }

    _setFontNormal() {
        this.doc.setFontStyle('normal');
    };

    _setFontBold() {
        this.doc.setFontStyle('bold');

    }

    _setFontItalic() {
        this.doc.setFontStyle('italic');
    }

    _text(text, y, x=borderOffset) {

        // it's possible to get string or array of strings as input
        if (text instanceof Array) {
            // just hook to skip lines, like we have only one line added
            this._prevRowY = this._getNextRowY(text.length - 1);
        } else {
            this._prevRowY = y;
        }

        this.doc.text(text, x, y);
    }

    _textWithLink(text, y, x=borderOffset, options=undefined) {
        this._prevRowY = y;
        this.doc.textWithLink(text, x, y, options);
    }

    _getNextRowY(blank_lines=0) {
        // et least one blank line should be.
        return this._prevRowY + rowInterval * (1 + blank_lines);
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
        const basicInfo = cvData['basic_info'];
        this._setFontBold();

        this.doc.setFontSize(14);
        this._centeredText(basicInfo['fio'], 20);

        this.doc.setFontSize(12);
        this._centeredText(basicInfo['position'], this._getNextRowY());
    }

    _renderBasicInfo() {
        const basicInfo = cvData['basic_info'];

        this._setFontNormal();
        this.doc.setFontSize(11);

        this._text(`Age: ${getAge(basicInfo['bday'])}`, this._getNextRowY(1));
        this._text(`City: ${basicInfo['city']}`, this._getNextRowY());
        this._text(`Family status: ${basicInfo['family_status']}`, this._getNextRowY());
        this._text(`Email: ${basicInfo['email']}`, this._getNextRowY());

        let pageTitle = 'Web-page:';
        this._text(pageTitle, this._getNextRowY());
        this.doc.setTextColor('#007bff');
        this._textWithLink(
            basicInfo['page'],
            this._prevRowY,
            borderOffset + this._getTextWidth(pageTitle) + this._getTextWidth(' '),
            {url: basicInfo['page']}
        );

        this.doc.setTextColor('#000000');
        this._text(`Skype: ${basicInfo['skype']}`, this._getNextRowY());
    }

    _renderSkills() {
        const skills = cvData['skills'];
        const groupY = this._getNextRowY(1);

        this._setFontBold();
        this.doc.setFontSize(10);
        // left column
        this._text('Skills:', groupY);
        // right column
        let nextY = groupY;

        this._setFontNormal();
        // @TODO make group title bold, and then print group skills over it prepended with spaces * len(groupTitle)
        Object.keys(skills).forEach(
            (skillGroup) => {
                let groupSkillsString = `${skillGroup}: ${skills[skillGroup].join(', ')}.`;

                let splittedToSize = this.doc.splitTextToSize(
                    groupSkillsString,
                    this.doc.internal.pageSize.getWidth() - borderOffset - rightColumnX
                );

                this._text(
                    splittedToSize,
                    nextY,
                    rightColumnX
                );

                nextY = nextY + splittedToSize.length * rowInterval;
            }
        );
    }

    _renderLanguages() {
        const languages = cvData['languages'];
        const groupY = this._getNextRowY(1);

        // left column
        this._setFontBold();
        this._text(
            'Language skills:',
            groupY
        );

        // right column
        this._setFontNormal();
        this._text(
            `${languages.join(', ')}.`,
            groupY,
            rightColumnX,
        )
    }

    _renderExperience() {
        const experience = cvData['experience'];
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
                // date
                this._setFontItalic();
                this._rightAlignedText(
                    exp['date'],
                    index ? this._getNextRowY(1) : groupY
                );

                // company
                this._setFontBold();
                this._text(
                    exp['name'],
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
                this._text(
                    // @TODO link markup parsing
                    this.doc.splitTextToSize(
                        exp['description'],
                        this.doc.internal.pageSize.getWidth() - borderOffset - rightColumnX
                    ),
                    this._getNextRowY(),
                    rightColumnX
                )
            }
        );

    }

    _renderEducation() {
        const education = cvData['education'];
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
                this._setFontItalic();
                this._rightAlignedText(
                    edu['date'],
                    index ? this._getNextRowY(1) : groupY,
                );

                this._setFontNormal();
                this._text(
                    edu['name'],
                    this._getNextRowY(),
                    rightColumnX
                )
            }
        );


    }
};
