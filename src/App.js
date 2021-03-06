import React, { useState } from "react";
import { Quotes, Quote } from "./App.styles";

const App = () => {
  const [isLoading, setIsLoading] = useState({
    loading: true,
    quotes: null,
  });

  async function componentDidMount() {
    console.log("going to fetch");
    if (isLoading.loading) {
      let headers = new Headers();
      const url = "https://wiamnasr-quote-server.glitch.me/quotes";
      const options = { method: "GET", headers: headers };
      const response = await fetch(url, options);
      const data = await response.json();
      const { quotes } = data;
      return setIsLoading({
        loading: false,
        quotes: quotes,
      });
    }
  }

  componentDidMount();
  return (
    <div>
      {isLoading.loading || !isLoading.quotes ? (
        <div>loading...</div>
      ) : (
        <Quotes>
          {isLoading.quotes.map((quote, index) => {
            return (
              <Quote key={index}>
                {quote.quote}
                <br />
                <br />
                {quote.author}
              </Quote>
            );
          })}
        </Quotes>
      )}
    </div>
  );
};

export default App;
