(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{545:function(s,n,a){"use strict";a.r(n);var t=a(44),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[s._v("#")]),s._v(" 目标")]),s._v(" "),a("p",[s._v("上一篇写处理函数参数，漏掉了 callback 函数做为参数的情况，这里给个简单的示例。")]),s._v(" "),a("p",[s._v("用 C++ 写一个简单 "),a("code",[s._v("RunFunc()")]),s._v(" v8 函数传给 js 环境，使以下代码可运行：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RunFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),s._v(" "),a("h2",{attrs:{id:"代码-说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码-说明"}},[s._v("#")]),s._v(" 代码 & 说明")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// callback.cc\n// callback.cc\n#include <cstring>\n#include <fstream>\n#include <iostream>\n#include <sstream>\n#include <string>\n\n#include "include/libplatform/libplatform.h"\n#include "include/v8.h"\n\nusing namespace v8;\nusing std::cout;\nusing std::endl;\nusing std::ifstream;\nusing std::strcpy;\nusing std::string;\nusing std::stringstream;\n\n// run js callback\nvoid RunCallback(const FunctionCallbackInfo<Value>& args) {\n  Isolate* isolate = args.GetIsolate();\n  // 调用回调函数需要 context 对象\n  Local<Context> context = isolate->GetCurrentContext();\n  Local<Function> cb = Local<Function>::Cast(args[0]);\n  // 准备回调函数的参数\n  const unsigned argc = 1;\n  Local<Value> argv[argc] = {String::NewFromUtf8(isolate, "hello world")};\n\n  // 调用\n  cb->Call(context, Null(isolate), argc, argv).ToLocalChecked();\n}\n\n// 读取 js 代码\nchar* ReadSourceCodeFile(const char* path) {\n  ifstream f(path);\n  stringstream buffer;\n  buffer << f.rdbuf();\n  const string str = buffer.str();\n  char* cstr = new char[str.length() + 1];\n  strcpy(cstr, str.c_str());\n  return cstr;\n}\n\nvoid ConsoleLog(const FunctionCallbackInfo<Value>& args) {\n  Isolate* isolate = args.GetIsolate();\n  Local<String> str = Local<String>::Cast(args[0]);\n  String::Utf8Value utf8(isolate, str);\n  cout << *utf8 << endl;\n  args.GetReturnValue().SetUndefined();\n}\n\nint main(int argc, char* argv[]) {\n  // 初始化 V8\n  V8::InitializeICUDefaultLocation(argv[0]);\n  V8::InitializeExternalStartupData(argv[0]);\n  std::unique_ptr<Platform> platform = platform::NewDefaultPlatform();\n  V8::InitializePlatform(platform.get());\n  V8::Initialize();\n\n  // 创建 Isolate 实例\n  Isolate::CreateParams create_params;\n  create_params.array_buffer_allocator =\n      ArrayBuffer::Allocator::NewDefaultAllocator();\n  Isolate* isolate = Isolate::New(create_params);\n  {\n    Isolate::Scope isolate_scope(isolate);\n\n    // 创建一个 HandleScope，用于管理 Handle 的生命周期\n    HandleScope handle_scope(isolate);\n\n    // 创建对象模板 `console_tpl`\n    Local<ObjectTemplate> console_tpl = ObjectTemplate::New(isolate);\n    console_tpl->Set(String::NewFromUtf8(isolate, "log"),\n                     FunctionTemplate::New(isolate, ConsoleLog));\n\n    Local<FunctionTemplate> cb_fn_tpl = FunctionTemplate::New(isolate, RunCallback);\n\n    // 初始化 `global_template`\n    Local<ObjectTemplate> global_template = ObjectTemplate::New(isolate);\n    global_template->Set(String::NewFromUtf8(isolate, "console"), console_tpl);\n    global_template->Set(String::NewFromUtf8(isolate, "RunFunc"), cb_fn_tpl);\n\n    // 创建 Context，将 `global_template` 做为它的 global 对象模板\n    Local<Context> context = Context::New(isolate, NULL, global_template);\n\n    Context::Scope context_scope(context);\n\n    {\n      // 通过命令行第一个参数读取 js 文件代码\n      const char* js_code = ReadSourceCodeFile(argv[1]);\n      Local<String> source = String::NewFromUtf8(isolate, js_code);\n\n      // 编译\n      Local<Script> script = Script::Compile(context, source).ToLocalChecked();\n\n      // v8 异常捕获\n      TryCatch trycatch(isolate);\n      MaybeLocal<Value> result = script->Run(context);\n      // v8 异常处理\n      if (trycatch.HasCaught()) {\n        Local<Value> exception = trycatch.Exception();\n        String::Utf8Value exception_str(isolate, exception);\n        cout << *exception_str << endl;\n      }\n\n      delete js_code;\n    }\n  }\n\n  isolate->Dispose();\n  V8::Dispose();\n  V8::ShutdownPlatform();\n  delete create_params.array_buffer_allocator;\n  return 0;\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br")])]),a("h3",{attrs:{id:"编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),a("p",[s._v("v8 编译相关请查看 {% post_link v8/compile-v8 Javascript Engine V8 Embedding - 编译 %}")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("g++ -I. -Iinclude calback.cc -lv8_monolith -Lout.gn/x64.release.sample/obj/ -pthread -std"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("c++0x -o inode\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行"}},[s._v("#")]),s._v(" 执行")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./inode app.js   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# output: `hello world`")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("p",[s._v("代码已经比较清晰了，跟上一篇函数传参处理的内容是一致的，还配有简单的注释说明。")]),s._v(" "),a("p",[s._v("下篇，我们将探索如何封装 C++ 类，然后就可以无障碍的编写 Node.js C++ Addon 或 阅读 Node.js 源码了。")]),s._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),a("ul",[a("li",[s._v("Getting started with embedding V8: https://v8.dev/docs/embed#advanced-guide")]),s._v(" "),a("li",[s._v("Node.js C++ Addons: https://nodejs.org/dist/latest-v10.x/docs/api/addons.html")])])])}),[],!1,null,null,null);n.default=e.exports}}]);