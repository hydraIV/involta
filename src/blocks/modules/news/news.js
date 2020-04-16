import slickInit from "./slick-init.js";

const API = 'https://ivvending.ru'; // API address

class NewsSection {
  constructor(container = '.news-section') {
    this.container = container;
    this.data = [];
    this.news = [];
    this._fetchNews() // Get data
      .then(() => this._render()) // then render
      .then(() => slickInit()); // then mount slider
  }
  // Imitation of geting news from server
  _fetchNews() {
    return fetch(`${API}/news.json`)
      .then(result => result.json())
      .then(data => {
        this.data = [...data];
      })
      .catch(error => {
        console.error(error);
        console.log('For presentation. We did not receive data from the server and take it from a simple array.');
        this.data = [{
            id: 1,
            img: './img/news_pic.jpg',
            category: 'Конституционное право',
            title: 'Упущены значимые правовые категории',
            content: 'Одним из новых заместителей Александра Коновалова стал Денис Новак, до последнего времени занимавший должность заместителя директора Департамента экономического законодательства Минюста.',
            newsDate: '26 августа'
          },
          {
            id: 2,
            img: './img/news_pic_1.jpg',
            category: 'Закон и порядок',
            title: 'Упущены значимые правовые категории',
            content: 'Федеральная палата адвокатов оперативно подготовила предложения по изменению УПК РФ во исполнение требований Президента изменить порядок заключения и содержания под стражей предпринимателей',
            newsDate: '26 августа'
          },
          {
            id: 3,
            img: './img/news_pic_2.jpg',
            category: 'Этика общения адвокатов',
            title: 'Диалог адвокатуры и следствия',
            content: 'Главное управление МВД столицы обратилось в АП г. Москвы с просьбой организовать явку представителей палаты для проведения обыска в жилище адвоката.',
            newsDate: '26 августа'
          },
          {
            id: 4,
            img: './img/news_pic_3.jpg',
            category: 'Закон и порядок',
            title: 'Упущены значимые правовые категории',
            content: 'Федеральная палата адвокатов оперативно подготовила предложения по изменению УПК РФ во исполнение требований Президента изменить порядок заключения и содержания под стражей предпринимателей',
            newsDate: '26 августа'
          },
          {
            id: 1,
            img: './img/news_pic-4.jpg',
            category: 'Конституционное право',
            title: 'Упущены значимые правовые категории',
            content: 'Одним из новых заместителей Александра Коновалова стал Денис Новак, до последнего времени занимавший должность заместителя директора Департамента экономического законодательства Минюста.',
            newsDate: '26 августа'
          },
          {
            id: 2,
            img: './img/news_pic_1.jpg',
            category: 'Закон и порядок',
            title: 'Упущены значимые правовые категории',
            content: 'Федеральная палата адвокатов оперативно подготовила предложения по изменению УПК РФ во исполнение требований Президента изменить порядок заключения и содержания под стражей предпринимателей',
            newsDate: '26 августа'
          },
          {
            id: 3,
            img: './img/news_pic_2.jpg',
            category: 'Этика общения адвокатов',
            title: 'Диалог адвокатуры и следствия',
            content: 'Главное управление МВД столицы обратилось в АП г. Москвы с просьбой организовать явку представителей палаты для проведения обыска в жилище адвоката.',
            newsDate: '26 августа'
          },
          {
            id: 4,
            img: './img/news_pic_3.jpg',
            category: 'Закон и порядок',
            title: 'Упущены значимые правовые категории',
            content: 'Федеральная палата адвокатов оперативно подготовила предложения по изменению УПК РФ во исполнение требований Президента изменить порядок заключения и содержания под стражей предпринимателей',
            newsDate: '26 августа'
          },
          {
            id: 1,
            img: './img/news_pic.jpg',
            category: 'Конституционное право',
            title: 'Упущены значимые правовые категории',
            content: 'Одним из новых заместителей Александра Коновалова стал Денис Новак, до последнего времени занимавший должность заместителя директора Департамента экономического законодательства Минюста.',
            newsDate: '26 августа'
          },
          {
            id: 2,
            img: './img/news_pic_1.jpg',
            category: 'Закон и порядок',
            title: 'Упущены значимые правовые категории',
            content: 'Федеральная палата адвокатов оперативно подготовила предложения по изменению УПК РФ во исполнение требований Президента изменить порядок заключения и содержания под стражей предпринимателей',
            newsDate: '26 августа'
          },
          {
            id: 3,
            img: './img/news_pic_2.jpg',
            category: 'Этика общения адвокатов',
            title: 'Диалог адвокатуры и следствия',
            content: 'Главное управление МВД столицы обратилось в АП г. Москвы с просьбой организовать явку представителей палаты для проведения обыска в жилище адвоката.',
            newsDate: '26 августа'
          },
          {
            id: 4,
            img: './img/news_pic_3.jpg',
            category: 'Закон и порядок',
            title: 'Упущены значимые правовые категории',
            content: 'Федеральная палата адвокатов оперативно подготовила предложения по изменению УПК РФ во исполнение требований Президента изменить порядок заключения и содержания под стражей предпринимателей',
            newsDate: '26 августа'
          },
        ]
      });
  }
  // Rendering whole news component/section
  _render() {
    const block = document.querySelector(this.container);
    this.data.forEach(el => {
      const newsItem = new NewsBlock(el);
      this.news.push(newsItem);
      block.insertAdjacentHTML('beforeend', newsItem.render());
    });
  }
}
class NewsBlock {
  constructor(item) {
    this.img = item.img;
    this.category = item.category;
    this.title = item.title;
    this.content = item.content;
    this.newsDate = item.newsDate;
  }
  // Rendering single news block
  render() {
    return `
        <a href="#" class="news-block">
            <div class="news-block__img-wrap">
            <img src="${this.img}" alt="${this.title}">
            </div>
            <div class="news-block__category">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5313 0.100304H1.49778C0.684368 0.100304 0.022576 0.747818 0.022576 1.54376V11.8006C0.022576 12.3563 0.363632 12.8481 0.891648 13.0527L8.20406 15.8913C8.3665 15.9546 8.53733 15.9864 8.71186 15.9864H11.5313C12.3447 15.9864 13.0065 15.3389 13.0065 14.5431V1.54376C13.0065 0.747818 12.3447 0.100304 11.5313 0.100304ZM1.3711 12.2038L2.38618 11.1548C2.57274 10.9619 2.88456 10.9538 3.08242 11.1369L6.33102 14.129L1.3711 12.2038ZM12.0229 14.5431C12.0229 14.8083 11.8024 15.0244 11.5313 15.0244H8.7377L3.75754 10.4371C3.16683 9.88977 2.23138 9.91518 1.67202 10.493L1.006 11.1813V1.54376C1.006 1.2784 1.22661 1.06255 1.49778 1.06255H11.5313C11.8024 1.06255 12.0229 1.2784 12.0229 1.54376V14.5431Z" fill="#717171"/>
            </svg>
            <div class="news-block__category-title">${this.category}</div>
            </div>
            <h2 class="news-block__header">${this.title}</h2>
            <p class="news-block__content">${this.content}</p>
            <div class="news-block__date">${this.newsDate}</div>
        </a>
        `
  }
}
// Creating NewsSection class instance. It is rendered immediately after receiving data from the server. 
const news = new NewsSection('.news-section');