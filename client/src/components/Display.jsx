import reactIcon from "../assets/react.svg";

const Display = (props) => {
  const setSearch = props.setSearch;
  const search = props.search;
  const handleSearchClick = (e) => {
    const value = e.target.innerText;
    if (!search) {
      setSearch(value);
    }
    if (!search.includes(value)) {
      setSearch(`${search} ${value}`);
    }
  };

  return (
    <section className="main-content">
      {props.sendData.map((item, index) => {
        return (
          <section key={index} className="flex">
            <div className="img w-[15rem]">
              <img src={item.photos[0]} alt="" />
            </div>
            <div className="content">
              <div className="header-text text-3xl">
                <h1>{item.title}</h1>
              </div>
              <div className="p-text text-sm">
                <p>{item.description.slice(0, 100)} ...</p>
                <a href={item.url} target="_blank">
                  อ่านต่อ
                </a>
              </div>
              <div className="catagoties flex">
                <p>หมวด :</p>
                <div className="tags-section flex">
                  {item.tags.map((tag, i) => {
                    return (
                      <p
                        className="ml-2 hover:cursor-pointer"
                        key={i}
                        onClick={handleSearchClick}
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="buttom-content flex justify-between px-5">
                <div className="img-section flex gap-5">
                  {item.photos.map((photo, i) => {
                    if (i !== 0) {
                      return (
                        <img
                          className="h-[5rem]"
                          src={photo}
                          alt={`photo ${i}`}
                          key={i}
                        ></img>
                      );
                    }
                  })}
                </div>
                <div
                  className="link-section hover:cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(item.url);
                  }}
                >
                  <img className="hover:animate-spin" src={reactIcon} alt="" />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Display;
