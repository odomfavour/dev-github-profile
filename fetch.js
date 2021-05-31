let sum = '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';
let user = 'odomfavour'

// fetch('https://api.github.com/users/' + user, {
//     method: 'POST',
//     headers: { "Content-Type" : "application/json",
//     'authorization': "token " + sum,
// },
//     body: JSON.stringify({
//         query: 
//             `
//             query { user(login: "odomfavour") { name login bio avatarUrl email followers{ totalCount } following { totalCount } starredRepositories{ totalCount } repositories(first:20) { totalCount edges {node { name description updatedAt openGraphImageUrl primaryLanguage{ name} parent { name owner { login }}}  } } }
//             }
//             `
//     })
// }).then(res => res.json())
// .then(data => {
//     console.log(data.data)    
//     })

var query = `query { user(login: "odomfavour") { name login bio avatarUrl email followers{ totalCount } following { totalCount } starredRepositories{ totalCount } repositories(first:20) { totalCount edges {node { name description updatedAt openGraphImageUrl primaryLanguage{ name} parent { name owner { login }}}  } } }
 }`;
 
fetch('https://api.github.com/users/odomfavour', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    // variables: { dice, sides },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));