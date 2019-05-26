# Singleton Pattern

<img src="../images/singleton.png"></img>

In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system. The concept is sometimes generalized to systems that operate more efficiently when only one object exists. <a href="https://en.wikipedia.org/wiki/Singleton_pattern">Wikipedia</a>

## Motivation

Sometimes it's important to have only one instance for a class. For example, in a system there should be only one window manager (or only a file system or only a print spooler). Usually singletons are used for centralized management of internal or external resources and they provide a global point of access to themselves.

The singleton pattern is one of the simplest design patterns: it involves only one class which is responsible to instantiate itself, to make sure it creates not more than one instance; in the same time it provides a global point of access to that instance. In this case the same instance can be used from everywhere, being impossible to invoke directly the constructor each time. <a href="http://www.oodesign.com/singleton-pattern.html">oodesign</a>

## Intent

- Ensure that only one instance of a class is created.
- Provide a global point of access to the object.
