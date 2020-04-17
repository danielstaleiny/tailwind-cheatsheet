import htm from 'htm'
import { format } from 'date-fns/esm'

const html = htm.bind(h)

// Preview component for a Post
const Post = createClass({
    render() {
        const entry = this.props.entry

        return html`
            <main>
                <article>
                    <h1>${entry.getIn(['data', 'title'], null)}</h1>
                    <p>
                        <small>
                            <time
                                >${format(
                                    entry.getIn(['data', 'date'], new Date()),
                                    'DD MMM, yyyy'
                                )}</time
                            >
                            ${' by Author'}
                        </small>
                    </p>

                    <p>${entry.getIn(['data', 'summary'], '')}</p>

                    ${this.props.widgetFor('body')}
                    <p>
                        ${entry.getIn(['data', 'tags'], []).map(
                            tag =>
                                html`
                                    <a href="#" rel="tag">${tag}</a>
                                `
                        )}
                    </p>
                </article>
            </main>
        `
    }
})

export default Post
