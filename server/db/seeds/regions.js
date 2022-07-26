exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('regions')
    .del()
    .then(function () {
      return knex('regions').insert([
        {
          id: 1,
          region_name: 'North',
          image:
            'https://images.unsplash.com/photo-1601455842814-a2ed9751e9bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxhdWNrbGFuZHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          region_name: 'South',
          image:
            'https://images.unsplash.com/photo-1634101351064-cf35398484e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
          id: 3,
          region_name: 'Central',
          image:
            'https://images.unsplash.com/photo-1595125989588-36d745a2a828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
          id: 4,
          region_name: 'East',
          image:
            'https://images.unsplash.com/photo-1602237248866-3841ca374afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGF1Y2tsYW5kfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 5,
          region_name: 'West',
          image:
            'https://images.unsplash.com/photo-1638664705205-03ab5a6357f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
      ])
    })
}
