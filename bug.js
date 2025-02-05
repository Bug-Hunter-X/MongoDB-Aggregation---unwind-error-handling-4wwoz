```javascript
const pipeline = [
  {
    $lookup: {
      from: "collection2",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results"
    }
  },
  {
    $unwind: "$results" // This stage causes the error if no match is found
  }
];

await collection1.aggregate(pipeline).toArray();
```