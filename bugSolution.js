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
    $unwind: {
      path: "$results",
      preserveNullAndEmptyArrays: true
    }
  }
];
await collection1.aggregate(pipeline).toArray();
```