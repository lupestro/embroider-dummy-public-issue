import Route from '@ember/routing/route';
import { fetch } from 'fetch';
export default class ApplicationRoute extends Route {
    model() {
        return fetch('/testdata.json').then(response => { return response.json(); });
    }
}
