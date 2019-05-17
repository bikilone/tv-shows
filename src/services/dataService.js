class dataService {
  constructor(data) {
    const { genres, id, name, officialSite, premiered, rating, summary } = data;
    const { cast, seasons } = data._embedded;
    const image = data.image.original;
    this.genres = genres;
    this.id = id;
    this.name = name;
    this.officialSite = officialSite;
    this.premiered = premiered;
    this.rating = rating;
    this.summary = summary;
    this.cast = cast;
    this.seasons = seasons;
    this.image = image;
  }
}

export default dataService;
