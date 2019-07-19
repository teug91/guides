# DHIS2 design lab guides

This is the source code for [dhis2designlab.github.io](https://dhis2designlab.github.io/).

### Installation
```bash
yarn install
```

### Development
```bash
yarn start
```

Sometimes it may be necessary to delete files in *.cache/* and *public/*.
```bash
yarn clean
```

### Deployment
```bash
yarn deploy
```
This will push to the [dhis2designlab.github.io repo](https://github.com/dhis2designlab/dhis2designlab.github.io),
making the website available at [dhis2designlab.github.io](https://dhis2designlab.github.io/).

### Adding a new page
Create a new .md file in the [pages directory](pages), then deploy.

#### Headers
`h2` headers show up in the sidebar along with the title. 

#### Code highlighting
    ```js{1,3-5}
    const line1 // highlighted
    const line2
    const line3 // highlighted
    const line4 // highlighted
    const line5 // highlighted
    ```
