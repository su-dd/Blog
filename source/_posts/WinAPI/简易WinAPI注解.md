---
title: 简易WinAPI注解
date: 2019-02-18 14:31:26
tag:
    - WinAPI
categorie:
    - WinAPI
---
# 简易WinAPI注解
## GetWindowInfo
**例子：**
```
WINDOWINFO winfo;
winfo.cbSize = sizeof(winfo);
GetWindowInfo(hWnd, &winfo);
```

**定义：**
```
BOOL WINAPI GetWindowInfo(
    __in HWND hwnd,
    __inout PWINDOWINFO pwi);
```
**作用：**
用于检索有关指定窗口的信息  
**参数：**
```
Hwnd    要检索信息的窗口的句柄。
Pwi     指向一个接收信息的 PWINDOWINFO 结构，注意，在调用该函数之前必须设置 cbSize 成员为sizeof(WINDOWINFO)。
```
**返回值：**  
如果函数成功，则返回值为非零值。
如果该函数失败，则返回值为零。要获取扩展的错误的信息，请调用GetLastError.

## GetClassNameA
**例子：**
```
CHAR szBuff[256];
GetClassNameA(hWnd, szBuff, sizeof(szBuff)/sizeof(CHAR))
```

**定义：**
```
int GetClassName(HWND hWnd, LPTSTR IpClassName, int nMaxCount)；
```
**参数：**
```
hWnd：窗口的句柄及间接给出的窗口所属的类。
IpClassName:指向接收窗口类名字符串的缓冲区的指针。
nMaxCount：指定由参数lpClassName指示的缓冲区的字节数。如果类名字符串大于缓冲区的长度，则多出的部分被截断。
```
**返回值：**  
如果函数成功，返回值为拷贝到指定缓冲区的字符个数：如果函数失败，返回值为0。若想获得更多错误信息，请调用GetLastError函数。

## GetWindowThreadProcessId
例子：
```
DWORD nProcessID = 0;
GetWindowThreadProcessId(hWnd, &nProcessID);
```
**定义：**
```
DWORD GetWindowThreadProcessId(
        HWND hWnd,
        LPDWORD lpdwProcessId);
```
**参数：**
```
hWnd            向函数提供的）被查找窗口的句柄. (输入)
lpdwProcessId	进程号的存放地址（变量地址）(输出)
```
**作用：**
返回线程号，注意，lpdwProcessId 是存放进程号的变量。

## GetCurrentProcessId
例子：
```
GetCurrentProcessId()
```
**定义:**  
```
DWORD WINAPI GetCurrentProcessId(VOID);
```
**作用：**  
获取当前进程的标示符(PID)

## IsWindow
**例子：**
```
IsWindow(hWnd)
```
**定义：**
```
WINUSERAPI
BOOL
WINAPI
IsWindow(HWND hWnd);
```

**参数：**
```
hWnd		窗口的句柄
```
**作用：**
判断句柄是不是一个已存在的窗口，存在返回非0，不存在返回0。

## CreateMutex
**例子：**  
![createMutex例子](../../images/WinAPI/简易WinAPI注解/createMutex例子.png 'createMutex例子')
 
**定义：**
```
HANDLE CreateMutex(
LPSECURITY_ATTRIBUTE SlpMutexAttributes, // 指向安全属性的指针
BOOL bInitialOwner, // 初始化互斥对象的所有者
LPCTSTR lpName // 指向互斥对象名的指针
);
```
**参数：**
```
lpMutexAttributes SECURITY_ATTRIBUTES，指定一个SECURITY_ATTRIBUTES结构，或传递零值（将参数声明为ByVal As Long，并传递零值），表示使用不允许继承的默认描述符
bInitialOwner BOOL，如创建进程希望立即拥有互斥体，则设为TRUE。一个互斥体同时只能由一个线程拥有
lpName String，指定互斥体对象的名字。用vbNullString创建一个未命名的互斥体对象。如已经存在拥有这个名字的一个事件，则打开现有的已命名互斥体。这个名字可能不与现有的事件、信号机、可等待计时器或文件映射相符
```

**返回值：**  
LONG， 
如执行成功，就返回互斥体对象的句柄；
零表示出错。会设置GetLastError。
如果返回的是一个有效句柄，但指定的名字已经存在，GetLastError也会设为ERROR_ALREADY_EXISTS，bInitialOwner的值将会被忽略。
如果调用者限制了权限，GetLastError将会返回ERROR_ACCESS_DENIED，这个时候应该使用OpenMutex函数。

**作用：**  
创建一个互斥体（MUTEX），用于有独占要求的程序 (在其进程运行期间不允许其他使用此端口设备的程序运行，或不允许同名程序运行)。


## OpenMutex
**定义：**
```
HANDLE OpenMutex(
DWORD dwDesiredAccess, // access
BOOL bInheritHandle, // inheritance option
LPCTSTR lpName // object name
);
```
**参数：**
```
dwDesiredAccess：
MUTEX_ALL_ACCESS 请求对互斥体的完全访问
MUTEX_MODIFY_STATE 允许使用 ReleaseMutex 函数
SYNCHRONIZE 允许互斥体对象同步使用
bInheritHandle : 如希望子进程能够继承句柄，则为TRUE
lpName ：要打开对象的名字
```
**返回值：**
如执行成功，返回对象的句柄；零表示失败。若想获得更多错误信息，请调用GetLastError函数。
**备注：**
一旦不再需要，注意一定要用 CloseHandle 关闭互斥体句柄。如对象的所有句柄都已关闭，那么对象也会删除


## ReleaseMutex
**定义：**
```
BOOL WINAPI ReleaseMutex(
HANDLE hMutex
);
```
**参数：**
```
hMutex：HANDLE，制定一个互斥体的句柄。
```
**返回值:**
```
BOOL，TRUE表示成功，FALSE表示失败。
```
**作用：**
释放互斥对象的控制权。
一个线程释放了互斥对象的控制权后，如果其他进程在等待互斥对象置位，则等待的线程可以得到该互斥对象，等待函数返回，互斥对象被新的线程所拥有。

## CloseHandle
**定义：**
```
BOOL CloseHandle(
HANDLE hObject
);
```
**参数：**
```
hObject ：代表一个已打开对象handle。
```
**返回值：**
```
TRUE：执行成功；
FALSE：执行失败，可以调用GetLastError()获知失败原因。
```
**作用：**  
关闭一个内核对象。

其中包括文件、文件映射、进程、线程、安全和同步对象等。  
在CreateThread成功之后会返回一个hThread的handle，且内核对象的计数加1，CloseHandle之后，引用计数减1，当变为0时，系统删除内核对象。 

若在线程执行完之后，没有调用CloseHandle，在进程执行期间，将会造成内核对象的泄露，相当于句柄泄露，但不同于内存泄露，这势必会对系统的效率带来一定程度上的负面影响。

但当进程结束退出后，系统会自动清理这些资源。

## WaitForSingleObject
**定义：**
```
DWORD WINAPI WaitForSingleObject(
__in HANDLE hHandle,
__in DWORD dwMilliseconds
);
```
**参数：**

hHandle[in]对象句柄。  
可以指定一系列的对象，如Event、Job、Memory resource notification、Mutex、Process、Semaphore、Thread、Waitable timer等。

dwMilliseconds[in]定时时间间隔，单位为milliseconds（毫秒）。  
如果指定一个非零值，函数处于等待状态直到hHandle标记的对象被触发，或者时间到了。  
如果dwMilliseconds为0，对象没有被触发信号，函数不会进入一个等待状态，它总是立即返回。  
如果dwMilliseconds为INFINITE，对象被触发信号后，函数才会返回。

**返回值：**
```
WAIT_ABANDONED 0x00000080	：	当hHandle为mutex时，如果拥有mutex的线程在结束时没有释放核心对象会引发此返回值。
WAIT_OBJECT_0 0x00000000 	：	指定的对象有信号
WAIT_TIMEOUT 0x00000102		：	等待超时
WAIT_FAILED 0xFFFFFFFF		：	出现错误，可通过GetLastError得到错误代码
```
