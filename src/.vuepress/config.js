// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// // 👇️ "/home/john/Desktop/javascript"
// const __dirname = path.dirname(__filename);
// console.log('directory-name 👉️', __dirname);

import { getDirname, path } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url);

// .vuepress/config.js
export default {
    themeConfig: {
        sidebar: 'auto',
        nav: [{ text: '回首页', link: '/' }]
    },
    alias: {
        img: path.resolve(__dirname, './../img')
    },
    markdown: {
        importCode: {
            handleImportPath: (str) =>
                str.replace(/^@listings/, path.resolve(__dirname, './../../listings'))
        }
    }
};
