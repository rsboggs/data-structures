describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property("head");
    expect(doublyLinkedList).to.have.property("tail");
  });

  it('it should have method addToTail, removeHead, and contains', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.addToTail(15);
    expect(doublyLinkedList.tail.value).to.equal(15);
  });

  it('should remove the head when removeHead is called', function() {
    doublyLinkedList.addToTail(10);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.head.value).to.equal(10);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(3);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(10);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.removeHead()).to.equal(10);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(10);
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.contains(10)).to.equal(true);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(3)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(1)).to.equal(false);
  });

  it('should have method addToHead and removeTail', function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  it('should set a new head when addToHead is called', function() {
    doublyLinkedList.addToHead(10);
    expect(doublyLinkedList.head.value).to.equal(10);
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToHead(2);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.head.value).to.equal(3);
  });

  it('should remove tail when removeTail is called', function() {
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToHead(2);
    doublyLinkedList.addToHead(3);
    expect(doublyLinkedList.removeTail()).to.equal(1);
  });
});
















