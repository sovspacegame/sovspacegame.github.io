
let topEndpoints = []; //set up as global so you can use it in other parts of your project
const endpoints = [
    "https://eos.greymass.com/v1/chain/get_table_rows",
    "https://eos.newdex.one/v1/chain/get_table_rows",
    "https://eos.api.eosnation.io/v1/chain/get_table_rows",
    "https://eos.eosusa.io/v1/chain/get_table_rows",
    "https://eos.eosphere.io/v1/chain/get_table_rows",
    "https://api.eos42.io/v1/chain/get_table_rows",
    "https://api.eosflare.io/v1/chain/get_table_rows",
    "https://api.main.alohaeos.com/v1/chain/get_table_rows",
    "https://api.eosrio.io/v1/chain/get_table_rows",
    "https://api.eos.cryptolions.io/v1/chain/get_table_rows",
    "https://mainnet.eosamsterdam.net/v1/chain/get_table_rows",
    "https://api.eosargentina.io/v1/chain/get_table_rows",
    "https://eospush.tokenpocket.pro/v1/chain/get_table_rows",
    "https://api.eossweden.org/v1/chain/get_table_rows",
    "https://eos.edenia.cloud/v1/chain/get_table_rows",
    "https://eos.api.boid.animus.is/v1/chain/get_table_rows",
    "https://eos.caleos.io/v1/chain/get_table_rows",
    "https://api.eosarabia.net/v1/chain/get_table_rows",
    "https://api.eoseoul.io/v1/chain/get_table_rows",
    "https://api.eosn.io/v1/chain/get_table_rows",
    "https://mainnet.eosio.sg/v1/chain/get_table_rows",
    "https://publicapi-mainnet.eosauthority.com/v1/chain/get_table_rows",
    "https://api.eosfinex.com/v1/chain/get_table_rows",
    "https://eos.esocafeblock.com/v1/chain/get_table_rows",
    "https://api.eosdublin.io/v1/chain/get_table_rows",
    "https://api-mainnet.starteos.io/v1/chain/get_table_rows",
    "https://api.bitmars.one/v1/chain/get_table_rows",
    "https://api.eos.detroitledger.tech/v1/chain/get_table_rows",
    "https://api.eos.heliosrising.com/v1/chain/get_table_rows",
    "https://api.eos.wiki/v1/chain/get_table_rows",
    "https://api.eosbejing.one/v1/chain/get_table_rows",
    "https://api.eosdublin.io/v1/chain/get_table_rows",
    "https://api.eoseoul.io/v1/chain/get_table_rows",
    "https://api.eosio.cr/v1/chain/get_table_rows",
    "https://api.eossweden.eu/v1/chain/get_table_rows",
    "https://api.eosvenezuela.io/v1/chain/get_table_rows",
    "https://api.helloeos.com.cn/v1/chain/get_table_rows",
    "https://eos-api.b1.run/v1/chain/get_table_rows",
    "https://eos.pink.gg/v1/chain/get_table_rows",
    "https://eosbp.atticlab.net/v1/chain/get_table_rows",
    "https://eosmainnet.more.top/v1/chain/get_table_rows",
    "https://fn001.eossv.org/v1/chain/get_table_rows",
    "https://keycommunity.club/api/v1/chain/get_table_rows",
    "https://mainnet.genereos.io/v1/chain/get_table_rows",
    "https://node1.zbeos.com/v1/chain/get_table_rows",
    "https://node2.zbeos.com/v1/chain/get_table_rows",
    "https://seed01.eosusa.news/v1/chain/get_table_rows"                 
];
//this is a list of most the 'major' active https endpoints 


 
//adjust timeout to whatever you want, this sets anything that doesn't respond within 5 seconds to infinity effectively making sure they don't make the topEndpoints list
async function measureLatency(url, timeout = 5000) {
    const controller = new AbortController();
    const signal = controller.signal;

    const start = performance.now();

    const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
            controller.abort();
            resolve(Infinity);
        }, timeout);
    });

    try {
        const response = await Promise.race([
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: '{"table":"area","scope":"sovspacegame","code":"sovspacegame","json":"true"}',
                signal,
            }),
            timeoutPromise,
        ]);

        if (response && response.ok) {
            const end = performance.now();
            return end - start;
        }
    } catch (e) {
        console.log(`Error fetching ${url}`);
    }
    return Infinity;
}

 
// this ranks the results from measureLatency
async function getFastestEndpoints() {
    const latencyResults = await Promise.all(endpoints.map((url) => measureLatency(url)));
    const sortedEndpoints = endpoints
        .map((url, index) => ({ url, latency: latencyResults[index] }))
        .sort((a, b) => a.latency - b.latency);
    return sortedEndpoints;
}

 
 //change 8 to whatver amount of topEndpoints you want to pull, or you could check the array length but this saves resources
function getTheNode() {
    const randomIndex = Math.floor(Math.random() * 8);
    let theNode = topEndpoints[randomIndex];
    return theNode;
}


async function roamingdoit()
{

//alert("ROAM 2" );


const sortedEndpoints = await getFastestEndpoints();
topEndpoints = sortedEndpoints.slice(0, 8).map((endpoint) => endpoint.url); //use slice to decide how many of the endpoints you want to use, here i have it set to 8
console.log(topEndpoints); //always nice to see list of fasterst responding nodes for your connection
let endpointIndex = 0;
/*
// if you want to use a loop to cycle through sequentially, sets it to the fastest endoint first and then cycles sequentially each time loop iterates..
while ('whatever you want to have as condition') {
thenode = topEndpoints[endpointIndex];
endpointIndex = (endpointIndex + 1) % topEndpoints.length;
}

*/

} // roamingdoit



async function changeautonode()
{

//alert("ROAM 2" );

if ( topEndpoints.length > 0)
{
mynode = getTheNode();

mynode = mynode.replace("https://","");
mynode = mynode.replace("/v1/chain/get_table_rows","");
//mynode =  "https://eos.greymass.com/v1/chain/get_table_rows",

//alert("mynode: " + mynode + " :" + topEndpoints.length );

console.log("change node to "+ mynode);


thenode = mynode;

 

} // if ( topEndpoints.length > 0)


} // roamingdoit2