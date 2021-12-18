import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": { "id": "news24", "name": "News24" },
            "author": "Sibusiso Mjikeliso",
            "title": "Cricket SA wants to 'get to the bottom' of Nkwe resignation concerns, says CEO | Sport",
            "description": "Acting Cricket South Africa CEO Pholetsi Moseki says the board is concerned about the issues former Proteas assistant coach Enoch Nkwe raised in his resignation.",
            "url": "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-wants-to-get-to-the-bottom-of-nkwe-resignation-concerns-says-ceo-20210826",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg",
            "publishedAt": "2021-08-26T11:40:16+00:00",
            "content": "<ul><li>Cricket South Africa has committed to \"getting to the bottom\" of Enoch Nkwe's sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]"
        },
        {
            "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
            "author": "ABC News",
            "title": "England cricket great Ted Dexter dies aged 86",
            "description": "The former England captain, nicknamed \"Lord Ted\", is fondly remembered as a giant of the game and one of his country's greatest players.",
            "url": "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/1006c7ecf34ec0935eef2aade5017711?impolicy=wcms_crop_resize&cropH=2815&cropW=5004&xPos=0&yPos=223&width=862&height=485",
            "publishedAt": "2021-08-26T09:07:52Z",
            "content": "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "ExoMars Discovers Hidden Water in Mars’ Grand Canyon – The Largest Canyon in the Solar System - SciTechDaily",
            "description": "The ESA-Roscosmos ExoMars Trace Gas Orbiter has spotted significant amounts of water at the heart of Mars’ dramatic canyon system, Valles Marineris. The water, which is hidden beneath Mars’ surface, was found by the Trace Gas Orbiter (TGO)’s FREND instrument,…",
            "url": "https://scitechdaily.com/exomars-discovers-hidden-water-in-mars-grand-canyon-the-largest-canyon-in-the-solar-system/",
            "urlToImage": "https://scitechdaily.com/images/Hidden-Water-Mars-Grand-Canyon.gif",
            "publishedAt": "2021-12-17T04:58:00Z",
            "content": "The water, which is hidden beneath Mars’ surface, was found by the Trace Gas Orbiter (TGO)’s FREND instrument, which is mapping the hydrogen – a measure of water content – in the uppermost meter of M… [+5867 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "STYLECASTER"
            },
            "author": "Jason Pham",
            "title": "The 'Spider-Man: No Way Home' Post-Credit Scenes Reveal Peter Parker's Next Big Villain - StyleCaster",
            "description": "Can't wait until the next MCU? Read this for what happens.",
            "url": "https://stylecaster.com/spider-man-no-way-home-post-credit-scenes/",
            "urlToImage": "https://stylecaster.com/wp-content/uploads/2021/12/Spider-Man-No-Way-Home.jpg",
            "publishedAt": "2021-12-17T04:40:00Z",
            "content": "Warning: Spider-Man: No Way Home spoilers ahead: As Marvel fans know, the end-credit scenes are sometimes the best (and most confusing) parts of MCU movies, and the Spider-Man: No Way Home post-credi… [+8706 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KHOU.com"
            },
            "author": "Charlie Haldeman",
            "title": "What is compression asphyxia? Houston doctor explains cause of death for Astroworld victims - KHOU.com",
            "description": "All 10 victims suffered from what's known as compression asphyxia, according to a report released Thursday.",
            "url": "https://www.khou.com/article/news/local/astroworld-festival-cause-of-deaths-revealed/285-6c467411-1729-41be-86bf-f3b099c81a58",
            "urlToImage": "https://media.khou.com/assets/KHOU/images/e9cbdced-434c-4491-90b6-c4695dea40d2/e9cbdced-434c-4491-90b6-c4695dea40d2_1140x641.jpg",
            "publishedAt": "2021-12-17T04:30:00Z",
            "content": "HOUSTON The victims who died in last month's Astroworld Festival tragedy all suffered from compression asphyxia, according to a report released Thursday by the Harris County Institute of Forensic Sci… [+4145 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ABC17News.com"
            },
            "author": "Matthew Sanders",
            "title": "Gasconade County school district to close Friday after TikTok threat challenge - ABC17News.com",
            "description": "School districts across Mid-Missouri say they've been made aware of a trend on social media app TikTok that challenges kids to threaten their schools.",
            "url": "https://abc17news.com/news/education/2021/12/16/gasconade-county-school-district-to-close-friday-after-tiktok-threat-challenge/",
            "urlToImage": "https://abc17news.b-cdn.net/abc17news.com/2021/12/MGN_1280x960_10921P00-DPKXP.jpg",
            "publishedAt": "2021-12-17T04:18:45Z",
            "content": "COLUMBIA, Mo. (KMIZ)\r\nA district in Gasoncade County will be closed Friday and school districts across Mid-Missouri say they've been made aware of a trend on social media app TikTok that challenges k… [+3153 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Stephen Castle, Mark Landler",
            "title": "Britain’s Conservatives Lose ‘Safe’ Seat, Dealing a Blow to Boris Johnson - The New York Times",
            "description": "The governing party lost to the Liberal Democrats a district that it had represented for more than a century.",
            "url": "https://www.nytimes.com/2021/12/17/world/europe/uk-election-tories-boris-johnson.html",
            "urlToImage": "https://static01.nyt.com/images/2021/12/17/world/17uk-election-05/17uk-election-05-facebookJumbo.jpg",
            "publishedAt": "2021-12-17T08:53:00Z",
            "content": "Although the Liberal Democrats had hoped to pull off a surprise victory, the size of their majority was striking and unexpected. Ed Davey, the leader of the party, described the result as a watershed… [+1913 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jessie Yeung and Jinky Jorgio, CNN",
            "title": "Super Typhoon Rai slams into the Philippines as rescue operations get underway - CNN",
            "description": "Search and rescue operations were underway in the Philippines on Friday after super Typhoon Rai, known locally as Odette, wreaked havoc across the archipelago, leaving at least two people dead.",
            "url": "https://www.cnn.com/2021/12/16/asia/super-typhoon-rai-philippines-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211217021548-philippines-typhoon-rai-damage-1217-super-tease.jpg",
            "publishedAt": "2021-12-17T08:42:00Z",
            "content": "(CNN)Search and rescue operations were underway in the Philippines on Friday after super Typhoon Rai, known locally as Odette, wreaked havoc across the archipelago, leaving at least two people dead. … [+5717 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Kierra Frazier",
            "title": "Judge rejects Purdue Pharma's $4.5 billion opioid settlement - Axios",
            "description": "Purdue said it will appeal the ruling.",
            "url": "https://www.axios.com/purdue-pharma-opioids-settlement-ruling-5d56f27b-eebe-4d6e-a1ac-7915d45f8795.html",
            "urlToImage": "https://images.axios.com/fVtC86wopEZ9wdQaD3n0URX8Azw=/0x129:5472x3207/1366x768/2021/12/17/1639706061086.jpg",
            "publishedAt": "2021-12-17T08:19:03Z",
            "content": "A federal judge on Thursday rejected Purdue Pharma's $4.5 billion bankruptcy settlement with thousands of state, local and tribal governments who sued the company over the opioid epidemic. Purdue sai… [+2769 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Japan: At least 27 feared dead in Osaka building fire - BBC News",
            "description": "Police are looking into the possibility that the blaze was deliberately started, local media report.",
            "url": "https://www.bbc.com/news/world-asia-59663831",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10B5D/production/_122254486_hi072668488.jpg",
            "publishedAt": "2021-12-17T08:07:51Z",
            "content": "Image caption, Windows were blackened by the blaze on the fourth floor of the building\r\nAt least 27 people are feared to have died after a fire broke out in a building in downtown Osaka, Japan. \r\nPol… [+1530 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. relaxes restriction on abortion pill, allows women to obtain by mail - Reuters",
            "description": "The U.S. government on Thursday permanently eased some restrictions on a pill used to terminate early pregnancies, allowing the drug to be sent by mail rather than requiring it to be dispensed in person.",
            "url": "https://www.reuters.com/world/us/us-fda-allow-abortion-pill-by-mail-permanently-2021-12-16/",
            "urlToImage": "https://www.reuters.com/resizer/sNcCXi7FigGE0CDUyn2mO_O3Dis=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZRSF6SOKU5MSLEO5AHPBKUMBGM.jpg",
            "publishedAt": "2021-12-17T07:19:00Z",
            "content": "NEW YORK, Dec 16 (Reuters) - The U.S. government on Thursday permanently eased some restrictions on a pill used to terminate early pregnancies, allowing the drug to be sent by mail rather than requir… [+3765 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Kenneth Garger",
            "title": "5 children killed in Australia bouncy castle tragedy ID'd as police kick off probe - New York Post ",
            "description": "The victims were all fifth and sixth graders at Hillcrest Primary School who died after plunging about 30 feet from the bouncy castle that was whipped into the air by a gust of wind.",
            "url": "https://nypost.com/2021/12/17/australia-bouncy-castle-victims-killed-at-hillcrest-primary-school-identified/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/12/tasmania-victims-831.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021-12-17T07:04:00Z",
            "content": "All five children killed in a bouncy castle tragedy outside their Australian school were identified Friday as police began investigating if the giant inflatable was properly secured to the ground.\r\nT… [+2007 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ScienceAlert"
            },
            "author": "Michelle Starr",
            "title": "Organic Molecules Have Been Confirmed in The Jezero Crater on Mars - ScienceAlert",
            "description": "It hasn't even been on Mars a full year, and NASA's Perseverance rover is making excellent surprise discoveries.",
            "url": "https://www.sciencealert.com/perseverance-has-discovered-organic-molecules-in-mars-jezero-crater",
            "urlToImage": "https://www.sciencealert.com/images/2021-12/processed/SandyPlainsAndWhatLooksLikeARiverDelta_1024.jpg",
            "publishedAt": "2021-12-17T05:45:56Z",
            "content": "It hasn't even been on Mars a full year, and NASA's Perseverance rover is making excellent surprise discoveries.\r\nAmid a number of findings announced this week at the American Geophysical Union Fall … [+4240 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Shibani Mahtani",
            "title": "Hong Kong election boycott looms as opposition languishes in jail - The Washington Post",
            "description": "Changes to the electoral system have predetermined the outcome; voters may pick from a coterie of candidates largely aligned with Beijing.",
            "url": "https://www.washingtonpost.com/world/asia_pacific/hong-kong-vote-democracy-jail/2021/12/17/fa4b2252-5bbf-11ec-b1ef-cb78be717f0e_story.html",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/R5T55US5RYI6ZMPPZN4L44L7BY.jpg&w=1440",
            "publishedAt": "2021-12-17T05:15:18Z",
            "content": "The Orwellian episode underscores the flimsy veneer of legitimacy covering this weekends electoral exercise. In the 18 months since Hong Kong leaders postponed the vote, citing the pandemic, authorit… [+5708 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
         <div className="container my-3">
             <h2>NewsMonkey - Top Headlines</h2>
             <div className="row">
                {this.state.articles.map((Element)=>{
                    return <div className="col-md-3" key={Element.url}>
                        <NewsItem title={Element.title.slice(0,40)} description={Element.description.slice(0,90)} imageUrl={Element.urlToImage} newsUrl={Element.newsUrl} />
                    </div>
                })}
             </div>
         </div>
        )
    }
}

export default News