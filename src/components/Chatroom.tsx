import { Container } from '@chakra-ui/react';
import { containerBootstrap } from '@nlpjs/core';
import { Nlp } from '@nlpjs/nlp';
import { LangEn } from '@nlpjs/lang-en-min';
import { fs } from '@nlpjs/request-rn';


import React, { useEffect, useState } from 'react';
import SendMessage from './SendMessage';
import ShowMessages from './ShowMessages';
import * as corpus from '../assets/corpus-en.json';

const Chatroom = () => {

    let nlp: any;
    const [messages, setMessages] = useState<string[]>([]);

    async function init() {
        const container = await containerBootstrap();
        container.register('fs', fs);
        container.use(Nlp);
        container.use(LangEn);
        nlp = container.get('nlp');
        nlp.settings.autoSave = false;
        await nlp.addCorpus(corpus);
        await nlp.train(); 
    }

    init();

    return (<React.Fragment>
        <Container padding="16px 0">
            <ShowMessages messages={messages} />
            <SendMessage sendMessage={async (message) => {
                if (!nlp) {
                    await init();
                }
                const response = await nlp.process('en', message);
                setMessages([...messages, message, response.answer])
            }} />
        </Container>
    </React.Fragment>)
}

export default Chatroom;