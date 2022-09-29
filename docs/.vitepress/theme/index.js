// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import QuestionComponent from '/components/Question.vue';
import ToolkitComponent from '/components/Toolkit.vue';

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.component('Question', QuestionComponent);
        app.component('Toolkit', ToolkitComponent);
    }
}