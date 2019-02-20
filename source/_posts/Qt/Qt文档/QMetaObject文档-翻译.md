---
title: 'QMetaObject文档[翻译]'
comments: false
date: 2019-02-20 16:06:33
tag:
categories:
---
# QMetaObject Class
The QMetaObject class contains meta-information about Qt objects. More...  
元对象类储存Qt对象的元信息。

- **Header**    :	#include <QMetaObject> 
- **qmake**     :	QT += core

## Public Types
class 	Connection

## Public Functions
```
QMetaClassInfo      classInfo(int index) const
int                 classInfoCount() const
int                 classInfoOffset() const
const char *        className() const
QMetaMethod         constructor(int index) const
int                 constructorCount() const
QMetaEnum           enumerator(int index) const
int                 enumeratorCount() const
int                 enumeratorOffset() const
int                 indexOfClassInfo(const char *name) const
int                 indexOfConstructor(const char *constructor) const
int                 indexOfEnumerator(const char *name) const
int                 indexOfMethod(const char *method) const
int                 indexOfProperty(const char *name) const
int                 indexOfSignal(const char *signal) const
int                 indexOfSlot(const char *slot) const
bool                inherits(const QMetaObject *metaObject) const
QMetaMethod         method(int index) const
int                 methodCount() const
int                 methodOffset() const
QObject *           newInstance(QGenericArgument val0 = QGenericArgument( Q_NULLPTR ), QGenericArgument val1 = QGenericArgument(), QGenericArgument val2 = QGenericArgument(), QGenericArgument val3 = QGenericArgument(), QGenericArgument val4 = QGenericArgument(), QGenericArgument val5 = QGenericArgument(), QGenericArgument val6 = QGenericArgument(), QGenericArgument val7 = QGenericArgument(), QGenericArgument val8 = QGenericArgument(), QGenericArgument val9 = QGenericArgument()) const
QMetaProperty       property(int index) const
int                 propertyCount() const
int                 propertyOffset() const
const QMetaObject*  superClass() const
QMetaProperty       userProperty() const
```
## Static Public Members
```
bool        checkConnectArgs(const char *signal, const char *method)
bool        checkConnectArgs(const QMetaMethod &signal, const QMetaMethod &method)
void        connectSlotsByName(QObject *object)
bool        invokeMethod(QObject *obj, const char *member, Qt::ConnectionType type, QGenericReturnArgument ret, QGenericArgument val0 = QGenericArgument( Q_NULLPTR ), QGenericArgument val1 = QGenericArgument(), QGenericArgument val2 = QGenericArgument(), QGenericArgument val3 = QGenericArgument(), QGenericArgument val4 = QGenericArgument(), QGenericArgument val5 = QGenericArgument(), QGenericArgument val6 = QGenericArgument(), QGenericArgument val7 = QGenericArgument(), QGenericArgument val8 = QGenericArgument(), QGenericArgument val9 = QGenericArgument())
bool        invokeMethod(QObject *obj, const char *member, QGenericReturnArgument ret, QGenericArgument val0 = QGenericArgument( Q_NULLPTR ), QGenericArgument val1 = QGenericArgument(), QGenericArgument val2 = QGenericArgument(), QGenericArgument val3 = QGenericArgument(), QGenericArgument val4 = QGenericArgument(), QGenericArgument val5 = QGenericArgument(), QGenericArgument val6 = QGenericArgument(), QGenericArgument val7 = QGenericArgument(), QGenericArgument val8 = QGenericArgument(), QGenericArgument val9 = QGenericArgument())
bool        invokeMethod(QObject *obj, const char *member, Qt::ConnectionType type, QGenericArgument val0 = QGenericArgument( Q_NULLPTR ), QGenericArgument val1 = QGenericArgument(), QGenericArgument val2 = QGenericArgument(), QGenericArgument val3 = QGenericArgument(), QGenericArgument val4 = QGenericArgument(), QGenericArgument val5 = QGenericArgument(), QGenericArgument val6 = QGenericArgument(), QGenericArgument val7 = QGenericArgument(), QGenericArgument val8 = QGenericArgument(), QGenericArgument val9 = QGenericArgument())
bool        invokeMethod(QObject *obj, const char *member, QGenericArgument val0 = QGenericArgument( Q_NULLPTR ), QGenericArgument val1 = QGenericArgument(), QGenericArgument val2 = QGenericArgument(), QGenericArgument val3 = QGenericArgument(), QGenericArgument val4 = QGenericArgument(), QGenericArgument val5 = QGenericArgument(), QGenericArgument val6 = QGenericArgument(), QGenericArgument val7 = QGenericArgument(), QGenericArgument val8 = QGenericArgument(), QGenericArgument val9 = QGenericArgument())
bool        invokeMethod(QObject *receiver, PointerToMemberFunction function, Qt::ConnectionType type = Qt::AutoConnection, MemberFunctionReturnType *ret = nullptr)
bool        invokeMethod(QObject *receiver, PointerToMemberFunction function, MemberFunctionReturnType *ret)
bool        invokeMethod(QObject *context, Functor function, Qt::ConnectionType type = Qt::AutoConnection, FunctorReturnType *ret = nullptr)
bool        invokeMethod(QObject *context, Functor function, FunctorReturnType *ret)
QByteArray  normalizedSignature(const char *method)
QByteArray  normalizedType(const char *type)
```
## Macros
```
QGenericArgument        Q_ARG(Type, const Type &value)
QGenericReturnArgument  Q_RETURN_ARG(Type, Type &value)
```
## Detailed Description
>The QMetaObject class contains meta-information about Qt objects.

元对象类储存Qt对象的元信息。  

>The Qt Meta-Object System in Qt is responsible for the signals and slots inter-object communication mechanism, runtime type information, and the Qt property system. A single QMetaObject instance is created for each QObject subclass that is used in an application, and this instance stores all the meta-information for the QObject subclass. This object is available as QObject::metaObject().

Qt中的Qt元对象系统负责对象间交流机制（信号和槽）、运行时态信息和qt属性系统。每一个QObject子对象在应用中使用时都会创建一个单例QMetaObject实例，实例储存QObject子对象的所有元信息。实例可以通过QObject::metaObject()获得。

>This class is not normally required for application programming, but it is useful if you write meta-applications, such as scripting engines or GUI builders.

这个类在一般编程中是必须的，但是在元应用程序是需要的，如脚本引擎和GUI构建器。

>The functions you are most likely to find useful are these:

 函数中，你最可能发现有用的是：
>- className() returns the name of a class. 
>- superClass() returns the superclass's meta-object.
>- method() and methodCount() provide information about a class's meta-methods (signals, slots and other invokable member functions).
>- enumerator() and enumeratorCount() and provide information about a class's enumerators.
>- propertyCount() and property() provide information about a class's properties.
>- constructor() and constructorCount() provide information about a class's meta-constructors.

- className() 返回类名。
- superClass() 返回父类的元对象。
- method() 和 methodCount() 提供类的元方法（信号、槽和其他可调用的成员函数）的信息。
- enumerator() 和 enumeratorCount() 提供类的枚举成员的信息。
- propertyCount() and property()提供类的属性信息。
- constructor() and constructorCount()提供类的元构造器信息。


>The index functions indexOfConstructor(), indexOfMethod(), indexOfEnumerator(), and indexOfProperty() map names of constructors, member functions, enumerators, or properties to indexes in the meta-object. For example, Qt uses indexOfMethod() internally when you connect a signal to a slot.

索引函数indexOfConstructor(), indexOfMethod(), indexOfEnumerator(), and indexOfProperty() 将构造函数、成员函数、枚举数或属性的名称映射到元对象中的索引中。例如，但你将一个信号关联到一个槽，Qt内部使用indexOfMethod()。

>Classes can also have a list of name--value pairs of additional class information, stored in QMetaClassInfo objects. The number of pairs is returned by classInfoCount(), single pairs are returned by classInfo(), and you can search for pairs with indexOfClassInfo().

类可以有一个额外的类信息的name—value键值对列表，存储在QMetaClassInfo对象中。键值对的数量等于classInfoCount()，单个键值对获取通过classInfo()获取，并且你可以通过indexOfClassInfo() 查找键值对。

>See also QMetaClassInfo, QMetaEnum, QMetaMethod, QMetaProperty, QMetaType, and Meta-Object System.

## Member Function Documentation

### [static] bool QMetaObject::checkConnectArgs(const char *signal, const char *method)

>Returns true if the signal and method arguments are compatible; otherwise returns false.

如果信号和方法两个参数兼容，返回true，否则返回false。

>Both signal and method are expected to be normalized.

信号和方法将被标准化。

See also normalizedSignature().

### [static] bool QMetaObject::checkConnectArgs(const QMetaMethod &signal, const QMetaMethod &method)

>This is an overloaded function.

这是一个重载方法。

>Returns true if the signal and method arguments are compatible; otherwise returns false.

如果信号和方法两个参数兼容，返回true，否则返回false。
>This function was introduced in Qt 5.0.

### QMetaClassInfo QMetaObject::classInfo(int index) const

>Returns the meta-data for the item of class information with the given index.

根据具有给定索引，返回类信息项的元数据。

**Example:**
```
  class MyClass : public QObject
  {
      Q_OBJECT
      Q_CLASSINFO("author", "Sabrina Schweinsteiger")
      Q_CLASSINFO("url", "http://doc.moosesoft.co.uk/1.0/")

  public:
      ...
  };
```
>See also classInfoCount(), classInfoOffset(), and indexOfClassInfo().

### int QMetaObject::classInfoCount() const

>Returns the number of items of class information in this class.

返回该类的类数据项的数量。

>See also classInfo(), classInfoOffset(), and indexOfClassInfo().

### int QMetaObject::classInfoOffset() const

>Returns the class information offset for this class; i.e. the index position of this class's first class information item.

返回该类的类信息偏移量。即该类的第一个类信息项的索引位置。

>If the class has no superclasses with class information, the offset is 0; otherwise the offset is the sum of all the class information items in the class's superclasses.

如果该类的类信息中没有父类，偏移为0；否则偏移量是父类中类信息项的总和。

>See also classInfo(), classInfoCount(), and indexOfClassInfo().

### const char *QMetaObject::className() const

>Returns the class name.

返回类名。

>See also superClass().

### [static] void QMetaObject::connectSlotsByName(QObject *object)

>Searches recursively for all child objects of the given object, and connects matching signals from them to slots of object that follow the following form:

递归的查询给定的对象的所有子对象，并连接子对象中匹配的信号到符合以下形式的对象槽：
```
  void on_<object name>_<signal name>(<signal parameters>);
```

>Let's assume our object has a child object of type QPushButton with the object name button1. The slot to catch the button's clicked() signal would be:

让我们假设我们的对象有一个QPushButton类型，对象名为button1的子对象。捕获该按钮的clicked()信号的槽是：
```
  void on_button1_clicked();
```
>If object itself has a properly set object name, its own signals are also connected to its respective slots.

如果对象本身有正确设置的对象名称，它自己的信号也被连接到它各自的槽。

>See also QObject::setObjectName().

### QMetaMethod QMetaObject::constructor(int index) const

>Returns the meta-data for the constructor with the given index.

根据给定的索引（index），返回构造器的元数据。
>This function was introduced in Qt 4.5.  
>See also constructorCount() and newInstance().

### int QMetaObject::constructorCount() const
>Returns the number of constructors in this class.

返回该类中构造器的数量。

>This function was introduced in Qt 4.5.  
>See also constructor() and indexOfConstructor().

### QMetaEnum QMetaObject::enumerator(int index) const
>Returns the meta-data for the enumerator with the given index.

根据给定的索引（index），返回枚举器的元数据。
>See also enumeratorCount(), enumeratorOffset(), and indexOfEnumerator().

### int QMetaObject::enumeratorCount() const
>Returns the number of enumerators in this class.

返回该类中枚举器的数量。

>See also enumerator(), enumeratorOffset(), and indexOfEnumerator().
### int QMetaObject::enumeratorOffset() const
>Returns the enumerator offset for this class; i.e. the index position of this class's first enumerator.

返回该类中枚举器的偏移量；即该类中第一个构造器的索引位置。

>If the class has no superclasses with enumerators, the offset is 0; otherwise the offset is the sum of all the enumerators in the class's superclasses.

如果该类没有带有枚举器的父类，则偏移量为0；否则偏移量为所有父类中枚举器之和。

>See also enumerator(), enumeratorCount(), and indexOfEnumerator().
### int QMetaObject::indexOfClassInfo(const char *name) const
>Finds class information item name and returns its index; otherwise returns -1.

查找类信息项名称，返回它的索引；否则返回-1。

>See also classInfo(), classInfoCount(), and classInfoOffset().
### int QMetaObject::indexOfConstructor(const char *constructor) const
>Finds constructor and returns its index; otherwise returns -1.

查找类构造器返回它的索引；否则返回-1。

>Note that the constructor has to be in normalized form, as returned by normalizedSignature().

注意：构造函数必须是规范形式的，同normalizedSignature()返回值。

>This function was introduced in Qt 4.5.  
>See also constructor(), constructorCount(), and normalizedSignature().

### int QMetaObject::indexOfEnumerator(const char *name) const

>Finds enumerator name and returns its index; otherwise returns -1.

查找枚举器名称，并返回索引；否则返回-1。

>See also enumerator(), enumeratorCount(), and enumeratorOffset().
### int QMetaObject::indexOfMethod(const char *method) const
>Finds method and returns its index; otherwise returns -1.

查找方法，返回索引；否则返回-1。

>Note that the method has to be in normalized form, as returned by normalizedSignature().

注意：函数必须是规范形式的，同normalizedSignature()返回值。

>See also method(), methodCount(), methodOffset(), and normalizedSignature().
### int QMetaObject::indexOfProperty(const char *name) const
>Finds property name and returns its index; otherwise returns -1.

查找属性，返回索引；否则返回-1。

>See also property(), propertyCount(), and propertyOffset().
### int QMetaObject::indexOfSignal(const char *signal) const
>Finds signal and returns its index; otherwise returns -1.

查找信号 ，返回索引；否则返回-1。
>This is the same as indexOfMethod(), except that it will return -1 if the method exists but isn't a signal.

这与indexOfMethod()相同，不同的是如果方法存在，但不是信号，返回-1。

>Note that the signal has to be in normalized form, as returned by normalizedSignature().

注意：信号必须是格式化的，同normalizedSignature()的返回值。
>See also indexOfMethod(), normalizedSignature(), method(), methodCount(), and methodOffset().
### int QMetaObject::indexOfSlot(const char *slot) const
>Finds slot and returns its index; otherwise returns -1.

查找信号 ，返回索引；否则返回-1。

>This is the same as indexOfMethod(), except that it will return -1 if the method exists but isn't a slot.

这与indexOfMethod()相同，不同的是如果方法存在，但不是槽，返回-1。
>See also indexOfMethod(), method(), methodCount(), and methodOffset().
### bool QMetaObject::inherits(const QMetaObject *metaObject) const
>Returns true if the class described by this QMetaObject inherits the type described by metaObject; otherwise returns false.

如果该类的QMetaObject继承于metaObject的类型，则返回true，否则返回false。

>A type is considered to inherit itself.

一个类型被视为继承自身。
>This function was introduced in Qt 5.7.
### [static] bool QMetaObject::invokeMethod(QObject *obj, const char *member, Qt::ConnectionType type, QGenericReturnArgument ret, QGenericArgument val0 = QGenericArgument( Q_NULLPTR ), QGenericArgument val1 = QGenericArgument(), QGenericArgument val2 = QGenericArgument(), QGenericArgument val3 = QGenericArgument(), QGenericArgument val4 = QGenericArgument(), QGenericArgument val5 = QGenericArgument(), QGenericArgument val6 = QGenericArgument(), QGenericArgument val7 = QGenericArgument(), QGenericArgument val8 = QGenericArgument(), QGenericArgument val9 = QGenericArgument())
>Invokes the member (a signal or a slot name) on the object obj. Returns true if the member could be invoked. Returns false if there is no such member or the parameters did not match.

调用 obj 上的成员函数（信号或槽）。如果函数（member）可以被调用返回true。如果没有这个函数或者参数不匹配返回false。

>The invocation can be either synchronous or asynchronous, depending on type:

该调用可以时同步的，也可以时异步的。取决于类型：
•	If type is Qt::DirectConnection, the member will be invoked immediately.
•	如果类型是直接连接（Qt::DirectConnection），函数将立刻被调用。
•	If type is Qt::QueuedConnection, a QEvent will be sent and the member is invoked as soon as the application enters the main event loop.
•	如果类型是队列连接（Qt::QueuedConnection），一个Qt事件（QEvent）被发送，应用进入主事件循环则函数将立刻被调用。
•	If type is Qt::BlockingQueuedConnection, the method will be invoked in the same way as for Qt::QueuedConnection, except that the current thread will block until the event is delivered. Using this connection type to communicate between objects in the same thread will lead to deadlocks.
•	如果类型是阻塞的队列连接（Qt::BlockingQueuedConnection），函数将被同队列连接（Qt::QueuedConnection）相同的方式调用，除非当前的线程将阻塞，直到事件被传递。用该连接类型连接同一个线程中的两个对象，将会导致死锁。
•	If type is Qt::AutoConnection, the member is invoked synchronously if obj lives in the same thread as the caller; otherwise it will invoke the member asynchronously.
•	如果类型是阻塞的自动连接（Qt::AutoConnection），如果obj同调用者在同一个线程，函数将被同步调用；否则函数将被异步调用。

>The return value of the member function call is placed in ret. If the invocation is asynchronous, the return value cannot be evaluated. You can pass up to ten arguments (val0, val1, val2, val3, val4, val5, val6, val7, val8, and val9) to the member function.

当前函数返回值放在 ret参数中。如果调用是异步调用，返回值不能估计。你可以将最多10个参数（val0, val1, val2, val3, val4, val5, val6, val7, val8, and val9）传递给成员函数。

>QGenericArgument and QGenericReturnArgument are internal helper classes. Because signals and slots can be dynamically invoked, you must enclose the arguments using the Q_ARG() and Q_RETURN_ARG() macros. Q_ARG() takes a type name and a const reference of that type; Q_RETURN_ARG() takes a type name and a non-const reference.

QGenericArgument和QGenericReturnArgument是内部的帮助类。因为信号和槽可以被动态的调用，你必须用Q_ARG()和Q_RETURN_ARG()宏把参数扩起来。Q_ARG()接受该类型的类型名称和Const引用；Q_RETURN_ARG()接受类型名称和非Const引用。

>You only need to pass the name of the signal or slot to this function, not the entire signature. For example, to asynchronously invoke the quit() slot on a QThread, use the following code:

你只需要将信号和槽的名称传递给此函数，而不需要整个签名。例如，要异步调用Qt线程（QThread）的槽函数（quit()）。用以下代码：
```
  QMetaObject::invokeMethod(thread, "quit",
                            Qt::QueuedConnection);
```
>With asynchronous method invocations, the parameters must be of types that are known to Qt's meta-object system, because Qt needs to copy the arguments to store them in an event behind the scenes. If you try to use a queued connection and get the error message

对于异步方法的调用，因为Qt需要复制参数并将它们存储在幕后的事件中,参数必须是Qt的元对象系统知道的类型。如果你尝试使用排队连接并获得错误信息。

>  QMetaObject::invokeMethod: Unable to handle unregistered datatype 'MyType'
>call qRegisterMetaType() to register the data type before you call invokeMethod().

在你调用invokeMethod()之前，用qRegisterMetaType()注册数据类型

>To synchronously invoke the compute(QString, int, double) slot on some arbitrary object obj retrieve its return value:

要同步调用某个任意对象obj的槽 compute(QString, int, double)，返回它的返回值：
```
  QString retVal;
  QMetaObject::invokeMethod(obj, "compute", Qt::DirectConnection,
                            Q_RETURN_ARG(QString, retVal),
                            Q_ARG(QString, "sqrt"),
                            Q_ARG(int, 42),
                            Q_ARG(double, 9.7));
```
>If the "compute" slot does not take exactly one QString, one int and one double in the specified order, the call will fail.

如果"compute" 槽按顺序接受一个QString，int和double，则调用失败。

>See also Q_ARG(), Q_RETURN_ARG(), qRegisterMetaType(), and QMetaMethod::invoke().

### [static] bool QMetaObject::invokeMethod(QObject *obj, const char *member, QGenericReturnArgument ret, QGenericArgument val0 = QGenericArgument( Q_NULLPTR ), QGenericArgument val1 = QGenericArgument(), QGenericArgument val2 = QGenericArgument(), QGenericArgument val3 = QGenericArgument(), QGenericArgument val4 = QGenericArgument(), QGenericArgument val5 = QGenericArgument(), QGenericArgument val6 = QGenericArgument(), QGenericArgument val7 = QGenericArgument(), QGenericArgument val8 = QGenericArgument(), QGenericArgument val9 = QGenericArgument())

>This function overloads invokeMethod().

改函数重载invokeMethod()。

>This overload always invokes the member using the connection type Qt::AutoConnection.

该重载方式总是用Qt::AutoConnection的连接类型调用成员函数（member）。
### [static] bool QMetaObject::invokeMethod(QObject *obj, const char *member, Qt::ConnectionType type, QGenericArgument val0 = QGenericArgument( Q_NULLPTR ), QGenericArgument val1 = QGenericArgument(), QGenericArgument val2 = QGenericArgument(), QGenericArgument val3 = QGenericArgument(), QGenericArgument val4 = QGenericArgument(), QGenericArgument val5 = QGenericArgument(), QGenericArgument val6 = QGenericArgument(), QGenericArgument val7 = QGenericArgument(), QGenericArgument val8 = QGenericArgument(), QGenericArgument val9 = QGenericArgument())

>This function overloads invokeMethod().

改函数重载invokeMethod()。

>This overload can be used if the return value of the member is of no interest.

如果不需要返回值，使用该重载方式

### [static] bool QMetaObject::invokeMethod(QObject *obj, const char *member, QGenericArgument val0 = QGenericArgument( Q_NULLPTR ), QGenericArgument val1 = QGenericArgument(), QGenericArgument val2 = QGenericArgument(), QGenericArgument val3 = QGenericArgument(), QGenericArgument val4 = QGenericArgument(), QGenericArgument val5 = QGenericArgument(), QGenericArgument val6 = QGenericArgument(), QGenericArgument val7 = QGenericArgument(), QGenericArgument val8 = QGenericArgument(), QGenericArgument val9 = QGenericArgument())
>This function overloads invokeMethod().

改函数重载invokeMethod()。

>This overload invokes the member using the connection type Qt::AutoConnection and ignores return values.

该重载方式用Qt::AutoConnection的连接类型调用成员函数（member）并忽略返回值。

### [static] bool QMetaObject::invokeMethod(QObject *receiver, PointerToMemberFunction function, Qt::ConnectionType type = Qt::AutoConnection, MemberFunctionReturnType *ret = nullptr)

>This is an overloaded function.

改函数重载invokeMethod()。

>This function was introduced in Qt 5.10.

### [static] bool QMetaObject::invokeMethod(QObject *receiver, PointerToMemberFunction function, MemberFunctionReturnType *ret)

>This is an overloaded function.

改函数重载invokeMethod()。

>This overload invokes the member function using the connection type Qt::AutoConnection.

该重载方式用Qt::AutoConnection的连接类型调用成员函数（function）。 
>This function was introduced in Qt 5.10.

### [static] bool QMetaObject::invokeMethod(QObject *context, Functor function, Qt::ConnectionType type = Qt::AutoConnection, FunctorReturnType *ret = nullptr)
>This is an overloaded function.

改函数重载invokeMethod()。

>Call the functor in the event loop of context.

调用事件循环中的functor。（即function）

>This function was introduced in Qt 5.10.
### [static] bool QMetaObject::invokeMethod(QObject *context, Functor function, FunctorReturnType *ret)

>This is an overloaded function.

改函数重载invokeMethod()。

>Call the functor in the event loop of context using the connection type Qt::AutoConnection.

用Qt::AutoConnection连接类型，调用事件循环中的functor。（即function）
>This function was introduced in Qt 5.10.
### QMetaMethod QMetaObject::method(int index) const
>Returns the meta-data for the method with the given index.

根据索引返回方法的元数据。

>See also methodCount(), methodOffset(), and indexOfMethod().
### int QMetaObject::methodCount() const
>Returns the number of methods in this class, including the number of methods provided by each base class. These include signals and slots as well as normal member functions.

返回该类中方法的总数，包括每一个基类提供的方法数。方法包括信号、槽和成员函数。

>Use code like the following to obtain a QStringList containing the methods specific to a given class:

使用如下代码获得包含给定类的具体方法信息的QStringList ：
```
  const QMetaObject* metaObject = obj->metaObject();
  QStringList methods;
  for(int i = metaObject->methodOffset(); i < metaObject->methodCount(); ++i)
      methods << QString::fromLatin1(metaObject->method(i).methodSignature());
```

> See also method(), methodOffset(), and indexOfMethod().
### int QMetaObject::methodOffset() const
>Returns the method offset for this class; i.e. the index position of this class's first member function.

返回该类的方法偏移量。即该类的第一个成员函数的索引位置。

The offset is the sum of all the methods in the class's superclasses (which is always positive since QObject has the deleteLater() slot and a destroyed() signal).

这个偏移量是类的父类中所有方法的总和。（父类：继承于QObject有deleteLater() 槽和一个 destroyed()信息。）

See also method(), methodCount(), and indexOfMethod().

### QObject *QMetaObject::newInstance(QGenericArgument val0 = QGenericArgument( Q_NULLPTR ), QGenericArgument val1 = QGenericArgument(), QGenericArgument val2 = QGenericArgument(), QGenericArgument val3 = QGenericArgument(), QGenericArgument val4 = QGenericArgument(), QGenericArgument val5 = QGenericArgument(), QGenericArgument val6 = QGenericArgument(), QGenericArgument val7 = QGenericArgument(), QGenericArgument val8 = QGenericArgument(), QGenericArgument val9 = QGenericArgument()) const

>Constructs a new instance of this class. You can pass up to ten arguments (val0, val1, val2, val3, val4, val5, val6, val7, val8, and val9) to the constructor. Returns the new object, or 0 if no suitable constructor is available.

创建一个类的新对象。你可以传递10个参数(val0, val1, val2, val3, val4, val5, val6, val7, val8, and val9)到构造函数中。

>Note that only constructors that are declared with the Q_INVOKABLE modifier are made available through the meta-object system.

注意：只有用Q_INVOKABLE 修饰的构造函数，能用元对象系统获得。

>This function was introduced in Qt 4.5.  
>See also Q_ARG() and constructor().
### [static] QByteArray QMetaObject::normalizedSignature(const char *method)
Normalizes the signature of the given method.
规范化给定方法的签名。
Qt uses normalized signatures to decide whether two given signals and slots are compatible. Normalization reduces whitespace to a minimum, moves 'const' to the front where appropriate, removes 'const' from value types and replaces const references with values.
Qt使用规范化的签名决定两个给定信号和槽是否兼容。规范化将空白降到最小，在适当是时将“Const”移动到前面，从值类型中移除“Const”，并用值替换Const引用。
See also checkConnectArgs() and normalizedType().
### [static] QByteArray QMetaObject::normalizedType(const char *type)
>Normalizes a type.

规范化给定类型（type）。

>See QMetaObject::normalizedSignature() for a description on how Qt normalizes.

关于Qt如何规范化，参见QMetaObject::normalizedSignature()描述。
**Example:**
```
  QByteArray normType = QMetaObject::normalizedType(" int    const  *");
  // normType is now "const int*"
```
>This function was introduced in Qt 4.2.
>See also normalizedSignature().
### QMetaProperty QMetaObject::property(int index) const
>Returns the meta-data for the property with the given index. If no such property exists, a null QMetaProperty is returned.

根据给定索引（index）返回属性的元数据。如果没有对应的属性存在，返回一个空QMetaProperty。

> See also propertyCount(), propertyOffset(), and indexOfProperty().

### int QMetaObject::propertyCount() const

>Returns the number of properties in this class, including the number of properties provided by each base class.

返回类中属性的数量，包括所有基类的属性的数量。

>Use code like the following to obtain a QStringList containing the properties specific to a given class:

使用如下代码获得包含给定类的具体方法信息的QStringList ：
```
  const QMetaObject* metaObject = obj->metaObject();
  QStringList properties;
  for(int i = metaObject->propertyOffset(); i < metaObject->propertyCount(); ++i)
      properties << QString::fromLatin1(metaObject->property(i).name());
```
>See also property(), propertyOffset(), and indexOfProperty().

### int QMetaObject::propertyOffset() const

>Returns the property offset for this class; i.e. the index position of this class's first property.

返回该类中属性偏移量；即该类中第一个属性的索引位置。

>The offset is the sum of all the properties in the class's superclasses (which is always positive since QObject has the name() property).

这个偏移量是类的父类中所有属性的总和。（父类：继承于QObject有name()属性。）

>See also property(), propertyCount(), and indexOfProperty().

### const QMetaObject *QMetaObject::superClass() const

>Returns the meta-object of the superclass, or 0 if there is no such object.

返回超类的元对象，如果没有对应对象真返回0。

>See also className().
### QMetaProperty QMetaObject::userProperty() const
>Returns the property that has the USER flag set to true.

返回USER标志为true的属性。

>This function was introduced in Qt 4.2.  
>See also QMetaProperty::isUser().
## Macro Documentation
### QGenericArgument Q_ARG(Type, const Type &value)
>This macro takes a Type and a value of that type and returns a QGenericArgument object that can be passed to QMetaObject::invokeMethod().

该宏接受Type类型和Type类型的值，并且返回一个可以传给QMetaObject::invokeMethod()的QGenericArgument 对象。

>See also Q_RETURN_ARG().
### QGenericReturnArgument Q_RETURN_ARG(Type, Type &value)
>This macro takes a Type and a non-const reference to a value of that type and returns a QGenericReturnArgument object that can be passed to QMetaObject::invokeMethod().

该宏接受Type类型和Type类型的非Const引用值，并且返回一个可以传给QMetaObject::invokeMethod()的QGenericReturnArgument对象。

>See also Q_ARG(). 

>© 2017 The Qt Company Ltd. Documentation contributions included herein are the copyrights of their respective owners.
>The documentation provided herein is licensed under the terms of the GNU Free Documentation License version 1.3 as published by the Free Software Foundation.
>Qt and respective logos are trademarks of The Qt Company Ltd. in Finland and/or other countries worldwide. All other trademarks are property of their respective owners.
