function Carousel() {
  return (
    <div className="row carousel-holder">
      <div className="col-md-12">
        <div
          id="carousel-example-generic"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-example-generic"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carousel-example-generic" data-slide-to="1" />
            <li data-target="#carousel-example-generic" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img
                className="slide-image"
                src="http://placehold.it/800x300"
                alt=""
              />
            </div>
            <div className="item">
              <img
                className="slide-image"
                src="http://placehold.it/800x300"
                alt=""
              />
            </div>
            <div className="item">
              <img
                className="slide-image"
                src="http://placehold.it/800x300"
                alt=""
              />
            </div>
          </div>
          <a
            className="left carousel-control"
            href="#carousel-example-generic"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left" />
          </a>
          <a
            className="right carousel-control"
            href="#carousel-example-generic"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right" />
          </a>
        </div>
      </div>
    </div>
  );
}
