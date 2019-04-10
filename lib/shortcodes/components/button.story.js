import { storiesOf } from '@storybook/html'

storiesOf('Buttn', module)
    .add('with texaat', () => '<button class="btn">Hello World</button>')
    .add('with emojiaa', () => {
        const button = document.createElement('butaaton')
        button.innerText = '😀 😎 👍 💯'
        return button
    })
