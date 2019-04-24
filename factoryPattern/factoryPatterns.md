# Types of factory Pattern

Factory methods and patterns encapsulate the logic for creation of objects away from the consumer. 

## Simple factory methods
Where a single factory creates a single type of object are not considered a design pattern.

## Factory pattern
Factories are unified by an interface. The consumer can then instanciate different factories to create the desired object depending on the use case.

## Abstract factory pattern
Factories are unified by an interface. The factories are used to create a group of objects which belong together. The classic use case* is to create UI components. If you have an a set of Apple components and a set of Windows components, then you will only want either the Apple components OR the Windows components. For this situation, you would have two Abstract factories an AppleAbstractFactory and a WindowsAbstractFactory. One of these would be instantiated depending on the situation. This example is dated, and unrelevant to JS. In Modular ICE we would benefit from a barcode based UI component AbstractFactory and a keyboard based (tabIndexed and style ::focus) Abstract factory. 
*The use case in Design Patterns Gang Of Four is actually just around look and feel, but in their solution different CSS classes wasn't an option.