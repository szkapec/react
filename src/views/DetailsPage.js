import React, {Component} from 'react';
import DetailsTemplate from '../templates/DetailsTemplate';
import { routes } from '../Routes/index'
import styled from 'styled-components';

// const TextNotes = () => {
//     return (
//         <>
//             <p>In June, Diane visited her friends who live in San Francisco, California. This was Diane’s first time in the city, and she enjoyed her opportunities to walk around and explore.

//             On the first day of her trip, Diane visited the Golden Gate Bridge. This red suspension bridge measures 1.7 miles in length. Diane and her friends did not walk across the bridge. However, they viewed it from the Golden Gate National Recreation Area, which offers hiking trails, picnicking areas, and presents spectacular views of the bridge and city. Diane and her friends made sure to take a group photograph here, featuring the bridge in the background.
            
//             The next day, Diane and her friends visited Alcatraz Island. This island is located 1.25 miles offshore in the San Francisco Bay. It used to serve as a lighthouse, military fort, and prison. Diane and her friends took a small tour boat across bay to reach the island. Their visit included a guided tour through the old military base and prison. They also took a walk around the island to appreciate some of the native wildlife in addition to the views of the city.</p>
//         </>
//     )
// }

// const TextTwitter = () => {
//     return (
//         <>
//        <p> JSS is an authoring tool for CSS which allows you to use JavaScript to describe styles in a declarative, conflict-free and reusable way. It can compile in the browser, server-side or at build time in Node.

// JSS is framework agnostic. It consists of multiple packages: the core, plugins, framework integrations and others.  </p> 
//         </>
//     )
// }
// const TextArticles = () => {
//     return (
//         <p>
//         Nazywam się Mateusz Kaproń, pochodzę z okolic Lublina i jestem Front-End Developerem.
//         Posiadam wyższe wykształcenie informatyczne i ponad 2-letnie doświadczenie w pracy jako programista JavaScript.
//         Moim celem jest stałe poszerzanie wiedzy dotyczącej najbardziej efektywnych technologii i metod tworzenia aplikacji internetowych. Aktualnie skupiam się na nauce React hooks.
//         </p>
//     )
// }



// const All = styled.div`
//      margin-left: 60px;
//      margin-top: 40px;
//      width: 400px;
//     font-size: 12px;
//     line-height: 20px;

// `
// const StyledHeaders = styled.h2`
//     font-weight: 700;
// `
class DetailsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {  }

    }
    state = {
        pageType: 'notes',
    }

    componentDidMount() {
        switch(this.props.match.path) {
            case routes.twitter:
                 this.setState({pageType:'twitters'})
            break;
            case routes.note: 
                this.setState({pageType:'notes'})
            break;
            case routes.article: 
                this.setState({pageType:'articles'})
                break;
        }
    }




    render() {
        const dummyArticle = {
            id: 1,
            title: 'Tytuł ',
            content: 'lorem lorem content',
            twitterName: 'aaa',
            articleUrl: 'http://www.google.pl',
            created: '1day',
        }

    return (
    //     <>
    //     <All>
    // <DetailsTemplate pageType={this.state.pageType}>
    //     <StyledHeaders >
    //          {this.state.pageType==="notes" ?  `My best ${this.state.pageType}` : null}
    //         {this.state.pageType==="twitters" ? `Hello in ${this.state.pageType}` : null}
    //         {this.state.pageType==="articles" ? `Css in JS` : null}
    //     </StyledHeaders>
       
    //     {this.state.pageType==="notes" ?  <TextNotes/> : null}


    //     {this.state.pageType==="twitters" ? <TextTwitter/> : null}

    //     {this.state.pageType==="articles" ? <TextArticles/> : null}
    // </DetailsTemplate>
    // </All>
    //     </>
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