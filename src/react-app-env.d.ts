/// <reference types="react-scripts" />

declare module '*.svg' {
	const content: any
	export default content
}
declare module '*.png' {
	const content: any
	export default content
}

declare module '@nlpjs/core';
declare module '@nlpjs/nlp';
declare module '@nlpjs/lang-en-min';
declare module '@nlpjs/request-rn';