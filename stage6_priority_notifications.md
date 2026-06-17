# Stage 6 - Priority Notifications

## Priority Order

1. Placement (Highest Priority)
2. Result
3. Event (Lowest Priority)

## Priority Weights

| Notification Type | Weight |
|-------------------|---------|
| Placement | 3 |
| Result | 2 |
| Event | 1 |

## Approach

A Min Heap of size 10 is maintained to store the top priority notifications.

### Algorithm

1. Assign weight based on notification type.
2. Calculate priority score.
3. Insert notifications into the heap.
4. If heap size exceeds 10, remove the lowest priority element.
5. Final heap contains the top 10 notifications.

## Time Complexity

For N notifications:

O(N log K)

where:

- N = total notifications
- K = number of top notifications required

Since K = 10, performance remains efficient even for large datasets.

## Handling New Notifications

Whenever a new notification arrives:

1. Calculate its priority.
2. Compare with the minimum element in the heap.
3. Replace the minimum element if the new notification has higher priority.
4. Maintain heap size at 10.

## Benefits

- Efficient memory usage.
- Fast retrieval of important notifications.
- Scalable for large numbers of notifications.