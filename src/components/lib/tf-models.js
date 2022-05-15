import * as tf from '@tensorflow/tfjs-core';
import { loadLayersModel } from '@tensorflow/tfjs-layers';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
import { vocab, vocab_stoi } from './vocab.json';


export default function getModel() {
    const rnn_mod = {
        startLoad: (url) => {
            const loader = loadLayersModel(url,
                // not sure why, but seems to require this. It cannot
                // determine which fetch to use otherwise
                { fetchFunc: (path, rinit = RequestInit) => fetch(path, rinit) });

            loader.then((model) => {
                rnn_mod.model = (t) => {
                    const yhat = model.predict(t);
                    return yhat
                }
                rnn_mod.model_loaded = 'loaded';
                console.log('Loaded Model: ' + url)
            }, (reason) => {
                rnn_mod.model_loaded = 'failed';
                console.log('Failed to load model!');
                console.log(reason);
            }).catch((reason) => {
                console.log('Failed to load model!');
                console.log(reason);
            })
        }
    };

    rnn_mod.model_loaded = 'not loading';

    rnn_mod.seq2vec = (s) => {
        const result = Array()
        const vec = tf.tensor(Array.from(s).map((e, i) => {
            if (e)
                return parseInt(vocab_stoi[e]);
        }));
        return tf.reshape(vec, [1, -1]);
    }
    return rnn_mod
}

