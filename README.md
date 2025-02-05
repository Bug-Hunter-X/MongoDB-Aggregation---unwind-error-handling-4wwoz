# MongoDB Aggregation: $unwind Error Handling

This repository demonstrates a common error encountered when using the `$unwind` stage in MongoDB aggregation pipelines after a `$lookup` stage. The error occurs when a document in the source collection doesn't have a matching document in the target collection, resulting in an empty array for the joined field.

The `$unwind` operator then throws an error because it can't process an empty array.

## Bug

The provided `bug.js` file shows the problematic aggregation pipeline.  The `$unwind` stage fails when a document in `collection1` doesn't have a match in `collection2`.

## Solution

The `bugSolution.js` file demonstrates how to address this error by using the `$unwind` operator's `preserveNullAndEmptyArrays` option. This option tells `$unwind` to not throw an error if the input array is empty, but rather preserve the original document and add a null or empty array for the deconstructed field.  Alternatively, you can use a `$match` stage to filter out documents before `$unwind` that lack related documents.