export interface ArticleInterface {
    count:    number;
    next:     string;
    previous: null;
    results:  ResultInterface[];
}

export interface ResultInterface {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: string;
    updated_at:   Date;
    featured:     boolean;
    launches:     LaunchInterface[];
    events:       Event[];
}

export interface EventInterface {
    event_id: number;
    provider: string;
}

export interface LaunchInterface {
    launch_id: string;
    provider:  string;
}

export interface SingleArticle {
    id:           number;
    title:        string;
    url:          string;
    image_url:    string;
    news_site:    string;
    summary:      string;
    published_at: string;
    updated_at:   Date;
    featured:     boolean;
    launches:     any[];
    events:       any[];
}
