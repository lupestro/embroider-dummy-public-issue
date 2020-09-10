import Route from '@ember/routing/route';
export default class ApplicationRoute extends Route {
    model() {
        return fetch('/testdata.json').then(response => { return response.json(); });
    }
}
