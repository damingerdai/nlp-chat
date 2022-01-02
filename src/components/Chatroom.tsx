import { Container } from '@chakra-ui/react';
import { containerBootstrap } from '@nlpjs/core';
import { Nlp } from '@nlpjs/nlp';
import { LangEn } from '@nlpjs/lang-en-min';
import { fs } from '@nlpjs/request-rn';

import React, { useState } from 'react';
import SendMessage from './SendMessage';
import ShowMessages from './ShowMessages';
import * as corpus from '../assets/corpus-en.json';
import { Messages } from '../models/message';

const Chatroom = () => {

    let nlp: any;
    const [messages, setMessages] = useState<Messages>([]);

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
            <SendMessage sendMessage={async (text) => {
                if (!nlp) {
                    await init();
                }
                const response = await nlp.process('en', text);
                const message = [
                    {
                        text,
                        owner: 'user'
                    },
                    {
                        text: response.answer,
                        owner: 'bot'
                    }
                ] as Messages;
                setMessages([...messages, ...message]);
            }} />
        </Container>
    </React.Fragment>)
}

export default Chatroom;