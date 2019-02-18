---
title: 简易EasyHook函数注解
date: 2019-02-18 14:16:39
tag: 
    - EasyHooK
categorie: 
    - 钩子
---
# EasyHooK函数注释

**文件：** easyhook.h  
插入钩子和使钩子失效，两个函数必须成对调用。先处理钩子，再使用钩子生效。

## 1、	插入钩子和去除钩子
### 安装钩子
安装钩子函数
```
DRIVER_SHARED_API(NTSTATUS, LhInstallHook(
            void* InEntryPoint,	        //真实API，如CreateFile
            void* InHookProc,		//钩子函数，如MyCreateFile
            void* InCallback,		//回调函数，一般设置为NULL
            TRACED_HOOK_HANDLE OutHandle));	//返回句柄，该句柄以链表方式记录钩子信息，内部结构内容非常多。
```
### 去除钩子
卸载钩子（并不还原，只是禁用）
```
DRIVER_SHARED_API(NTSTATUS, LhUninstallAllHooks());
DRIVER_SHARED_API(NTSTATUS, LhUninstallHook(
		TRACED_HOOK_HANDLE InHandle));  //由LhInstallHook的第4个参数返回。
```
### 等待移除
删除钩子（还原）
```
DRIVER_SHARED_API(NTSTATUS, LhWaitForPendingRemovals());
等待内存移除
```

## 2、	使用钩子生效
设置包含ACL（access control list），
```
EASYHOOK_NT_EXPORT LhSetInclusiveACL(
		ULONG* InThreadIdList,	//定义为一个数组如ULONG	HookCreateFileW_ACLEntries[1] = {0};
		ULONG InThreadCount,	//一般设置为1
		TRACED_HOOK_HANDLE InHandle);	//由LhInstallHook的第4个参数返回
```
设置排除ACL（access control list），
```
EASYHOOK_NT_EXPORT LhSetExclusiveACL(
		ULONG* InThreadIdList,	//定义为一个数组如ULONG	HookCreateFileW_ACLEntries[1] = {0};
		ULONG InThreadCount,	//一般设置为1
		TRACED_HOOK_HANDLE InHandle);	//由LhInstallHook的第4个参数返回

EASYHOOK_NT_EXPORT LhSetGlobalInclusiveACL(
		ULONG* InThreadIdList,	//定义为一个数组如ULONG	HookCreateFileW_ACLEntries[1] = {0};
		ULONG InThreadCount);	//一般设置为1

EASYHOOK_NT_EXPORT LhSetGlobalExclusiveACL(
		ULONG* InThreadIdList,	//定义为一个数组如ULONG	HookCreateFileW_ACLEntries[1] = {0};
		ULONG InThreadCount);	//一般设置为1

EASYHOOK_NT_EXPORT LhIsThreadIntercepted(
		TRACED_HOOK_HANDLE InHook,	//由LhInstallHook的第4个参数返回
		ULONG InThreadID,
	   BOOL* OutResult);
```
## 3、句柄定义
```
typedef struct _LOCAL_HOOK_INFO_* PLOCAL_HOOK_INFO;

typedef struct _HOOK_TRACE_INFO_
{
    PLOCAL_HOOK_INFO        Link;
}HOOK_TRACE_INFO, *TRACED_HOOK_HANDLE;
```
所使用到的关键数据结构为**LOCAL_HOOK_INFO**结构体:
![结构体](../../images/钩子/简易EasyHook函数注解/LOCAL_HOOK_INFO结构体.jpg '结构体')
