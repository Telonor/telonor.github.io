dependencies:
	yarn

build: dependencies
	yarn build

prod-branch: build
	git checkout master
		
prepare-deploy:	prod-branch
	rm -rf static
	cp -r build/* .
