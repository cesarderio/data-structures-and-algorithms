# Selection - Sort

Selection Sort is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.

## Challenge

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

![UML](../assets/selection-sort-final.png);


### Pseudocode

        SelectionSort(int[], arr) => {
          let n = arr.length;
          for(i = 0; i = n - 1){
            let min = i;
            for(j = i + 1 to n){
              if(arr[j] < arr[min]){
              min = j;
              }
            }
            let temp = arr[min];
            arr[min] = arr[i];
            let arr[i] = temp;
          }
        }


## Approach & Efficiency

**Approach**
![UML](../assets/selectionSort.png);

We first start with index 0 and traverse the array to check to see if there is a smaller number elsewhere inside the array. If there is, we swap with that smaller number replacing the larger number. If not, we move onto our next index at 1, and traverse the array to run the same check, if so swap, if not move onto the next index. We traverse and check for each index position. Once the function gets to the last number, there is no where else to go and the loops completes and returns the array now sorted correctly.


**Time: O(n^2)**

* The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.

**Space: O(1)**

* No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).


