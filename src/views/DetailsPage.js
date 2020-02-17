import React, {Component} from 'react';
import DetailsTemplate from '../templates/DetailsTemplate';


class DetailsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {  }

    }
    state = {
        pageType: 'notes',
    }





    render() {
        const dummyArticle = {
            id: 1,
            title: 'Komedia filmowa ',
            content: 'lorem lorem content lorem lorem content lorem lorem content lorem lorem content lorem lorem content lorem lorem content lorem lorem content',
            twitterName: 'random',
            articleUrl: 'http://www.google.pl',
            created: '1day',
        }

    return (

    <DetailsTemplate
        pageType={this.state.pageType}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        twitterName={dummyArticle.twitterName}
    />
        );
    };
};


export default DetailsPage;