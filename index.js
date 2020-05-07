class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

 add(item) {
      this.items.push(item)
      this.items.sort((a,b) => a-b)
      this.length = this.items.length
    }
  

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0){
      throw new Error ('EmptySortedList')
    } else {
      let arr1 = this.items
      return Math.max(...arr1)
    }
  }

  min() {
    if (this.length === 0){
      throw new Error ('EmptySortedList')
    } else {
      let arr1 = this.items
      return Math.min(...arr1)
    }
  }

  sum() {
    if (this.length === 0){
      return 0
    } else {
      return this.items.reduce((a,b) => a+b)
  }
}

  avg() {
    if (this.length === 0){
      throw new Error ('EmptySortedList')
    } else {
      return this.sum()/this.length
  }
  }
}

module.exports = SortedList;
