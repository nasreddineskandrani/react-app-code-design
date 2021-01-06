// array in local storage for registered users
function guidGenerator() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

let data = [];
console.log(data);
export function configureFakeBackend() {
  window.fetch = function(url, opts) {
    const { method } = opts;
    const body = opts.body && JSON.parse(opts.body);

    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith("/api/town") && method === "POST":
            const item = body;
            console.log("handleRoute", item);
            if (item.id && !item.id.includes("temporary_")) {
              const found = data.find(t => item.id === t.id);
              Object.assign(found, item);
            } else {
              data.push({ ...item, id: "town_" + guidGenerator() });
            }
            return resolve(true);
          case url.endsWith("/api/car") && method === "POST":
            const pp = body;
            console.log("handleRoute", pp);
            if (pp.id && !pp.id.includes("temporary_")) {
              const found = data.find(t => pp.id === t.id);
              Object.assign(found, pp);
            } else {
              data.push({ ...pp, id: "car_" + guidGenerator() });
            }
            return resolve(true);
          case url.endsWith("/api/list") && method === "GET":
            return resolve(data);
          default :
              return '';
        }
      }
    });
  };
}
