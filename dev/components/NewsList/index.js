import React, {Component} from 'react';

class NewsList extends Component {
	constructor (props) {
		super(props);

		this.ARTICLES = [
			{
				"id": "01",
				"title": "Turkey Urges Kurdish Fighters to Lay Down Their Arms",
				"date": "October 01, 2019",
				"text": "President Recep Tayyip Erdogan called on the Kurds to leave a Syrian region “this night.” He spoke as Vice President Mike Pence planned to travel to Turkey."
			},
			{
				"id": "02",
				"title": "China Is Leasing an Entire Pacific Island. Its Residents Are Shocked.",
				"date": "October 02, 2019",
				"text": "What could Beijing want with Tulagi, where Allied forces fought a bloody battle with Japan in World War II? Some fear military ambitions."
			},
			{
				"id": "03",
				"title": "Japan's new star Kenki Fukuoka prepared to turn back on rugby to concentrate on medical career.",
				"date": "October 16, 2019",
				"text": "For jet-heeled Japan wing Kenki Fukuoka it is not simply a case of catch him if you can but catch him while you can. "
			},
			{
				"id": "04",
				"title": "Turkey Urges Kurdish Fighters to Lay Down Their Arms",
				"date": "October 01, 2019",
				"text": "President Recep Tayyip Erdogan called on the Kurds to leave a Syrian region “this night.” He spoke as Vice President Mike Pence planned to travel to Turkey."
			},
			{
				"id": "05",
				"title": "China Is Leasing an Entire Pacific Island. Its Residents Are Shocked.",
				"date": "October 02, 2019",
				"text": "What could Beijing want with Tulagi, where Allied forces fought a bloody battle with Japan in World War II? Some fear military ambitions."
			},
			{
				"id": "06",
				"title": "Japan's new star Kenki Fukuoka prepared to turn back on rugby to concentrate on medical career.",
				"date": "October 16, 2019",
				"text": "For jet-heeled Japan wing Kenki Fukuoka it is not simply a case of catch him if you can but catch him while you can. "
			},
			{
				"id": "07",
				"title": "Turkey Urges Kurdish Fighters to Lay Down Their Arms",
				"date": "October 01, 2019",
				"text": "President Recep Tayyip Erdogan called on the Kurds to leave a Syrian region “this night.” He spoke as Vice President Mike Pence planned to travel to Turkey."
			},
			{
				"id": "08",
				"title": "China Is Leasing an Entire Pacific Island. Its Residents Are Shocked.",
				"date": "October 02, 2019",
				"text": "What could Beijing want with Tulagi, where Allied forces fought a bloody battle with Japan in World War II? Some fear military ambitions."
			},
			{
				"id": "09",
				"title": "Japan's new star Kenki Fukuoka prepared to turn back on rugby to concentrate on medical career.",
				"date": "October 16, 2019",
				"text": "For jet-heeled Japan wing Kenki Fukuoka it is not simply a case of catch him if you can but catch him while you can. "
			},
			{
				"id": "10",
				"title": "China Is Leasing an Entire Pacific Island. Its Residents Are Shocked.",
				"date": "October 02, 2019",
				"text": "What could Beijing want with Tulagi, where Allied forces fought a bloody battle with Japan in World War II? Some fear military ambitions."
			}
		];

		this.state = {
			newsItems: [...this.ARTICLES],
			count: 2,
			totalNum: this.ARTICLES.length,
		};

		this.addFeed = this.addFeed.bind(this);
	}

	addFeed(){
		const { count, newsItems, totalNum } = this.state;

		if (this.state.count < this.state.totalNum) {
			this.setState ({
				count: this.state.count + 2,
			});
		}
	}

	render () {
		const { count, totalNum } = this.state;
		const NewsItem = (article, id, title, date, text) => (
			<li className="news_item" key={article.id}>
				<h2 className="news_subtitle">
					{article.title}
				</h2>
				<span className="news_date">{article.date}</span>
				<span className="news_date">{article.id}</span>
				<p className="news_text">
					{article.text}
				</p>
			</li>
		);

		const newsItems = this.state.newsItems.map(NewsItem).slice(0, totalNum - (totalNum - count));

		return(
			<>
				<ul className="news_list">{newsItems}</ul>
				<div className="news_counter">{count}</div>
				<button
					onClick={this.addFeed}
					className="news_btn">Load more</button>
			</>
		);
	}

}

export default NewsList;