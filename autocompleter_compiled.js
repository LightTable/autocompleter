if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj13905 = {};return obj13905;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__4872__auto__ = port;if(and__4872__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__5511__auto__ = (((port == null))?null:port);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj13907 = {};return obj13907;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn0_handler){if((function (){var and__4872__auto__ = port;if(and__4872__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__4872__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn0_handler);
} else
{var x__5511__auto__ = (((port == null))?null:port);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn0_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj13909 = {};return obj13909;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__4872__auto__ = chan;if(and__4872__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__5511__auto__ = (((chan == null))?null:chan);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj13911 = {};return obj13911;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__4872__auto__ = h;if(and__4872__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__5511__auto__ = (((h == null))?null:h);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__4872__auto__ = h;if(and__4872__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__4872__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__5511__auto__ = (((h == null))?null:h);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj13913 = {};return obj13913;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__4872__auto__ = b;if(and__4872__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__5511__auto__ = (((b == null))?null:b);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__4872__auto__ = b;if(and__4872__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__5511__auto__ = (((b == null))?null:b);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__4872__auto__ = b;if(and__4872__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__5511__auto__ = (((b == null))?null:b);return (function (){var or__4884__auto__ = (cljs.core.async.impl.protocols.add_BANG_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj13915 = {};return obj13915;
})();
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.buffers')) {
goog.provide('cljs.core.async.impl.buffers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.buffers.acopy = (function acopy(src,src_start,dest,dest_start,len){var cnt = 0;while(true){
if((cnt < len))
{(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));
{
var G__13870 = (cnt + 1);
cnt = G__13870;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
})
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer";
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.buffers/RingBuffer");
});
cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){var self__ = this;
var _ = this;if((self__.length === 0))
{return null;
} else
{var x = (self__.arr[self__.tail]);(self__.arr[self__.tail] = null);
self__.tail = ((self__.tail + 1) % self__.arr.length);
self__.length = (self__.length - 1);
return x;
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){var self__ = this;
var _ = this;(self__.arr[self__.head] = x);
self__.head = ((self__.head + 1) % self__.arr.length);
self__.length = (self__.length + 1);
return null;
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){var self__ = this;
var this$ = this;if(((self__.length + 1) === self__.arr.length))
{this$.resize();
} else
{}
return this$.unshift(x);
});
cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){var self__ = this;
var _ = this;var new_arr_size = (self__.arr.length * 2);var new_arr = (new Array(new_arr_size));if((self__.tail < self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,self__.length);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail > self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,(self__.arr.length - self__.tail));
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,0,new_arr,(self__.arr.length - self__.tail),self__.head);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail === self__.head))
{self__.tail = 0;
self__.head = 0;
return self__.arr = new_arr;
} else
{return null;
}
}
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){var self__ = this;
var this$ = this;var n__5732__auto__ = self__.length;var x = 0;while(true){
if((x < n__5732__auto__))
{var v_13871 = this$.pop();if(keep_QMARK_.call(null,v_13871))
{this$.unshift(v_13871);
} else
{}
{
var G__13872 = (x + 1);
x = G__13872;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.async.impl.buffers.__GT_RingBuffer = (function __GT_RingBuffer(head,tail,length,arr){return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
});
cljs.core.async.impl.buffers.ring_buffer = (function ring_buffer(n){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't create a ring buffer of size 0"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"n","n",-1640531417,null),0)))].join('')));
}
return (new cljs.core.async.impl.buffers.RingBuffer(0,0,0,(new Array(n))));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (self__.buf.length === self__.n);
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,this$__$1)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't add to a full buffer"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol("impl","full?","impl/full?",-1337857039,null),new cljs.core.Symbol(null,"this","this",-1636972457,null)))))].join('')));
}
return self__.buf.unshift(itm);
});
cljs.core.async.impl.buffers.__GT_FixedBuffer = (function __GT_FixedBuffer(buf,n){return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
});
cljs.core.async.impl.buffers.fixed_buffer = (function fixed_buffer(n){return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{return null;
} else
{return self__.buf.unshift(itm);
}
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function __GT_DroppingBuffer(buf,n){return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
});
cljs.core.async.impl.buffers.dropping_buffer = (function dropping_buffer(n){return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else
{}
return self__.buf.unshift(itm);
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function __GT_SlidingBuffer(buf,n){return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
});
cljs.core.async.impl.buffers.sliding_buffer = (function sliding_buffer(n){return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.dispatch')) {
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,32);
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = 1024;
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){cljs.core.async.impl.dispatch.running_QMARK_ = true;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
var count_13901 = 0;while(true){
var m_13902 = cljs.core.async.impl.dispatch.tasks.pop();if((m_13902 == null))
{} else
{m_13902.call(null);
if((count_13901 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__13903 = (count_13901 + 1);
count_13901 = G__13903;
continue;
}
} else
{}
}
break;
}
cljs.core.async.impl.dispatch.running_QMARK_ = false;
if((cljs.core.async.impl.dispatch.tasks.length > 0))
{return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else
{return null;
}
});
if(typeof MessageChannel !== 'undefined')
{cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());
cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){return cljs.core.async.impl.dispatch.process_messages.call(null);
});
} else
{}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__4872__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__4872__auto__;
}
})()))
{return null;
} else
{cljs.core.async.impl.dispatch.queued_QMARK_ = true;
if(typeof MessageChannel !== 'undefined')
{return cljs.core.async.impl.dispatch.message_channel.port2.postMessage(0);
} else
{if(typeof setImmediate !== 'undefined')
{return setImmediate(cljs.core.async.impl.dispatch.process_messages);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return setTimeout(cljs.core.async.impl.dispatch.process_messages,0);
} else
{return null;
}
}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){return setTimeout(f,delay);
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.channels')) {
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t13876 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t13876 = (function (val,box,meta13877){
this.val = val;
this.box = box;
this.meta13877 = meta13877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t13876.cljs$lang$type = true;
cljs.core.async.impl.channels.t13876.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t13876";
cljs.core.async.impl.channels.t13876.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.channels/t13876");
});
cljs.core.async.impl.channels.t13876.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t13876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13878){var self__ = this;
var _13878__$1 = this;return self__.meta13877;
});
cljs.core.async.impl.channels.t13876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13878,meta13877__$1){var self__ = this;
var _13878__$1 = this;return (new cljs.core.async.impl.channels.t13876(self__.val,self__.box,meta13877__$1));
});
cljs.core.async.impl.channels.__GT_t13876 = (function __GT_t13876(val__$1,box__$1,meta13877){return (new cljs.core.async.impl.channels.t13876(val__$1,box__$1,meta13877));
});
}
return (new cljs.core.async.impl.channels.t13876(val,box,null));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})
cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opts__5456__auto__){return cljs.core._write.call(null,writer__5455__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = 64;

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
while(true){
var taker_13889 = self__.takes.pop();if((taker_13889 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_13889))
{var take_cb_13890 = cljs.core.async.impl.protocols.commit.call(null,taker_13889);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_13890,taker_13889,this$__$1){
return (function (){return take_cb_13890.call(null,null);
});})(take_cb_13890,taker_13889,this$__$1))
);
} else
{}
{
continue;
}
}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){var self__ = this;
var this$__$1 = this;if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))
{return null;
} else
{if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);return cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));
} else
{while(true){
var putter = self__.puts.pop();if(!((putter == null)))
{var put_handler = putter.handler;var val = putter.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler))
{var put_cb = cljs.core.async.impl.protocols.commit.call(null,put_handler);var _ = cljs.core.async.impl.protocols.commit.call(null,handler);cljs.core.async.impl.dispatch.run.call(null,put_cb);
return cljs.core.async.impl.channels.box.call(null,val);
} else
{{
continue;
}
}
} else
{if(self__.closed)
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);return cljs.core.async.impl.channels.box.call(null,null);
} else
{if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_takes = 0;
self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else
{self__.dirty_takes = (self__.dirty_takes + 1);
}
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"takes","takes",-1530407291,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.takes.unbounded_unshift(handler);
return null;
}
}
break;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){var self__ = this;
var this$__$1 = this;if(!((val == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"val","val",-1640415014,null)))))].join('')));
}
var closed__$1 = self__.closed;if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))))
{return cljs.core.async.impl.channels.box.call(null,null);
} else
{while(true){
var taker = self__.takes.pop();if(!((taker == null)))
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))
{var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);var _ = cljs.core.async.impl.protocols.commit.call(null,handler);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,_,taker,closed__$1,this$__$1){
return (function (){return take_cb.call(null,val);
});})(take_cb,_,taker,closed__$1,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,null);
} else
{{
continue;
}
}
} else
{if(!(((self__.buf == null)) || (cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);cljs.core.async.impl.protocols.add_BANG_.call(null,self__.buf,val);
return cljs.core.async.impl.channels.box.call(null,null);
} else
{if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_puts = 0;
self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else
{self__.dirty_puts = (self__.dirty_puts + 1);
}
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"puts","puts",-1637078787,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
return null;
}
}
break;
}
}
});
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed){return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed));
});
cljs.core.async.impl.channels.chan = (function chan(buf){return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,buf,null));
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.timers')) {
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.timers.MAX_LEVEL = 15;
cljs.core.async.impl.timers.P = (1 / 2);
cljs.core.async.impl.timers.random_level = (function() {
var random_level = null;
var random_level__0 = (function (){return random_level.call(null,0);
});
var random_level__1 = (function (level){while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))
{{
var G__13936 = (level + 1);
level = G__13936;
continue;
}
} else
{return level;
}
break;
}
});
random_level = function(level){
switch(arguments.length){
case 0:
return random_level__0.call(this);
case 1:
return random_level__1.call(this,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_level.cljs$core$IFn$_invoke$arity$0 = random_level__0;
random_level.cljs$core$IFn$_invoke$arity$1 = random_level__1;
return random_level;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.timers/SkipListNode");
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.async.impl.timers.__GT_SkipListNode = (function __GT_SkipListNode(key,val,forward){return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});
cljs.core.async.impl.timers.skip_list_node = (function() {
var skip_list_node = null;
var skip_list_node__1 = (function (level){return skip_list_node.call(null,null,null,level);
});
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_13937 = 0;while(true){
if((i_13937 < arr.length))
{(arr[i_13937] = null);
{
var G__13938 = (i_13937 + 1);
i_13937 = G__13938;
continue;
}
} else
{}
break;
}
return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});
skip_list_node = function(k,v,level){
switch(arguments.length){
case 1:
return skip_list_node__1.call(this,k);
case 3:
return skip_list_node__3.call(this,k,v,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
skip_list_node.cljs$core$IFn$_invoke$arity$1 = skip_list_node__1;
skip_list_node.cljs$core$IFn$_invoke$arity$3 = skip_list_node__3;
return skip_list_node;
})()
;
cljs.core.async.impl.timers.least_greater_node = (function() {
var least_greater_node = null;
var least_greater_node__3 = (function (x,k,level){return least_greater_node.call(null,x,k,level,null);
});
var least_greater_node__4 = (function (x,k,level,update){while(true){
if(!((level < 0)))
{var x__$1 = (function (){var x__$1 = x;while(true){
var temp__4090__auto__ = (x__$1.forward[level]);if(cljs.core.truth_(temp__4090__auto__))
{var x_SINGLEQUOTE_ = temp__4090__auto__;if((x_SINGLEQUOTE_.key < k))
{{
var G__13939 = x_SINGLEQUOTE_;
x__$1 = G__13939;
continue;
}
} else
{return x__$1;
}
} else
{return x__$1;
}
break;
}
})();if((update == null))
{} else
{(update[level] = x__$1);
}
{
var G__13940 = x__$1;
var G__13941 = k;
var G__13942 = (level - 1);
var G__13943 = update;
x = G__13940;
k = G__13941;
level = G__13942;
update = G__13943;
continue;
}
} else
{return x;
}
break;
}
});
least_greater_node = function(x,k,level,update){
switch(arguments.length){
case 3:
return least_greater_node__3.call(this,x,k,level);
case 4:
return least_greater_node__4.call(this,x,k,level,update);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
least_greater_node.cljs$core$IFn$_invoke$arity$3 = least_greater_node__3;
least_greater_node.cljs$core$IFn$_invoke$arity$4 = least_greater_node__4;
return least_greater_node;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.timers/SkipList");
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = ((function (coll__$1){
return (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var iter = ((function (coll__$1){
return (function iter(node){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){if((node == null))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),iter.call(null,(node.forward[0])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[0]));
});
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{return x__$1.val = v;
} else
{var new_level = cljs.core.async.impl.timers.random_level.call(null);if((new_level > self__.level))
{var i_13944 = (self__.level + 1);while(true){
if((i_13944 <= (new_level + 1)))
{(update[i_13944] = self__.header);
{
var G__13945 = (i_13944 + 1);
i_13944 = G__13945;
continue;
}
} else
{}
break;
}
self__.level = new_level;
} else
{}
var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));var i = 0;while(true){
if((i <= self__.level))
{var links = (update[i]).forward;(x__$2.forward[i] = (links[i]));
return (links[i] = x__$2);
} else
{return null;
}
break;
}
}
});
cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{var i_13946 = 0;while(true){
if((i_13946 <= self__.level))
{var links_13947 = (update[i_13946]).forward;if(((links_13947[i_13946]) === x__$1))
{(links_13947[i_13946] = (x__$1.forward[i_13946]));
{
var G__13948 = (i_13946 + 1);
i_13946 = G__13948;
continue;
}
} else
{{
var G__13949 = (i_13946 + 1);
i_13946 = G__13949;
continue;
}
}
} else
{}
break;
}
while(true){
if(((self__.level > 0)) && (((self__.header.forward[self__.level]) == null)))
{self__.level = (self__.level - 1);
{
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if((x_SINGLEQUOTE_ == null))
{return null;
} else
{if((x_SINGLEQUOTE_.key >= k))
{return x_SINGLEQUOTE_;
} else
{{
var G__13950 = x_SINGLEQUOTE_;
x__$1 = G__13950;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__13951 = nx;
var G__13952 = (level__$1 - 1);
x = G__13951;
level__$1 = G__13952;
continue;
}
} else
{{
var G__13953 = x;
var G__13954 = (level__$1 - 1);
x = G__13953;
level__$1 = G__13954;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if(!((x_SINGLEQUOTE_ == null)))
{if((x_SINGLEQUOTE_.key > k))
{return x__$1;
} else
{{
var G__13955 = x_SINGLEQUOTE_;
x__$1 = G__13955;
continue;
}
}
} else
{if((level__$1 === 0))
{return x__$1;
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(nx))
{{
var G__13956 = nx;
var G__13957 = (level__$1 - 1);
x = G__13956;
level__$1 = G__13957;
continue;
}
} else
{{
var G__13958 = x;
var G__13959 = (level__$1 - 1);
x = G__13958;
level__$1 = G__13959;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.__GT_SkipList = (function __GT_SkipList(header,level){return (new cljs.core.async.impl.timers.SkipList(header,level));
});
cljs.core.async.impl.timers.skip_list = (function skip_list(){return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,0),0));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = 10;
/**
* returns a channel that will close after msecs
*/
cljs.core.async.impl.timers.timeout = (function timeout(msecs){var timeout__$1 = ((new Date()).valueOf() + msecs);var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);var or__4884__auto__ = (cljs.core.truth_((function (){var and__4872__auto__ = me;if(cljs.core.truth_(and__4872__auto__))
{return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else
{return and__4872__auto__;
}
})())?me.val:null);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);
cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__4884__auto__,timeout__$1,me){
return (function (){cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);
return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__4884__auto__,timeout__$1,me))
,msecs);
return timeout_channel;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.ioc-helpers')) {
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t13800 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t13800 = (function (f,fn_handler,meta13801){
this.f = f;
this.fn_handler = fn_handler;
this.meta13801 = meta13801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t13800.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t13800.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t13800";
cljs.core.async.impl.ioc_helpers.t13800.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.ioc-helpers/t13800");
});
cljs.core.async.impl.ioc_helpers.t13800.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t13800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t13800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t13800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13802){var self__ = this;
var _13802__$1 = this;return self__.meta13801;
});
cljs.core.async.impl.ioc_helpers.t13800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13802,meta13801__$1){var self__ = this;
var _13802__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t13800(self__.f,self__.fn_handler,meta13801__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t13800 = (function __GT_t13800(f__$1,fn_handler__$1,meta13801){return (new cljs.core.async.impl.ioc_helpers.t13800(f__$1,fn_handler__$1,meta13801));
});
}
return (new cljs.core.async.impl.ioc_helpers.t13800(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e13804){if((e13804 instanceof Object))
{var ex = e13804;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13804;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_13807_13850 = state;(statearr_13807_13850[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_13807_13850[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_13808_13851 = state;(statearr_13808_13851[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_13808_13851[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_13811_13852 = state;(statearr_13811_13852[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_13811_13852[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_13812_13853 = state;(statearr_13812_13853[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_13812_13853[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13813){var map__13818 = p__13813;var map__13818__$1 = ((cljs.core.seq_QMARK_.call(null,map__13818))?cljs.core.apply.call(null,cljs.core.hash_map,map__13818):map__13818);var opts = map__13818__$1;var statearr_13819_13854 = state;(statearr_13819_13854[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__13818,map__13818__$1,opts){
return (function (val){var statearr_13820_13855 = state;(statearr_13820_13855[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13818,map__13818__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_13821_13856 = state;(statearr_13821_13856[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13813 = null;if (arguments.length > 3) {
  p__13813 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13813);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13857){
var state = cljs.core.first(arglist__13857);
arglist__13857 = cljs.core.next(arglist__13857);
var cont_block = cljs.core.first(arglist__13857);
arglist__13857 = cljs.core.next(arglist__13857);
var ports = cljs.core.first(arglist__13857);
var p__13813 = cljs.core.rest(arglist__13857);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13813);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){return null;
});})(c))
));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){var self__ = this;
var this__5465__auto____$1 = this;var h__5295__auto__ = self__.__hash;if(!((h__5295__auto__ == null)))
{return h__5295__auto__;
} else
{var h__5295__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);self__.__hash = h__5295__auto____$1;
return h__5295__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){var self__ = this;
var this__5470__auto____$1 = this;return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k13823,else__5473__auto__){var self__ = this;
var this__5472__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k13823,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13823,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13823,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13823,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13823,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k13823,else__5473__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__13822){var self__ = this;
var this__5477__auto____$1 = this;var pred__13825 = cljs.core.keyword_identical_QMARK_;var expr__13826 = k__5478__auto__;if(cljs.core.truth_(pred__13825.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__13826)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__13822,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13825.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__13826)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__13822,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13825.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__13826)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__13822,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13825.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__13826)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__13822,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13825.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__13826)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__13822,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__13822),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){var self__ = this;
var this__5484__auto____$1 = this;var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){var self__ = this;
var this__5475__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__))
{return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,0),cljs.core._nth.call(null,entry__5476__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){var self__ = this;
var this__5482__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){var self__ = this;
var this__5474__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){var self__ = this;
var this__5466__auto____$1 = this;if(cljs.core.truth_((function (){var and__4872__auto__ = other__5467__auto__;if(cljs.core.truth_(and__4872__auto__))
{return ((this__5466__auto____$1.constructor === other__5467__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__));
} else
{return and__4872__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__13822){var self__ = this;
var this__5469__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__13822,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){var self__ = this;
var this__5464__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){var self__ = this;
var this__5468__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){var self__ = this;
var this__5479__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__5480__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__5504__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){return cljs.core._write.call(null,writer__5505__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__13824){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__13824),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__13824),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__13824),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__13824),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__13824),null,cljs.core.dissoc.call(null,G__13824,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_13829 = state;(statearr_13829[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_13829;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__4872__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{var and__4872__auto____$1 = catch_block;if(cljs.core.truth_(and__4872__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__4872__auto____$1;
}
} else
{return and__4872__auto__;
}
})()))
{var statearr_13835 = state;(statearr_13835[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_13835[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_13835[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_13835[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_13835;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4872__auto__;
}
})()))
{var statearr_13836_13858 = state;(statearr_13836_13858[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__13859 = state;
state = G__13859;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{var and__4872__auto____$1 = cljs.core.not.call(null,catch_block);if(and__4872__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4872__auto____$1;
}
} else
{return and__4872__auto__;
}
})()))
{var statearr_13837 = state;(statearr_13837[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_13837[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_13837;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core.not.call(null,exception);if(and__4872__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4872__auto__;
}
})()))
{var statearr_13838 = state;(statearr_13838[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_13838[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_13838;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_13839 = state;(statearr_13839[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_13839[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_13839;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async')) {
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11236 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11236 = (function (f,fn_handler,meta11237){
this.f = f;
this.fn_handler = fn_handler;
this.meta11237 = meta11237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11236.cljs$lang$type = true;
cljs.core.async.t11236.cljs$lang$ctorStr = "cljs.core.async/t11236";
cljs.core.async.t11236.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11236");
});
cljs.core.async.t11236.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11238){var self__ = this;
var _11238__$1 = this;return self__.meta11237;
});
cljs.core.async.t11236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11238,meta11237__$1){var self__ = this;
var _11238__$1 = this;return (new cljs.core.async.t11236(self__.f,self__.fn_handler,meta11237__$1));
});
cljs.core.async.__GT_t11236 = (function __GT_t11236(f__$1,fn_handler__$1,meta11237){return (new cljs.core.async.t11236(f__$1,fn_handler__$1,meta11237));
});
}
return (new cljs.core.async.t11236(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11240 = buff;if(G__11240)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__11240.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11240.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11240);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11240);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13504 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13504);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_13504,ret){
return (function (){return fn1.call(null,val_13504);
});})(val_13504,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__4872__auto__ = ret;if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__4872__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5732__auto___13505 = n;var x_13506 = 0;while(true){
if((x_13506 < n__5732__auto___13505))
{(a[x_13506] = 0);
{
var G__13507 = (x_13506 + 1);
x_13506 = G__13507;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13508 = (i + 1);
i = G__13508;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11244 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11244 = (function (flag,alt_flag,meta11245){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11245 = meta11245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11244.cljs$lang$type = true;
cljs.core.async.t11244.cljs$lang$ctorStr = "cljs.core.async/t11244";
cljs.core.async.t11244.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11244");
});})(flag))
;
cljs.core.async.t11244.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11246){var self__ = this;
var _11246__$1 = this;return self__.meta11245;
});})(flag))
;
cljs.core.async.t11244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11246,meta11245__$1){var self__ = this;
var _11246__$1 = this;return (new cljs.core.async.t11244(self__.flag,self__.alt_flag,meta11245__$1));
});})(flag))
;
cljs.core.async.__GT_t11244 = ((function (flag){
return (function __GT_t11244(flag__$1,alt_flag__$1,meta11245){return (new cljs.core.async.t11244(flag__$1,alt_flag__$1,meta11245));
});})(flag))
;
}
return (new cljs.core.async.t11244(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11250 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11250 = (function (cb,flag,alt_handler,meta11251){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11251 = meta11251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11250.cljs$lang$type = true;
cljs.core.async.t11250.cljs$lang$ctorStr = "cljs.core.async/t11250";
cljs.core.async.t11250.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11250");
});
cljs.core.async.t11250.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11252){var self__ = this;
var _11252__$1 = this;return self__.meta11251;
});
cljs.core.async.t11250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11252,meta11251__$1){var self__ = this;
var _11252__$1 = this;return (new cljs.core.async.t11250(self__.cb,self__.flag,self__.alt_handler,meta11251__$1));
});
cljs.core.async.__GT_t11250 = (function __GT_t11250(cb__$1,flag__$1,alt_handler__$1,meta11251){return (new cljs.core.async.t11250(cb__$1,flag__$1,alt_handler__$1,meta11251));
});
}
return (new cljs.core.async.t11250(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11253_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11253_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4884__auto__ = wport;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13509 = (i + 1);
i = G__13509;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__4884__auto__ = ret;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4872__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__4872__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__4872__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11254){var map__11256 = p__11254;var map__11256__$1 = ((cljs.core.seq_QMARK_.call(null,map__11256))?cljs.core.apply.call(null,cljs.core.hash_map,map__11256):map__11256);var opts = map__11256__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11254 = null;if (arguments.length > 1) {
  p__11254 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11254);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13510){
var ports = cljs.core.first(arglist__13510);
var p__11254 = cljs.core.rest(arglist__13510);
return alts_BANG___delegate(ports,p__11254);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11264 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11264 = (function (ch,f,map_LT_,meta11265){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11265 = meta11265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11264.cljs$lang$type = true;
cljs.core.async.t11264.cljs$lang$ctorStr = "cljs.core.async/t11264";
cljs.core.async.t11264.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11264");
});
cljs.core.async.t11264.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11264.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11267 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11267 = (function (fn1,_,meta11265,ch,f,map_LT_,meta11268){
this.fn1 = fn1;
this._ = _;
this.meta11265 = meta11265;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11268 = meta11268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11267.cljs$lang$type = true;
cljs.core.async.t11267.cljs$lang$ctorStr = "cljs.core.async/t11267";
cljs.core.async.t11267.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11267");
});})(___$1))
;
cljs.core.async.t11267.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11267.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11257_SHARP_){return f1.call(null,(((p1__11257_SHARP_ == null))?null:self__.f.call(null,p1__11257_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11269){var self__ = this;
var _11269__$1 = this;return self__.meta11268;
});})(___$1))
;
cljs.core.async.t11267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11269,meta11268__$1){var self__ = this;
var _11269__$1 = this;return (new cljs.core.async.t11267(self__.fn1,self__._,self__.meta11265,self__.ch,self__.f,self__.map_LT_,meta11268__$1));
});})(___$1))
;
cljs.core.async.__GT_t11267 = ((function (___$1){
return (function __GT_t11267(fn1__$1,___$2,meta11265__$1,ch__$2,f__$2,map_LT___$2,meta11268){return (new cljs.core.async.t11267(fn1__$1,___$2,meta11265__$1,ch__$2,f__$2,map_LT___$2,meta11268));
});})(___$1))
;
}
return (new cljs.core.async.t11267(fn1,___$1,self__.meta11265,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4872__auto__ = ret;if(cljs.core.truth_(and__4872__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__4872__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11264.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11266){var self__ = this;
var _11266__$1 = this;return self__.meta11265;
});
cljs.core.async.t11264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11266,meta11265__$1){var self__ = this;
var _11266__$1 = this;return (new cljs.core.async.t11264(self__.ch,self__.f,self__.map_LT_,meta11265__$1));
});
cljs.core.async.__GT_t11264 = (function __GT_t11264(ch__$1,f__$1,map_LT___$1,meta11265){return (new cljs.core.async.t11264(ch__$1,f__$1,map_LT___$1,meta11265));
});
}
return (new cljs.core.async.t11264(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11273 = (function (ch,f,map_GT_,meta11274){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11274 = meta11274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11273.cljs$lang$type = true;
cljs.core.async.t11273.cljs$lang$ctorStr = "cljs.core.async/t11273";
cljs.core.async.t11273.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11273");
});
cljs.core.async.t11273.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11273.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11273.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11273.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11273.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11273.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11275){var self__ = this;
var _11275__$1 = this;return self__.meta11274;
});
cljs.core.async.t11273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11275,meta11274__$1){var self__ = this;
var _11275__$1 = this;return (new cljs.core.async.t11273(self__.ch,self__.f,self__.map_GT_,meta11274__$1));
});
cljs.core.async.__GT_t11273 = (function __GT_t11273(ch__$1,f__$1,map_GT___$1,meta11274){return (new cljs.core.async.t11273(ch__$1,f__$1,map_GT___$1,meta11274));
});
}
return (new cljs.core.async.t11273(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11279 = (function (ch,p,filter_GT_,meta11280){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11280 = meta11280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11279.cljs$lang$type = true;
cljs.core.async.t11279.cljs$lang$ctorStr = "cljs.core.async/t11279";
cljs.core.async.t11279.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11279");
});
cljs.core.async.t11279.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11279.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11279.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11281){var self__ = this;
var _11281__$1 = this;return self__.meta11280;
});
cljs.core.async.t11279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11281,meta11280__$1){var self__ = this;
var _11281__$1 = this;return (new cljs.core.async.t11279(self__.ch,self__.p,self__.filter_GT_,meta11280__$1));
});
cljs.core.async.__GT_t11279 = (function __GT_t11279(ch__$1,p__$1,filter_GT___$1,meta11280){return (new cljs.core.async.t11279(ch__$1,p__$1,filter_GT___$1,meta11280));
});
}
return (new cljs.core.async.t11279(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___13511 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13511,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13511,out){
return (function (state_11343){var state_val_11344 = (state_11343[1]);if((state_val_11344 === 1))
{var state_11343__$1 = state_11343;var statearr_11345_13512 = state_11343__$1;(statearr_11345_13512[2] = null);
(statearr_11345_13512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11344 === 2))
{var state_11343__$1 = state_11343;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11343__$1,4,ch);
} else
{if((state_val_11344 === 3))
{var inst_11341 = (state_11343[2]);var state_11343__$1 = state_11343;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11343__$1,inst_11341);
} else
{if((state_val_11344 === 4))
{var inst_11325 = (state_11343[7]);var inst_11325__$1 = (state_11343[2]);var inst_11326 = (inst_11325__$1 == null);var state_11343__$1 = (function (){var statearr_11346 = state_11343;(statearr_11346[7] = inst_11325__$1);
return statearr_11346;
})();if(cljs.core.truth_(inst_11326))
{var statearr_11347_13513 = state_11343__$1;(statearr_11347_13513[1] = 5);
} else
{var statearr_11348_13514 = state_11343__$1;(statearr_11348_13514[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11344 === 5))
{var inst_11328 = cljs.core.async.close_BANG_.call(null,out);var state_11343__$1 = state_11343;var statearr_11349_13515 = state_11343__$1;(statearr_11349_13515[2] = inst_11328);
(statearr_11349_13515[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11344 === 6))
{var inst_11325 = (state_11343[7]);var inst_11330 = p.call(null,inst_11325);var state_11343__$1 = state_11343;if(cljs.core.truth_(inst_11330))
{var statearr_11350_13516 = state_11343__$1;(statearr_11350_13516[1] = 8);
} else
{var statearr_11351_13517 = state_11343__$1;(statearr_11351_13517[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11344 === 7))
{var inst_11339 = (state_11343[2]);var state_11343__$1 = state_11343;var statearr_11352_13518 = state_11343__$1;(statearr_11352_13518[2] = inst_11339);
(statearr_11352_13518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11344 === 8))
{var inst_11325 = (state_11343[7]);var state_11343__$1 = state_11343;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11343__$1,11,out,inst_11325);
} else
{if((state_val_11344 === 9))
{var state_11343__$1 = state_11343;var statearr_11353_13519 = state_11343__$1;(statearr_11353_13519[2] = null);
(statearr_11353_13519[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11344 === 10))
{var inst_11336 = (state_11343[2]);var state_11343__$1 = (function (){var statearr_11354 = state_11343;(statearr_11354[8] = inst_11336);
return statearr_11354;
})();var statearr_11355_13520 = state_11343__$1;(statearr_11355_13520[2] = null);
(statearr_11355_13520[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11344 === 11))
{var inst_11333 = (state_11343[2]);var state_11343__$1 = state_11343;var statearr_11356_13521 = state_11343__$1;(statearr_11356_13521[2] = inst_11333);
(statearr_11356_13521[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13511,out))
;return ((function (switch__7454__auto__,c__7524__auto___13511,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11360 = [null,null,null,null,null,null,null,null,null];(statearr_11360[0] = state_machine__7455__auto__);
(statearr_11360[1] = 1);
return statearr_11360;
});
var state_machine__7455__auto____1 = (function (state_11343){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11343);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11361){if((e11361 instanceof Object))
{var ex__7458__auto__ = e11361;var statearr_11362_13522 = state_11343;(statearr_11362_13522[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11343);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13523 = state_11343;
state_11343 = G__13523;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11343){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13511,out))
})();var state__7526__auto__ = (function (){var statearr_11363 = f__7525__auto__.call(null);(statearr_11363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13511);
return statearr_11363;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13511,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto__){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto__){
return (function (state_11515){var state_val_11516 = (state_11515[1]);if((state_val_11516 === 1))
{var state_11515__$1 = state_11515;var statearr_11517_13524 = state_11515__$1;(statearr_11517_13524[2] = null);
(statearr_11517_13524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 2))
{var state_11515__$1 = state_11515;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11515__$1,4,in$);
} else
{if((state_val_11516 === 3))
{var inst_11513 = (state_11515[2]);var state_11515__$1 = state_11515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11515__$1,inst_11513);
} else
{if((state_val_11516 === 4))
{var inst_11461 = (state_11515[7]);var inst_11461__$1 = (state_11515[2]);var inst_11462 = (inst_11461__$1 == null);var state_11515__$1 = (function (){var statearr_11518 = state_11515;(statearr_11518[7] = inst_11461__$1);
return statearr_11518;
})();if(cljs.core.truth_(inst_11462))
{var statearr_11519_13525 = state_11515__$1;(statearr_11519_13525[1] = 5);
} else
{var statearr_11520_13526 = state_11515__$1;(statearr_11520_13526[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 5))
{var inst_11464 = cljs.core.async.close_BANG_.call(null,out);var state_11515__$1 = state_11515;var statearr_11521_13527 = state_11515__$1;(statearr_11521_13527[2] = inst_11464);
(statearr_11521_13527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 6))
{var inst_11461 = (state_11515[7]);var inst_11466 = f.call(null,inst_11461);var inst_11471 = cljs.core.seq.call(null,inst_11466);var inst_11472 = inst_11471;var inst_11473 = null;var inst_11474 = 0;var inst_11475 = 0;var state_11515__$1 = (function (){var statearr_11522 = state_11515;(statearr_11522[8] = inst_11472);
(statearr_11522[9] = inst_11473);
(statearr_11522[10] = inst_11475);
(statearr_11522[11] = inst_11474);
return statearr_11522;
})();var statearr_11523_13528 = state_11515__$1;(statearr_11523_13528[2] = null);
(statearr_11523_13528[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 7))
{var inst_11511 = (state_11515[2]);var state_11515__$1 = state_11515;var statearr_11524_13529 = state_11515__$1;(statearr_11524_13529[2] = inst_11511);
(statearr_11524_13529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 8))
{var inst_11475 = (state_11515[10]);var inst_11474 = (state_11515[11]);var inst_11477 = (inst_11475 < inst_11474);var inst_11478 = inst_11477;var state_11515__$1 = state_11515;if(cljs.core.truth_(inst_11478))
{var statearr_11525_13530 = state_11515__$1;(statearr_11525_13530[1] = 10);
} else
{var statearr_11526_13531 = state_11515__$1;(statearr_11526_13531[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 9))
{var inst_11508 = (state_11515[2]);var state_11515__$1 = (function (){var statearr_11527 = state_11515;(statearr_11527[12] = inst_11508);
return statearr_11527;
})();var statearr_11528_13532 = state_11515__$1;(statearr_11528_13532[2] = null);
(statearr_11528_13532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 10))
{var inst_11473 = (state_11515[9]);var inst_11475 = (state_11515[10]);var inst_11480 = cljs.core._nth.call(null,inst_11473,inst_11475);var state_11515__$1 = state_11515;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11515__$1,13,out,inst_11480);
} else
{if((state_val_11516 === 11))
{var inst_11472 = (state_11515[8]);var inst_11486 = (state_11515[13]);var inst_11486__$1 = cljs.core.seq.call(null,inst_11472);var state_11515__$1 = (function (){var statearr_11532 = state_11515;(statearr_11532[13] = inst_11486__$1);
return statearr_11532;
})();if(inst_11486__$1)
{var statearr_11533_13533 = state_11515__$1;(statearr_11533_13533[1] = 14);
} else
{var statearr_11534_13534 = state_11515__$1;(statearr_11534_13534[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 12))
{var inst_11506 = (state_11515[2]);var state_11515__$1 = state_11515;var statearr_11535_13535 = state_11515__$1;(statearr_11535_13535[2] = inst_11506);
(statearr_11535_13535[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 13))
{var inst_11472 = (state_11515[8]);var inst_11473 = (state_11515[9]);var inst_11475 = (state_11515[10]);var inst_11474 = (state_11515[11]);var inst_11482 = (state_11515[2]);var inst_11483 = (inst_11475 + 1);var tmp11529 = inst_11472;var tmp11530 = inst_11473;var tmp11531 = inst_11474;var inst_11472__$1 = tmp11529;var inst_11473__$1 = tmp11530;var inst_11474__$1 = tmp11531;var inst_11475__$1 = inst_11483;var state_11515__$1 = (function (){var statearr_11536 = state_11515;(statearr_11536[8] = inst_11472__$1);
(statearr_11536[9] = inst_11473__$1);
(statearr_11536[14] = inst_11482);
(statearr_11536[10] = inst_11475__$1);
(statearr_11536[11] = inst_11474__$1);
return statearr_11536;
})();var statearr_11537_13536 = state_11515__$1;(statearr_11537_13536[2] = null);
(statearr_11537_13536[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 14))
{var inst_11486 = (state_11515[13]);var inst_11488 = cljs.core.chunked_seq_QMARK_.call(null,inst_11486);var state_11515__$1 = state_11515;if(inst_11488)
{var statearr_11538_13537 = state_11515__$1;(statearr_11538_13537[1] = 17);
} else
{var statearr_11539_13538 = state_11515__$1;(statearr_11539_13538[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 15))
{var state_11515__$1 = state_11515;var statearr_11540_13539 = state_11515__$1;(statearr_11540_13539[2] = null);
(statearr_11540_13539[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 16))
{var inst_11504 = (state_11515[2]);var state_11515__$1 = state_11515;var statearr_11541_13540 = state_11515__$1;(statearr_11541_13540[2] = inst_11504);
(statearr_11541_13540[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 17))
{var inst_11486 = (state_11515[13]);var inst_11490 = cljs.core.chunk_first.call(null,inst_11486);var inst_11491 = cljs.core.chunk_rest.call(null,inst_11486);var inst_11492 = cljs.core.count.call(null,inst_11490);var inst_11472 = inst_11491;var inst_11473 = inst_11490;var inst_11474 = inst_11492;var inst_11475 = 0;var state_11515__$1 = (function (){var statearr_11542 = state_11515;(statearr_11542[8] = inst_11472);
(statearr_11542[9] = inst_11473);
(statearr_11542[10] = inst_11475);
(statearr_11542[11] = inst_11474);
return statearr_11542;
})();var statearr_11543_13541 = state_11515__$1;(statearr_11543_13541[2] = null);
(statearr_11543_13541[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 18))
{var inst_11486 = (state_11515[13]);var inst_11495 = cljs.core.first.call(null,inst_11486);var state_11515__$1 = state_11515;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11515__$1,20,out,inst_11495);
} else
{if((state_val_11516 === 19))
{var inst_11501 = (state_11515[2]);var state_11515__$1 = state_11515;var statearr_11544_13542 = state_11515__$1;(statearr_11544_13542[2] = inst_11501);
(statearr_11544_13542[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11516 === 20))
{var inst_11486 = (state_11515[13]);var inst_11497 = (state_11515[2]);var inst_11498 = cljs.core.next.call(null,inst_11486);var inst_11472 = inst_11498;var inst_11473 = null;var inst_11474 = 0;var inst_11475 = 0;var state_11515__$1 = (function (){var statearr_11545 = state_11515;(statearr_11545[15] = inst_11497);
(statearr_11545[8] = inst_11472);
(statearr_11545[9] = inst_11473);
(statearr_11545[10] = inst_11475);
(statearr_11545[11] = inst_11474);
return statearr_11545;
})();var statearr_11546_13543 = state_11515__$1;(statearr_11546_13543[2] = null);
(statearr_11546_13543[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto__))
;return ((function (switch__7454__auto__,c__7524__auto__){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11550[0] = state_machine__7455__auto__);
(statearr_11550[1] = 1);
return statearr_11550;
});
var state_machine__7455__auto____1 = (function (state_11515){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11515);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11551){if((e11551 instanceof Object))
{var ex__7458__auto__ = e11551;var statearr_11552_13544 = state_11515;(statearr_11552_13544[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11515);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13545 = state_11515;
state_11515 = G__13545;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11515){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__))
})();var state__7526__auto__ = (function (){var statearr_11553 = f__7525__auto__.call(null);(statearr_11553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_11553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto__))
);
return c__7524__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7524__auto___13546 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13546){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13546){
return (function (state_11613){var state_val_11614 = (state_11613[1]);if((state_val_11614 === 1))
{var state_11613__$1 = state_11613;var statearr_11615_13547 = state_11613__$1;(statearr_11615_13547[2] = null);
(statearr_11615_13547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11614 === 2))
{var state_11613__$1 = state_11613;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11613__$1,4,from);
} else
{if((state_val_11614 === 3))
{var inst_11611 = (state_11613[2]);var state_11613__$1 = state_11613;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11613__$1,inst_11611);
} else
{if((state_val_11614 === 4))
{var inst_11596 = (state_11613[7]);var inst_11596__$1 = (state_11613[2]);var inst_11597 = (inst_11596__$1 == null);var state_11613__$1 = (function (){var statearr_11616 = state_11613;(statearr_11616[7] = inst_11596__$1);
return statearr_11616;
})();if(cljs.core.truth_(inst_11597))
{var statearr_11617_13548 = state_11613__$1;(statearr_11617_13548[1] = 5);
} else
{var statearr_11618_13549 = state_11613__$1;(statearr_11618_13549[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11614 === 5))
{var state_11613__$1 = state_11613;if(cljs.core.truth_(close_QMARK_))
{var statearr_11619_13550 = state_11613__$1;(statearr_11619_13550[1] = 8);
} else
{var statearr_11620_13551 = state_11613__$1;(statearr_11620_13551[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11614 === 6))
{var inst_11596 = (state_11613[7]);var state_11613__$1 = state_11613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11613__$1,11,to,inst_11596);
} else
{if((state_val_11614 === 7))
{var inst_11609 = (state_11613[2]);var state_11613__$1 = state_11613;var statearr_11621_13552 = state_11613__$1;(statearr_11621_13552[2] = inst_11609);
(statearr_11621_13552[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11614 === 8))
{var inst_11600 = cljs.core.async.close_BANG_.call(null,to);var state_11613__$1 = state_11613;var statearr_11622_13553 = state_11613__$1;(statearr_11622_13553[2] = inst_11600);
(statearr_11622_13553[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11614 === 9))
{var state_11613__$1 = state_11613;var statearr_11623_13554 = state_11613__$1;(statearr_11623_13554[2] = null);
(statearr_11623_13554[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11614 === 10))
{var inst_11603 = (state_11613[2]);var state_11613__$1 = state_11613;var statearr_11624_13555 = state_11613__$1;(statearr_11624_13555[2] = inst_11603);
(statearr_11624_13555[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11614 === 11))
{var inst_11606 = (state_11613[2]);var state_11613__$1 = (function (){var statearr_11625 = state_11613;(statearr_11625[8] = inst_11606);
return statearr_11625;
})();var statearr_11626_13556 = state_11613__$1;(statearr_11626_13556[2] = null);
(statearr_11626_13556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13546))
;return ((function (switch__7454__auto__,c__7524__auto___13546){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11630 = [null,null,null,null,null,null,null,null,null];(statearr_11630[0] = state_machine__7455__auto__);
(statearr_11630[1] = 1);
return statearr_11630;
});
var state_machine__7455__auto____1 = (function (state_11613){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11613);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11631){if((e11631 instanceof Object))
{var ex__7458__auto__ = e11631;var statearr_11632_13557 = state_11613;(statearr_11632_13557[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11613);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11631;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13558 = state_11613;
state_11613 = G__13558;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11613){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13546))
})();var state__7526__auto__ = (function (){var statearr_11633 = f__7525__auto__.call(null);(statearr_11633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13546);
return statearr_11633;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13546))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7524__auto___13559 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13559,tc,fc){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13559,tc,fc){
return (function (state_11698){var state_val_11699 = (state_11698[1]);if((state_val_11699 === 1))
{var state_11698__$1 = state_11698;var statearr_11700_13560 = state_11698__$1;(statearr_11700_13560[2] = null);
(statearr_11700_13560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11699 === 2))
{var state_11698__$1 = state_11698;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11698__$1,4,ch);
} else
{if((state_val_11699 === 3))
{var inst_11696 = (state_11698[2]);var state_11698__$1 = state_11698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11698__$1,inst_11696);
} else
{if((state_val_11699 === 4))
{var inst_11679 = (state_11698[7]);var inst_11679__$1 = (state_11698[2]);var inst_11680 = (inst_11679__$1 == null);var state_11698__$1 = (function (){var statearr_11701 = state_11698;(statearr_11701[7] = inst_11679__$1);
return statearr_11701;
})();if(cljs.core.truth_(inst_11680))
{var statearr_11702_13561 = state_11698__$1;(statearr_11702_13561[1] = 5);
} else
{var statearr_11703_13562 = state_11698__$1;(statearr_11703_13562[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11699 === 5))
{var inst_11682 = cljs.core.async.close_BANG_.call(null,tc);var inst_11683 = cljs.core.async.close_BANG_.call(null,fc);var state_11698__$1 = (function (){var statearr_11704 = state_11698;(statearr_11704[8] = inst_11682);
return statearr_11704;
})();var statearr_11705_13563 = state_11698__$1;(statearr_11705_13563[2] = inst_11683);
(statearr_11705_13563[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11699 === 6))
{var inst_11679 = (state_11698[7]);var inst_11685 = p.call(null,inst_11679);var state_11698__$1 = state_11698;if(cljs.core.truth_(inst_11685))
{var statearr_11706_13564 = state_11698__$1;(statearr_11706_13564[1] = 9);
} else
{var statearr_11707_13565 = state_11698__$1;(statearr_11707_13565[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11699 === 7))
{var inst_11694 = (state_11698[2]);var state_11698__$1 = state_11698;var statearr_11708_13566 = state_11698__$1;(statearr_11708_13566[2] = inst_11694);
(statearr_11708_13566[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11699 === 8))
{var inst_11691 = (state_11698[2]);var state_11698__$1 = (function (){var statearr_11709 = state_11698;(statearr_11709[9] = inst_11691);
return statearr_11709;
})();var statearr_11710_13567 = state_11698__$1;(statearr_11710_13567[2] = null);
(statearr_11710_13567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11699 === 9))
{var state_11698__$1 = state_11698;var statearr_11711_13568 = state_11698__$1;(statearr_11711_13568[2] = tc);
(statearr_11711_13568[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11699 === 10))
{var state_11698__$1 = state_11698;var statearr_11712_13569 = state_11698__$1;(statearr_11712_13569[2] = fc);
(statearr_11712_13569[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11699 === 11))
{var inst_11679 = (state_11698[7]);var inst_11689 = (state_11698[2]);var state_11698__$1 = state_11698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11698__$1,8,inst_11689,inst_11679);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13559,tc,fc))
;return ((function (switch__7454__auto__,c__7524__auto___13559,tc,fc){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11716 = [null,null,null,null,null,null,null,null,null,null];(statearr_11716[0] = state_machine__7455__auto__);
(statearr_11716[1] = 1);
return statearr_11716;
});
var state_machine__7455__auto____1 = (function (state_11698){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11698);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11717){if((e11717 instanceof Object))
{var ex__7458__auto__ = e11717;var statearr_11718_13570 = state_11698;(statearr_11718_13570[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11698);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13571 = state_11698;
state_11698 = G__13571;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11698){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13559,tc,fc))
})();var state__7526__auto__ = (function (){var statearr_11719 = f__7525__auto__.call(null);(statearr_11719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13559);
return statearr_11719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13559,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto__){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto__){
return (function (state_11766){var state_val_11767 = (state_11766[1]);if((state_val_11767 === 7))
{var inst_11762 = (state_11766[2]);var state_11766__$1 = state_11766;var statearr_11768_13572 = state_11766__$1;(statearr_11768_13572[2] = inst_11762);
(statearr_11768_13572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11767 === 6))
{var inst_11755 = (state_11766[7]);var inst_11752 = (state_11766[8]);var inst_11759 = f.call(null,inst_11752,inst_11755);var inst_11752__$1 = inst_11759;var state_11766__$1 = (function (){var statearr_11769 = state_11766;(statearr_11769[8] = inst_11752__$1);
return statearr_11769;
})();var statearr_11770_13573 = state_11766__$1;(statearr_11770_13573[2] = null);
(statearr_11770_13573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11767 === 5))
{var inst_11752 = (state_11766[8]);var state_11766__$1 = state_11766;var statearr_11771_13574 = state_11766__$1;(statearr_11771_13574[2] = inst_11752);
(statearr_11771_13574[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11767 === 4))
{var inst_11755 = (state_11766[7]);var inst_11755__$1 = (state_11766[2]);var inst_11756 = (inst_11755__$1 == null);var state_11766__$1 = (function (){var statearr_11772 = state_11766;(statearr_11772[7] = inst_11755__$1);
return statearr_11772;
})();if(cljs.core.truth_(inst_11756))
{var statearr_11773_13575 = state_11766__$1;(statearr_11773_13575[1] = 5);
} else
{var statearr_11774_13576 = state_11766__$1;(statearr_11774_13576[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11767 === 3))
{var inst_11764 = (state_11766[2]);var state_11766__$1 = state_11766;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11766__$1,inst_11764);
} else
{if((state_val_11767 === 2))
{var state_11766__$1 = state_11766;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11766__$1,4,ch);
} else
{if((state_val_11767 === 1))
{var inst_11752 = init;var state_11766__$1 = (function (){var statearr_11775 = state_11766;(statearr_11775[8] = inst_11752);
return statearr_11775;
})();var statearr_11776_13577 = state_11766__$1;(statearr_11776_13577[2] = null);
(statearr_11776_13577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7524__auto__))
;return ((function (switch__7454__auto__,c__7524__auto__){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11780 = [null,null,null,null,null,null,null,null,null];(statearr_11780[0] = state_machine__7455__auto__);
(statearr_11780[1] = 1);
return statearr_11780;
});
var state_machine__7455__auto____1 = (function (state_11766){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11766);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11781){if((e11781 instanceof Object))
{var ex__7458__auto__ = e11781;var statearr_11782_13578 = state_11766;(statearr_11782_13578[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11766);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11781;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13579 = state_11766;
state_11766 = G__13579;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11766){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__))
})();var state__7526__auto__ = (function (){var statearr_11783 = f__7525__auto__.call(null);(statearr_11783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_11783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto__))
);
return c__7524__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto__){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto__){
return (function (state_11845){var state_val_11846 = (state_11845[1]);if((state_val_11846 === 1))
{var inst_11825 = cljs.core.seq.call(null,coll);var inst_11826 = inst_11825;var state_11845__$1 = (function (){var statearr_11847 = state_11845;(statearr_11847[7] = inst_11826);
return statearr_11847;
})();var statearr_11848_13580 = state_11845__$1;(statearr_11848_13580[2] = null);
(statearr_11848_13580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 2))
{var inst_11826 = (state_11845[7]);var state_11845__$1 = state_11845;if(cljs.core.truth_(inst_11826))
{var statearr_11849_13581 = state_11845__$1;(statearr_11849_13581[1] = 4);
} else
{var statearr_11850_13582 = state_11845__$1;(statearr_11850_13582[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 3))
{var inst_11843 = (state_11845[2]);var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11845__$1,inst_11843);
} else
{if((state_val_11846 === 4))
{var inst_11826 = (state_11845[7]);var inst_11829 = cljs.core.first.call(null,inst_11826);var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11845__$1,7,ch,inst_11829);
} else
{if((state_val_11846 === 5))
{var state_11845__$1 = state_11845;if(cljs.core.truth_(close_QMARK_))
{var statearr_11851_13583 = state_11845__$1;(statearr_11851_13583[1] = 8);
} else
{var statearr_11852_13584 = state_11845__$1;(statearr_11852_13584[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 6))
{var inst_11841 = (state_11845[2]);var state_11845__$1 = state_11845;var statearr_11853_13585 = state_11845__$1;(statearr_11853_13585[2] = inst_11841);
(statearr_11853_13585[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 7))
{var inst_11826 = (state_11845[7]);var inst_11831 = (state_11845[2]);var inst_11832 = cljs.core.next.call(null,inst_11826);var inst_11826__$1 = inst_11832;var state_11845__$1 = (function (){var statearr_11854 = state_11845;(statearr_11854[7] = inst_11826__$1);
(statearr_11854[8] = inst_11831);
return statearr_11854;
})();var statearr_11855_13586 = state_11845__$1;(statearr_11855_13586[2] = null);
(statearr_11855_13586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 8))
{var inst_11836 = cljs.core.async.close_BANG_.call(null,ch);var state_11845__$1 = state_11845;var statearr_11856_13587 = state_11845__$1;(statearr_11856_13587[2] = inst_11836);
(statearr_11856_13587[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 9))
{var state_11845__$1 = state_11845;var statearr_11857_13588 = state_11845__$1;(statearr_11857_13588[2] = null);
(statearr_11857_13588[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11846 === 10))
{var inst_11839 = (state_11845[2]);var state_11845__$1 = state_11845;var statearr_11858_13589 = state_11845__$1;(statearr_11858_13589[2] = inst_11839);
(statearr_11858_13589[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto__))
;return ((function (switch__7454__auto__,c__7524__auto__){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11862 = [null,null,null,null,null,null,null,null,null];(statearr_11862[0] = state_machine__7455__auto__);
(statearr_11862[1] = 1);
return statearr_11862;
});
var state_machine__7455__auto____1 = (function (state_11845){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11845);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11863){if((e11863 instanceof Object))
{var ex__7458__auto__ = e11863;var statearr_11864_13590 = state_11845;(statearr_11864_13590[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11845);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11863;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13591 = state_11845;
state_11845 = G__13591;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11845){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__))
})();var state__7526__auto__ = (function (){var statearr_11865 = f__7525__auto__.call(null);(statearr_11865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_11865;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto__))
);
return c__7524__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11867 = {};return obj11867;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4872__auto__ = _;if(and__4872__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5511__auto__ = (((_ == null))?null:_);return (function (){var or__4884__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11869 = {};return obj11869;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12093 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12093 = (function (cs,ch,mult,meta12094){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12094 = meta12094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12093.cljs$lang$type = true;
cljs.core.async.t12093.cljs$lang$ctorStr = "cljs.core.async/t12093";
cljs.core.async.t12093.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t12093");
});})(cs))
;
cljs.core.async.t12093.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12093.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12093.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12093.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12093.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12093.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12095){var self__ = this;
var _12095__$1 = this;return self__.meta12094;
});})(cs))
;
cljs.core.async.t12093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12095,meta12094__$1){var self__ = this;
var _12095__$1 = this;return (new cljs.core.async.t12093(self__.cs,self__.ch,self__.mult,meta12094__$1));
});})(cs))
;
cljs.core.async.__GT_t12093 = ((function (cs){
return (function __GT_t12093(cs__$1,ch__$1,mult__$1,meta12094){return (new cljs.core.async.t12093(cs__$1,ch__$1,mult__$1,meta12094));
});})(cs))
;
}
return (new cljs.core.async.t12093(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7524__auto___13592 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13592,cs,m,dchan,dctr,done){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13592,cs,m,dchan,dctr,done){
return (function (state_12230){var state_val_12231 = (state_12230[1]);if((state_val_12231 === 32))
{var inst_12174 = (state_12230[7]);var inst_12098 = (state_12230[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12230,31,Object,null,30);var inst_12181 = cljs.core.async.put_BANG_.call(null,inst_12174,inst_12098,done);var state_12230__$1 = state_12230;var statearr_12232_13593 = state_12230__$1;(statearr_12232_13593[2] = inst_12181);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12230__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 1))
{var state_12230__$1 = state_12230;var statearr_12233_13594 = state_12230__$1;(statearr_12233_13594[2] = null);
(statearr_12233_13594[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 33))
{var inst_12187 = (state_12230[9]);var inst_12189 = cljs.core.chunked_seq_QMARK_.call(null,inst_12187);var state_12230__$1 = state_12230;if(inst_12189)
{var statearr_12234_13595 = state_12230__$1;(statearr_12234_13595[1] = 36);
} else
{var statearr_12235_13596 = state_12230__$1;(statearr_12235_13596[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 2))
{var state_12230__$1 = state_12230;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12230__$1,4,ch);
} else
{if((state_val_12231 === 34))
{var state_12230__$1 = state_12230;var statearr_12236_13597 = state_12230__$1;(statearr_12236_13597[2] = null);
(statearr_12236_13597[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 3))
{var inst_12228 = (state_12230[2]);var state_12230__$1 = state_12230;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12230__$1,inst_12228);
} else
{if((state_val_12231 === 35))
{var inst_12212 = (state_12230[2]);var state_12230__$1 = state_12230;var statearr_12237_13598 = state_12230__$1;(statearr_12237_13598[2] = inst_12212);
(statearr_12237_13598[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 4))
{var inst_12098 = (state_12230[8]);var inst_12098__$1 = (state_12230[2]);var inst_12099 = (inst_12098__$1 == null);var state_12230__$1 = (function (){var statearr_12238 = state_12230;(statearr_12238[8] = inst_12098__$1);
return statearr_12238;
})();if(cljs.core.truth_(inst_12099))
{var statearr_12239_13599 = state_12230__$1;(statearr_12239_13599[1] = 5);
} else
{var statearr_12240_13600 = state_12230__$1;(statearr_12240_13600[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 36))
{var inst_12187 = (state_12230[9]);var inst_12191 = cljs.core.chunk_first.call(null,inst_12187);var inst_12192 = cljs.core.chunk_rest.call(null,inst_12187);var inst_12193 = cljs.core.count.call(null,inst_12191);var inst_12166 = inst_12192;var inst_12167 = inst_12191;var inst_12168 = inst_12193;var inst_12169 = 0;var state_12230__$1 = (function (){var statearr_12241 = state_12230;(statearr_12241[10] = inst_12166);
(statearr_12241[11] = inst_12169);
(statearr_12241[12] = inst_12168);
(statearr_12241[13] = inst_12167);
return statearr_12241;
})();var statearr_12242_13601 = state_12230__$1;(statearr_12242_13601[2] = null);
(statearr_12242_13601[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 5))
{var inst_12105 = cljs.core.deref.call(null,cs);var inst_12106 = cljs.core.seq.call(null,inst_12105);var inst_12107 = inst_12106;var inst_12108 = null;var inst_12109 = 0;var inst_12110 = 0;var state_12230__$1 = (function (){var statearr_12243 = state_12230;(statearr_12243[14] = inst_12107);
(statearr_12243[15] = inst_12108);
(statearr_12243[16] = inst_12110);
(statearr_12243[17] = inst_12109);
return statearr_12243;
})();var statearr_12244_13602 = state_12230__$1;(statearr_12244_13602[2] = null);
(statearr_12244_13602[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 37))
{var inst_12187 = (state_12230[9]);var inst_12196 = cljs.core.first.call(null,inst_12187);var state_12230__$1 = (function (){var statearr_12245 = state_12230;(statearr_12245[18] = inst_12196);
return statearr_12245;
})();var statearr_12246_13603 = state_12230__$1;(statearr_12246_13603[2] = null);
(statearr_12246_13603[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 6))
{var inst_12158 = (state_12230[19]);var inst_12157 = cljs.core.deref.call(null,cs);var inst_12158__$1 = cljs.core.keys.call(null,inst_12157);var inst_12159 = cljs.core.count.call(null,inst_12158__$1);var inst_12160 = cljs.core.reset_BANG_.call(null,dctr,inst_12159);var inst_12165 = cljs.core.seq.call(null,inst_12158__$1);var inst_12166 = inst_12165;var inst_12167 = null;var inst_12168 = 0;var inst_12169 = 0;var state_12230__$1 = (function (){var statearr_12247 = state_12230;(statearr_12247[19] = inst_12158__$1);
(statearr_12247[10] = inst_12166);
(statearr_12247[20] = inst_12160);
(statearr_12247[11] = inst_12169);
(statearr_12247[12] = inst_12168);
(statearr_12247[13] = inst_12167);
return statearr_12247;
})();var statearr_12248_13604 = state_12230__$1;(statearr_12248_13604[2] = null);
(statearr_12248_13604[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 38))
{var inst_12209 = (state_12230[2]);var state_12230__$1 = state_12230;var statearr_12249_13605 = state_12230__$1;(statearr_12249_13605[2] = inst_12209);
(statearr_12249_13605[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 7))
{var inst_12226 = (state_12230[2]);var state_12230__$1 = state_12230;var statearr_12250_13606 = state_12230__$1;(statearr_12250_13606[2] = inst_12226);
(statearr_12250_13606[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 39))
{var inst_12187 = (state_12230[9]);var inst_12205 = (state_12230[2]);var inst_12206 = cljs.core.next.call(null,inst_12187);var inst_12166 = inst_12206;var inst_12167 = null;var inst_12168 = 0;var inst_12169 = 0;var state_12230__$1 = (function (){var statearr_12251 = state_12230;(statearr_12251[10] = inst_12166);
(statearr_12251[21] = inst_12205);
(statearr_12251[11] = inst_12169);
(statearr_12251[12] = inst_12168);
(statearr_12251[13] = inst_12167);
return statearr_12251;
})();var statearr_12252_13607 = state_12230__$1;(statearr_12252_13607[2] = null);
(statearr_12252_13607[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 8))
{var inst_12110 = (state_12230[16]);var inst_12109 = (state_12230[17]);var inst_12112 = (inst_12110 < inst_12109);var inst_12113 = inst_12112;var state_12230__$1 = state_12230;if(cljs.core.truth_(inst_12113))
{var statearr_12253_13608 = state_12230__$1;(statearr_12253_13608[1] = 10);
} else
{var statearr_12254_13609 = state_12230__$1;(statearr_12254_13609[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 40))
{var inst_12196 = (state_12230[18]);var inst_12197 = (state_12230[2]);var inst_12198 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12199 = cljs.core.async.untap_STAR_.call(null,m,inst_12196);var state_12230__$1 = (function (){var statearr_12255 = state_12230;(statearr_12255[22] = inst_12198);
(statearr_12255[23] = inst_12197);
return statearr_12255;
})();var statearr_12256_13610 = state_12230__$1;(statearr_12256_13610[2] = inst_12199);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12230__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 9))
{var inst_12155 = (state_12230[2]);var state_12230__$1 = state_12230;var statearr_12257_13611 = state_12230__$1;(statearr_12257_13611[2] = inst_12155);
(statearr_12257_13611[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 41))
{var inst_12196 = (state_12230[18]);var inst_12098 = (state_12230[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12230,40,Object,null,39);var inst_12203 = cljs.core.async.put_BANG_.call(null,inst_12196,inst_12098,done);var state_12230__$1 = state_12230;var statearr_12258_13612 = state_12230__$1;(statearr_12258_13612[2] = inst_12203);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12230__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 10))
{var inst_12108 = (state_12230[15]);var inst_12110 = (state_12230[16]);var inst_12116 = cljs.core._nth.call(null,inst_12108,inst_12110);var inst_12117 = cljs.core.nth.call(null,inst_12116,0,null);var inst_12118 = cljs.core.nth.call(null,inst_12116,1,null);var state_12230__$1 = (function (){var statearr_12259 = state_12230;(statearr_12259[24] = inst_12117);
return statearr_12259;
})();if(cljs.core.truth_(inst_12118))
{var statearr_12260_13613 = state_12230__$1;(statearr_12260_13613[1] = 13);
} else
{var statearr_12261_13614 = state_12230__$1;(statearr_12261_13614[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 42))
{var state_12230__$1 = state_12230;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12230__$1,45,dchan);
} else
{if((state_val_12231 === 11))
{var inst_12107 = (state_12230[14]);var inst_12127 = (state_12230[25]);var inst_12127__$1 = cljs.core.seq.call(null,inst_12107);var state_12230__$1 = (function (){var statearr_12262 = state_12230;(statearr_12262[25] = inst_12127__$1);
return statearr_12262;
})();if(inst_12127__$1)
{var statearr_12263_13615 = state_12230__$1;(statearr_12263_13615[1] = 16);
} else
{var statearr_12264_13616 = state_12230__$1;(statearr_12264_13616[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 43))
{var state_12230__$1 = state_12230;var statearr_12265_13617 = state_12230__$1;(statearr_12265_13617[2] = null);
(statearr_12265_13617[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 12))
{var inst_12153 = (state_12230[2]);var state_12230__$1 = state_12230;var statearr_12266_13618 = state_12230__$1;(statearr_12266_13618[2] = inst_12153);
(statearr_12266_13618[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 44))
{var inst_12223 = (state_12230[2]);var state_12230__$1 = (function (){var statearr_12267 = state_12230;(statearr_12267[26] = inst_12223);
return statearr_12267;
})();var statearr_12268_13619 = state_12230__$1;(statearr_12268_13619[2] = null);
(statearr_12268_13619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 13))
{var inst_12117 = (state_12230[24]);var inst_12120 = cljs.core.async.close_BANG_.call(null,inst_12117);var state_12230__$1 = state_12230;var statearr_12269_13620 = state_12230__$1;(statearr_12269_13620[2] = inst_12120);
(statearr_12269_13620[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 45))
{var inst_12220 = (state_12230[2]);var state_12230__$1 = state_12230;var statearr_12273_13621 = state_12230__$1;(statearr_12273_13621[2] = inst_12220);
(statearr_12273_13621[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 14))
{var state_12230__$1 = state_12230;var statearr_12274_13622 = state_12230__$1;(statearr_12274_13622[2] = null);
(statearr_12274_13622[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 15))
{var inst_12107 = (state_12230[14]);var inst_12108 = (state_12230[15]);var inst_12110 = (state_12230[16]);var inst_12109 = (state_12230[17]);var inst_12123 = (state_12230[2]);var inst_12124 = (inst_12110 + 1);var tmp12270 = inst_12107;var tmp12271 = inst_12108;var tmp12272 = inst_12109;var inst_12107__$1 = tmp12270;var inst_12108__$1 = tmp12271;var inst_12109__$1 = tmp12272;var inst_12110__$1 = inst_12124;var state_12230__$1 = (function (){var statearr_12275 = state_12230;(statearr_12275[14] = inst_12107__$1);
(statearr_12275[15] = inst_12108__$1);
(statearr_12275[16] = inst_12110__$1);
(statearr_12275[17] = inst_12109__$1);
(statearr_12275[27] = inst_12123);
return statearr_12275;
})();var statearr_12276_13623 = state_12230__$1;(statearr_12276_13623[2] = null);
(statearr_12276_13623[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 16))
{var inst_12127 = (state_12230[25]);var inst_12129 = cljs.core.chunked_seq_QMARK_.call(null,inst_12127);var state_12230__$1 = state_12230;if(inst_12129)
{var statearr_12277_13624 = state_12230__$1;(statearr_12277_13624[1] = 19);
} else
{var statearr_12278_13625 = state_12230__$1;(statearr_12278_13625[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 17))
{var state_12230__$1 = state_12230;var statearr_12279_13626 = state_12230__$1;(statearr_12279_13626[2] = null);
(statearr_12279_13626[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 18))
{var inst_12151 = (state_12230[2]);var state_12230__$1 = state_12230;var statearr_12280_13627 = state_12230__$1;(statearr_12280_13627[2] = inst_12151);
(statearr_12280_13627[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 19))
{var inst_12127 = (state_12230[25]);var inst_12131 = cljs.core.chunk_first.call(null,inst_12127);var inst_12132 = cljs.core.chunk_rest.call(null,inst_12127);var inst_12133 = cljs.core.count.call(null,inst_12131);var inst_12107 = inst_12132;var inst_12108 = inst_12131;var inst_12109 = inst_12133;var inst_12110 = 0;var state_12230__$1 = (function (){var statearr_12281 = state_12230;(statearr_12281[14] = inst_12107);
(statearr_12281[15] = inst_12108);
(statearr_12281[16] = inst_12110);
(statearr_12281[17] = inst_12109);
return statearr_12281;
})();var statearr_12282_13628 = state_12230__$1;(statearr_12282_13628[2] = null);
(statearr_12282_13628[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 20))
{var inst_12127 = (state_12230[25]);var inst_12137 = cljs.core.first.call(null,inst_12127);var inst_12138 = cljs.core.nth.call(null,inst_12137,0,null);var inst_12139 = cljs.core.nth.call(null,inst_12137,1,null);var state_12230__$1 = (function (){var statearr_12283 = state_12230;(statearr_12283[28] = inst_12138);
return statearr_12283;
})();if(cljs.core.truth_(inst_12139))
{var statearr_12284_13629 = state_12230__$1;(statearr_12284_13629[1] = 22);
} else
{var statearr_12285_13630 = state_12230__$1;(statearr_12285_13630[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 21))
{var inst_12148 = (state_12230[2]);var state_12230__$1 = state_12230;var statearr_12286_13631 = state_12230__$1;(statearr_12286_13631[2] = inst_12148);
(statearr_12286_13631[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 22))
{var inst_12138 = (state_12230[28]);var inst_12141 = cljs.core.async.close_BANG_.call(null,inst_12138);var state_12230__$1 = state_12230;var statearr_12287_13632 = state_12230__$1;(statearr_12287_13632[2] = inst_12141);
(statearr_12287_13632[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 23))
{var state_12230__$1 = state_12230;var statearr_12288_13633 = state_12230__$1;(statearr_12288_13633[2] = null);
(statearr_12288_13633[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 24))
{var inst_12127 = (state_12230[25]);var inst_12144 = (state_12230[2]);var inst_12145 = cljs.core.next.call(null,inst_12127);var inst_12107 = inst_12145;var inst_12108 = null;var inst_12109 = 0;var inst_12110 = 0;var state_12230__$1 = (function (){var statearr_12289 = state_12230;(statearr_12289[29] = inst_12144);
(statearr_12289[14] = inst_12107);
(statearr_12289[15] = inst_12108);
(statearr_12289[16] = inst_12110);
(statearr_12289[17] = inst_12109);
return statearr_12289;
})();var statearr_12290_13634 = state_12230__$1;(statearr_12290_13634[2] = null);
(statearr_12290_13634[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 25))
{var inst_12169 = (state_12230[11]);var inst_12168 = (state_12230[12]);var inst_12171 = (inst_12169 < inst_12168);var inst_12172 = inst_12171;var state_12230__$1 = state_12230;if(cljs.core.truth_(inst_12172))
{var statearr_12291_13635 = state_12230__$1;(statearr_12291_13635[1] = 27);
} else
{var statearr_12292_13636 = state_12230__$1;(statearr_12292_13636[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 26))
{var inst_12158 = (state_12230[19]);var inst_12216 = (state_12230[2]);var inst_12217 = cljs.core.seq.call(null,inst_12158);var state_12230__$1 = (function (){var statearr_12293 = state_12230;(statearr_12293[30] = inst_12216);
return statearr_12293;
})();if(inst_12217)
{var statearr_12294_13637 = state_12230__$1;(statearr_12294_13637[1] = 42);
} else
{var statearr_12295_13638 = state_12230__$1;(statearr_12295_13638[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 27))
{var inst_12169 = (state_12230[11]);var inst_12167 = (state_12230[13]);var inst_12174 = cljs.core._nth.call(null,inst_12167,inst_12169);var state_12230__$1 = (function (){var statearr_12296 = state_12230;(statearr_12296[7] = inst_12174);
return statearr_12296;
})();var statearr_12297_13639 = state_12230__$1;(statearr_12297_13639[2] = null);
(statearr_12297_13639[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 28))
{var inst_12187 = (state_12230[9]);var inst_12166 = (state_12230[10]);var inst_12187__$1 = cljs.core.seq.call(null,inst_12166);var state_12230__$1 = (function (){var statearr_12301 = state_12230;(statearr_12301[9] = inst_12187__$1);
return statearr_12301;
})();if(inst_12187__$1)
{var statearr_12302_13640 = state_12230__$1;(statearr_12302_13640[1] = 33);
} else
{var statearr_12303_13641 = state_12230__$1;(statearr_12303_13641[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 29))
{var inst_12214 = (state_12230[2]);var state_12230__$1 = state_12230;var statearr_12304_13642 = state_12230__$1;(statearr_12304_13642[2] = inst_12214);
(statearr_12304_13642[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 30))
{var inst_12166 = (state_12230[10]);var inst_12169 = (state_12230[11]);var inst_12168 = (state_12230[12]);var inst_12167 = (state_12230[13]);var inst_12183 = (state_12230[2]);var inst_12184 = (inst_12169 + 1);var tmp12298 = inst_12166;var tmp12299 = inst_12168;var tmp12300 = inst_12167;var inst_12166__$1 = tmp12298;var inst_12167__$1 = tmp12300;var inst_12168__$1 = tmp12299;var inst_12169__$1 = inst_12184;var state_12230__$1 = (function (){var statearr_12305 = state_12230;(statearr_12305[31] = inst_12183);
(statearr_12305[10] = inst_12166__$1);
(statearr_12305[11] = inst_12169__$1);
(statearr_12305[12] = inst_12168__$1);
(statearr_12305[13] = inst_12167__$1);
return statearr_12305;
})();var statearr_12306_13643 = state_12230__$1;(statearr_12306_13643[2] = null);
(statearr_12306_13643[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12231 === 31))
{var inst_12174 = (state_12230[7]);var inst_12175 = (state_12230[2]);var inst_12176 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12177 = cljs.core.async.untap_STAR_.call(null,m,inst_12174);var state_12230__$1 = (function (){var statearr_12307 = state_12230;(statearr_12307[32] = inst_12176);
(statearr_12307[33] = inst_12175);
return statearr_12307;
})();var statearr_12308_13644 = state_12230__$1;(statearr_12308_13644[2] = inst_12177);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12230__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13592,cs,m,dchan,dctr,done))
;return ((function (switch__7454__auto__,c__7524__auto___13592,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12312[0] = state_machine__7455__auto__);
(statearr_12312[1] = 1);
return statearr_12312;
});
var state_machine__7455__auto____1 = (function (state_12230){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12230);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12313){if((e12313 instanceof Object))
{var ex__7458__auto__ = e12313;var statearr_12314_13645 = state_12230;(statearr_12314_13645[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12230);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12313;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13646 = state_12230;
state_12230 = G__13646;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12230){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13592,cs,m,dchan,dctr,done))
})();var state__7526__auto__ = (function (){var statearr_12315 = f__7525__auto__.call(null);(statearr_12315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13592);
return statearr_12315;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13592,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12317 = {};return obj12317;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4872__auto__ = m;if(and__4872__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5511__auto__ = (((m == null))?null:m);return (function (){var or__4884__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12427 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12427 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12428){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12428 = meta12428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12427.cljs$lang$type = true;
cljs.core.async.t12427.cljs$lang$ctorStr = "cljs.core.async/t12427";
cljs.core.async.t12427.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t12427");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12427.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12427.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12427.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12427.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12427.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12427.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12427.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12429){var self__ = this;
var _12429__$1 = this;return self__.meta12428;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12429,meta12428__$1){var self__ = this;
var _12429__$1 = this;return (new cljs.core.async.t12427(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12428__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12427 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12427(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12428){return (new cljs.core.async.t12427(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12428));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12427(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7524__auto___13647 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13647,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13647,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12494){var state_val_12495 = (state_12494[1]);if((state_val_12495 === 1))
{var inst_12433 = (state_12494[7]);var inst_12433__$1 = calc_state.call(null);var inst_12434 = cljs.core.seq_QMARK_.call(null,inst_12433__$1);var state_12494__$1 = (function (){var statearr_12496 = state_12494;(statearr_12496[7] = inst_12433__$1);
return statearr_12496;
})();if(inst_12434)
{var statearr_12497_13648 = state_12494__$1;(statearr_12497_13648[1] = 2);
} else
{var statearr_12498_13649 = state_12494__$1;(statearr_12498_13649[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 2))
{var inst_12433 = (state_12494[7]);var inst_12436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12433);var state_12494__$1 = state_12494;var statearr_12499_13650 = state_12494__$1;(statearr_12499_13650[2] = inst_12436);
(statearr_12499_13650[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 3))
{var inst_12433 = (state_12494[7]);var state_12494__$1 = state_12494;var statearr_12500_13651 = state_12494__$1;(statearr_12500_13651[2] = inst_12433);
(statearr_12500_13651[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 4))
{var inst_12433 = (state_12494[7]);var inst_12439 = (state_12494[2]);var inst_12440 = cljs.core.get.call(null,inst_12439,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12441 = cljs.core.get.call(null,inst_12439,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12442 = cljs.core.get.call(null,inst_12439,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12443 = inst_12433;var state_12494__$1 = (function (){var statearr_12501 = state_12494;(statearr_12501[8] = inst_12440);
(statearr_12501[9] = inst_12441);
(statearr_12501[10] = inst_12443);
(statearr_12501[11] = inst_12442);
return statearr_12501;
})();var statearr_12502_13652 = state_12494__$1;(statearr_12502_13652[2] = null);
(statearr_12502_13652[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 5))
{var inst_12443 = (state_12494[10]);var inst_12446 = cljs.core.seq_QMARK_.call(null,inst_12443);var state_12494__$1 = state_12494;if(inst_12446)
{var statearr_12503_13653 = state_12494__$1;(statearr_12503_13653[1] = 7);
} else
{var statearr_12504_13654 = state_12494__$1;(statearr_12504_13654[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 6))
{var inst_12492 = (state_12494[2]);var state_12494__$1 = state_12494;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12494__$1,inst_12492);
} else
{if((state_val_12495 === 7))
{var inst_12443 = (state_12494[10]);var inst_12448 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12443);var state_12494__$1 = state_12494;var statearr_12505_13655 = state_12494__$1;(statearr_12505_13655[2] = inst_12448);
(statearr_12505_13655[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 8))
{var inst_12443 = (state_12494[10]);var state_12494__$1 = state_12494;var statearr_12506_13656 = state_12494__$1;(statearr_12506_13656[2] = inst_12443);
(statearr_12506_13656[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 9))
{var inst_12451 = (state_12494[12]);var inst_12451__$1 = (state_12494[2]);var inst_12452 = cljs.core.get.call(null,inst_12451__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12453 = cljs.core.get.call(null,inst_12451__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12454 = cljs.core.get.call(null,inst_12451__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12494__$1 = (function (){var statearr_12507 = state_12494;(statearr_12507[13] = inst_12454);
(statearr_12507[14] = inst_12453);
(statearr_12507[12] = inst_12451__$1);
return statearr_12507;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12494__$1,10,inst_12452);
} else
{if((state_val_12495 === 10))
{var inst_12458 = (state_12494[15]);var inst_12459 = (state_12494[16]);var inst_12457 = (state_12494[2]);var inst_12458__$1 = cljs.core.nth.call(null,inst_12457,0,null);var inst_12459__$1 = cljs.core.nth.call(null,inst_12457,1,null);var inst_12460 = (inst_12458__$1 == null);var inst_12461 = cljs.core._EQ_.call(null,inst_12459__$1,change);var inst_12462 = (inst_12460) || (inst_12461);var state_12494__$1 = (function (){var statearr_12508 = state_12494;(statearr_12508[15] = inst_12458__$1);
(statearr_12508[16] = inst_12459__$1);
return statearr_12508;
})();if(cljs.core.truth_(inst_12462))
{var statearr_12509_13657 = state_12494__$1;(statearr_12509_13657[1] = 11);
} else
{var statearr_12510_13658 = state_12494__$1;(statearr_12510_13658[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 11))
{var inst_12458 = (state_12494[15]);var inst_12464 = (inst_12458 == null);var state_12494__$1 = state_12494;if(cljs.core.truth_(inst_12464))
{var statearr_12511_13659 = state_12494__$1;(statearr_12511_13659[1] = 14);
} else
{var statearr_12512_13660 = state_12494__$1;(statearr_12512_13660[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 12))
{var inst_12473 = (state_12494[17]);var inst_12459 = (state_12494[16]);var inst_12454 = (state_12494[13]);var inst_12473__$1 = inst_12454.call(null,inst_12459);var state_12494__$1 = (function (){var statearr_12513 = state_12494;(statearr_12513[17] = inst_12473__$1);
return statearr_12513;
})();if(cljs.core.truth_(inst_12473__$1))
{var statearr_12514_13661 = state_12494__$1;(statearr_12514_13661[1] = 17);
} else
{var statearr_12515_13662 = state_12494__$1;(statearr_12515_13662[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 13))
{var inst_12490 = (state_12494[2]);var state_12494__$1 = state_12494;var statearr_12516_13663 = state_12494__$1;(statearr_12516_13663[2] = inst_12490);
(statearr_12516_13663[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 14))
{var inst_12459 = (state_12494[16]);var inst_12466 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12459);var state_12494__$1 = state_12494;var statearr_12517_13664 = state_12494__$1;(statearr_12517_13664[2] = inst_12466);
(statearr_12517_13664[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 15))
{var state_12494__$1 = state_12494;var statearr_12518_13665 = state_12494__$1;(statearr_12518_13665[2] = null);
(statearr_12518_13665[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 16))
{var inst_12469 = (state_12494[2]);var inst_12470 = calc_state.call(null);var inst_12443 = inst_12470;var state_12494__$1 = (function (){var statearr_12519 = state_12494;(statearr_12519[18] = inst_12469);
(statearr_12519[10] = inst_12443);
return statearr_12519;
})();var statearr_12520_13666 = state_12494__$1;(statearr_12520_13666[2] = null);
(statearr_12520_13666[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 17))
{var inst_12473 = (state_12494[17]);var state_12494__$1 = state_12494;var statearr_12521_13667 = state_12494__$1;(statearr_12521_13667[2] = inst_12473);
(statearr_12521_13667[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 18))
{var inst_12459 = (state_12494[16]);var inst_12454 = (state_12494[13]);var inst_12453 = (state_12494[14]);var inst_12476 = cljs.core.empty_QMARK_.call(null,inst_12454);var inst_12477 = inst_12453.call(null,inst_12459);var inst_12478 = cljs.core.not.call(null,inst_12477);var inst_12479 = (inst_12476) && (inst_12478);var state_12494__$1 = state_12494;var statearr_12522_13668 = state_12494__$1;(statearr_12522_13668[2] = inst_12479);
(statearr_12522_13668[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 19))
{var inst_12481 = (state_12494[2]);var state_12494__$1 = state_12494;if(cljs.core.truth_(inst_12481))
{var statearr_12523_13669 = state_12494__$1;(statearr_12523_13669[1] = 20);
} else
{var statearr_12524_13670 = state_12494__$1;(statearr_12524_13670[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 20))
{var inst_12458 = (state_12494[15]);var state_12494__$1 = state_12494;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12494__$1,23,out,inst_12458);
} else
{if((state_val_12495 === 21))
{var state_12494__$1 = state_12494;var statearr_12525_13671 = state_12494__$1;(statearr_12525_13671[2] = null);
(statearr_12525_13671[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 22))
{var inst_12451 = (state_12494[12]);var inst_12487 = (state_12494[2]);var inst_12443 = inst_12451;var state_12494__$1 = (function (){var statearr_12526 = state_12494;(statearr_12526[10] = inst_12443);
(statearr_12526[19] = inst_12487);
return statearr_12526;
})();var statearr_12527_13672 = state_12494__$1;(statearr_12527_13672[2] = null);
(statearr_12527_13672[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12495 === 23))
{var inst_12484 = (state_12494[2]);var state_12494__$1 = state_12494;var statearr_12528_13673 = state_12494__$1;(statearr_12528_13673[2] = inst_12484);
(statearr_12528_13673[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13647,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7454__auto__,c__7524__auto___13647,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12532[0] = state_machine__7455__auto__);
(statearr_12532[1] = 1);
return statearr_12532;
});
var state_machine__7455__auto____1 = (function (state_12494){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12494);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12533){if((e12533 instanceof Object))
{var ex__7458__auto__ = e12533;var statearr_12534_13674 = state_12494;(statearr_12534_13674[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12494);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12533;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13675 = state_12494;
state_12494 = G__13675;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12494){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13647,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7526__auto__ = (function (){var statearr_12535 = f__7525__auto__.call(null);(statearr_12535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13647);
return statearr_12535;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13647,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12537 = {};return obj12537;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4872__auto__ = p;if(and__4872__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4872__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5511__auto__ = (((p == null))?null:p);return (function (){var or__4884__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4872__auto__ = p;if(and__4872__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4872__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5511__auto__ = (((p == null))?null:p);return (function (){var or__4884__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4872__auto__ = p;if(and__4872__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4872__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5511__auto__ = (((p == null))?null:p);return (function (){var or__4884__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4872__auto__ = p;if(and__4872__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4872__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5511__auto__ = (((p == null))?null:p);return (function (){var or__4884__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5511__auto__)]);if(or__4884__auto__)
{return or__4884__auto__;
} else
{var or__4884__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4884__auto____$1)
{return or__4884__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__4884__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4884__auto__,mults){
return (function (p1__12538_SHARP_){if(cljs.core.truth_(p1__12538_SHARP_.call(null,topic)))
{return p1__12538_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12538_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4884__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12663 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12663 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12664){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12664 = meta12664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12663.cljs$lang$type = true;
cljs.core.async.t12663.cljs$lang$ctorStr = "cljs.core.async/t12663";
cljs.core.async.t12663.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t12663");
});})(mults,ensure_mult))
;
cljs.core.async.t12663.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12663.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12663.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12663.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12663.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12663.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12665){var self__ = this;
var _12665__$1 = this;return self__.meta12664;
});})(mults,ensure_mult))
;
cljs.core.async.t12663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12665,meta12664__$1){var self__ = this;
var _12665__$1 = this;return (new cljs.core.async.t12663(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12664__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12663 = ((function (mults,ensure_mult){
return (function __GT_t12663(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12664){return (new cljs.core.async.t12663(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12664));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12663(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7524__auto___13676 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13676,mults,ensure_mult,p){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13676,mults,ensure_mult,p){
return (function (state_12739){var state_val_12740 = (state_12739[1]);if((state_val_12740 === 1))
{var state_12739__$1 = state_12739;var statearr_12741_13677 = state_12739__$1;(statearr_12741_13677[2] = null);
(statearr_12741_13677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 2))
{var state_12739__$1 = state_12739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12739__$1,4,ch);
} else
{if((state_val_12740 === 3))
{var inst_12737 = (state_12739[2]);var state_12739__$1 = state_12739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12739__$1,inst_12737);
} else
{if((state_val_12740 === 4))
{var inst_12668 = (state_12739[7]);var inst_12668__$1 = (state_12739[2]);var inst_12669 = (inst_12668__$1 == null);var state_12739__$1 = (function (){var statearr_12742 = state_12739;(statearr_12742[7] = inst_12668__$1);
return statearr_12742;
})();if(cljs.core.truth_(inst_12669))
{var statearr_12743_13678 = state_12739__$1;(statearr_12743_13678[1] = 5);
} else
{var statearr_12744_13679 = state_12739__$1;(statearr_12744_13679[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 5))
{var inst_12675 = cljs.core.deref.call(null,mults);var inst_12676 = cljs.core.vals.call(null,inst_12675);var inst_12677 = cljs.core.seq.call(null,inst_12676);var inst_12678 = inst_12677;var inst_12679 = null;var inst_12680 = 0;var inst_12681 = 0;var state_12739__$1 = (function (){var statearr_12745 = state_12739;(statearr_12745[8] = inst_12680);
(statearr_12745[9] = inst_12681);
(statearr_12745[10] = inst_12678);
(statearr_12745[11] = inst_12679);
return statearr_12745;
})();var statearr_12746_13680 = state_12739__$1;(statearr_12746_13680[2] = null);
(statearr_12746_13680[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 6))
{var inst_12716 = (state_12739[12]);var inst_12718 = (state_12739[13]);var inst_12668 = (state_12739[7]);var inst_12716__$1 = topic_fn.call(null,inst_12668);var inst_12717 = cljs.core.deref.call(null,mults);var inst_12718__$1 = cljs.core.get.call(null,inst_12717,inst_12716__$1);var state_12739__$1 = (function (){var statearr_12747 = state_12739;(statearr_12747[12] = inst_12716__$1);
(statearr_12747[13] = inst_12718__$1);
return statearr_12747;
})();if(cljs.core.truth_(inst_12718__$1))
{var statearr_12748_13681 = state_12739__$1;(statearr_12748_13681[1] = 19);
} else
{var statearr_12749_13682 = state_12739__$1;(statearr_12749_13682[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 7))
{var inst_12735 = (state_12739[2]);var state_12739__$1 = state_12739;var statearr_12750_13683 = state_12739__$1;(statearr_12750_13683[2] = inst_12735);
(statearr_12750_13683[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 8))
{var inst_12680 = (state_12739[8]);var inst_12681 = (state_12739[9]);var inst_12683 = (inst_12681 < inst_12680);var inst_12684 = inst_12683;var state_12739__$1 = state_12739;if(cljs.core.truth_(inst_12684))
{var statearr_12754_13684 = state_12739__$1;(statearr_12754_13684[1] = 10);
} else
{var statearr_12755_13685 = state_12739__$1;(statearr_12755_13685[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 9))
{var inst_12714 = (state_12739[2]);var state_12739__$1 = state_12739;var statearr_12756_13686 = state_12739__$1;(statearr_12756_13686[2] = inst_12714);
(statearr_12756_13686[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 10))
{var inst_12680 = (state_12739[8]);var inst_12681 = (state_12739[9]);var inst_12678 = (state_12739[10]);var inst_12679 = (state_12739[11]);var inst_12686 = cljs.core._nth.call(null,inst_12679,inst_12681);var inst_12687 = cljs.core.async.muxch_STAR_.call(null,inst_12686);var inst_12688 = cljs.core.async.close_BANG_.call(null,inst_12687);var inst_12689 = (inst_12681 + 1);var tmp12751 = inst_12680;var tmp12752 = inst_12678;var tmp12753 = inst_12679;var inst_12678__$1 = tmp12752;var inst_12679__$1 = tmp12753;var inst_12680__$1 = tmp12751;var inst_12681__$1 = inst_12689;var state_12739__$1 = (function (){var statearr_12757 = state_12739;(statearr_12757[8] = inst_12680__$1);
(statearr_12757[9] = inst_12681__$1);
(statearr_12757[14] = inst_12688);
(statearr_12757[10] = inst_12678__$1);
(statearr_12757[11] = inst_12679__$1);
return statearr_12757;
})();var statearr_12758_13687 = state_12739__$1;(statearr_12758_13687[2] = null);
(statearr_12758_13687[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 11))
{var inst_12692 = (state_12739[15]);var inst_12678 = (state_12739[10]);var inst_12692__$1 = cljs.core.seq.call(null,inst_12678);var state_12739__$1 = (function (){var statearr_12759 = state_12739;(statearr_12759[15] = inst_12692__$1);
return statearr_12759;
})();if(inst_12692__$1)
{var statearr_12760_13688 = state_12739__$1;(statearr_12760_13688[1] = 13);
} else
{var statearr_12761_13689 = state_12739__$1;(statearr_12761_13689[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 12))
{var inst_12712 = (state_12739[2]);var state_12739__$1 = state_12739;var statearr_12762_13690 = state_12739__$1;(statearr_12762_13690[2] = inst_12712);
(statearr_12762_13690[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 13))
{var inst_12692 = (state_12739[15]);var inst_12694 = cljs.core.chunked_seq_QMARK_.call(null,inst_12692);var state_12739__$1 = state_12739;if(inst_12694)
{var statearr_12763_13691 = state_12739__$1;(statearr_12763_13691[1] = 16);
} else
{var statearr_12764_13692 = state_12739__$1;(statearr_12764_13692[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 14))
{var state_12739__$1 = state_12739;var statearr_12765_13693 = state_12739__$1;(statearr_12765_13693[2] = null);
(statearr_12765_13693[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 15))
{var inst_12710 = (state_12739[2]);var state_12739__$1 = state_12739;var statearr_12766_13694 = state_12739__$1;(statearr_12766_13694[2] = inst_12710);
(statearr_12766_13694[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 16))
{var inst_12692 = (state_12739[15]);var inst_12696 = cljs.core.chunk_first.call(null,inst_12692);var inst_12697 = cljs.core.chunk_rest.call(null,inst_12692);var inst_12698 = cljs.core.count.call(null,inst_12696);var inst_12678 = inst_12697;var inst_12679 = inst_12696;var inst_12680 = inst_12698;var inst_12681 = 0;var state_12739__$1 = (function (){var statearr_12767 = state_12739;(statearr_12767[8] = inst_12680);
(statearr_12767[9] = inst_12681);
(statearr_12767[10] = inst_12678);
(statearr_12767[11] = inst_12679);
return statearr_12767;
})();var statearr_12768_13695 = state_12739__$1;(statearr_12768_13695[2] = null);
(statearr_12768_13695[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 17))
{var inst_12692 = (state_12739[15]);var inst_12701 = cljs.core.first.call(null,inst_12692);var inst_12702 = cljs.core.async.muxch_STAR_.call(null,inst_12701);var inst_12703 = cljs.core.async.close_BANG_.call(null,inst_12702);var inst_12704 = cljs.core.next.call(null,inst_12692);var inst_12678 = inst_12704;var inst_12679 = null;var inst_12680 = 0;var inst_12681 = 0;var state_12739__$1 = (function (){var statearr_12769 = state_12739;(statearr_12769[8] = inst_12680);
(statearr_12769[9] = inst_12681);
(statearr_12769[16] = inst_12703);
(statearr_12769[10] = inst_12678);
(statearr_12769[11] = inst_12679);
return statearr_12769;
})();var statearr_12770_13696 = state_12739__$1;(statearr_12770_13696[2] = null);
(statearr_12770_13696[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 18))
{var inst_12707 = (state_12739[2]);var state_12739__$1 = state_12739;var statearr_12771_13697 = state_12739__$1;(statearr_12771_13697[2] = inst_12707);
(statearr_12771_13697[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 19))
{var state_12739__$1 = state_12739;var statearr_12772_13698 = state_12739__$1;(statearr_12772_13698[2] = null);
(statearr_12772_13698[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 20))
{var state_12739__$1 = state_12739;var statearr_12773_13699 = state_12739__$1;(statearr_12773_13699[2] = null);
(statearr_12773_13699[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 21))
{var inst_12732 = (state_12739[2]);var state_12739__$1 = (function (){var statearr_12774 = state_12739;(statearr_12774[17] = inst_12732);
return statearr_12774;
})();var statearr_12775_13700 = state_12739__$1;(statearr_12775_13700[2] = null);
(statearr_12775_13700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 22))
{var inst_12729 = (state_12739[2]);var state_12739__$1 = state_12739;var statearr_12776_13701 = state_12739__$1;(statearr_12776_13701[2] = inst_12729);
(statearr_12776_13701[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 23))
{var inst_12716 = (state_12739[12]);var inst_12720 = (state_12739[2]);var inst_12721 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12716);var state_12739__$1 = (function (){var statearr_12777 = state_12739;(statearr_12777[18] = inst_12720);
return statearr_12777;
})();var statearr_12778_13702 = state_12739__$1;(statearr_12778_13702[2] = inst_12721);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12739__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12740 === 24))
{var inst_12718 = (state_12739[13]);var inst_12668 = (state_12739[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12739,23,Object,null,22);var inst_12725 = cljs.core.async.muxch_STAR_.call(null,inst_12718);var state_12739__$1 = state_12739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12739__$1,25,inst_12725,inst_12668);
} else
{if((state_val_12740 === 25))
{var inst_12727 = (state_12739[2]);var state_12739__$1 = state_12739;var statearr_12779_13703 = state_12739__$1;(statearr_12779_13703[2] = inst_12727);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12739__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13676,mults,ensure_mult,p))
;return ((function (switch__7454__auto__,c__7524__auto___13676,mults,ensure_mult,p){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12783[0] = state_machine__7455__auto__);
(statearr_12783[1] = 1);
return statearr_12783;
});
var state_machine__7455__auto____1 = (function (state_12739){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12739);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12784){if((e12784 instanceof Object))
{var ex__7458__auto__ = e12784;var statearr_12785_13704 = state_12739;(statearr_12785_13704[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12739);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13705 = state_12739;
state_12739 = G__13705;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12739){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13676,mults,ensure_mult,p))
})();var state__7526__auto__ = (function (){var statearr_12786 = f__7525__auto__.call(null);(statearr_12786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13676);
return statearr_12786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13676,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7524__auto___13706 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13706,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13706,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12893){var state_val_12894 = (state_12893[1]);if((state_val_12894 === 1))
{var state_12893__$1 = state_12893;var statearr_12895_13707 = state_12893__$1;(statearr_12895_13707[2] = null);
(statearr_12895_13707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 2))
{var inst_12856 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12857 = 0;var state_12893__$1 = (function (){var statearr_12896 = state_12893;(statearr_12896[7] = inst_12856);
(statearr_12896[8] = inst_12857);
return statearr_12896;
})();var statearr_12897_13708 = state_12893__$1;(statearr_12897_13708[2] = null);
(statearr_12897_13708[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 3))
{var inst_12891 = (state_12893[2]);var state_12893__$1 = state_12893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12893__$1,inst_12891);
} else
{if((state_val_12894 === 4))
{var inst_12857 = (state_12893[8]);var inst_12859 = (inst_12857 < cnt);var state_12893__$1 = state_12893;if(cljs.core.truth_(inst_12859))
{var statearr_12898_13709 = state_12893__$1;(statearr_12898_13709[1] = 6);
} else
{var statearr_12899_13710 = state_12893__$1;(statearr_12899_13710[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 5))
{var inst_12877 = (state_12893[2]);var state_12893__$1 = (function (){var statearr_12900 = state_12893;(statearr_12900[9] = inst_12877);
return statearr_12900;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12893__$1,12,dchan);
} else
{if((state_val_12894 === 6))
{var state_12893__$1 = state_12893;var statearr_12901_13711 = state_12893__$1;(statearr_12901_13711[2] = null);
(statearr_12901_13711[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 7))
{var state_12893__$1 = state_12893;var statearr_12902_13712 = state_12893__$1;(statearr_12902_13712[2] = null);
(statearr_12902_13712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 8))
{var inst_12875 = (state_12893[2]);var state_12893__$1 = state_12893;var statearr_12903_13713 = state_12893__$1;(statearr_12903_13713[2] = inst_12875);
(statearr_12903_13713[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 9))
{var inst_12857 = (state_12893[8]);var inst_12870 = (state_12893[2]);var inst_12871 = (inst_12857 + 1);var inst_12857__$1 = inst_12871;var state_12893__$1 = (function (){var statearr_12904 = state_12893;(statearr_12904[10] = inst_12870);
(statearr_12904[8] = inst_12857__$1);
return statearr_12904;
})();var statearr_12905_13714 = state_12893__$1;(statearr_12905_13714[2] = null);
(statearr_12905_13714[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 10))
{var inst_12861 = (state_12893[2]);var inst_12862 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12893__$1 = (function (){var statearr_12906 = state_12893;(statearr_12906[11] = inst_12861);
return statearr_12906;
})();var statearr_12907_13715 = state_12893__$1;(statearr_12907_13715[2] = inst_12862);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12893__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 11))
{var inst_12857 = (state_12893[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12893,10,Object,null,9);var inst_12866 = chs__$1.call(null,inst_12857);var inst_12867 = done.call(null,inst_12857);var inst_12868 = cljs.core.async.take_BANG_.call(null,inst_12866,inst_12867);var state_12893__$1 = state_12893;var statearr_12908_13716 = state_12893__$1;(statearr_12908_13716[2] = inst_12868);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12893__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 12))
{var inst_12879 = (state_12893[12]);var inst_12879__$1 = (state_12893[2]);var inst_12880 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12879__$1);var state_12893__$1 = (function (){var statearr_12909 = state_12893;(statearr_12909[12] = inst_12879__$1);
return statearr_12909;
})();if(cljs.core.truth_(inst_12880))
{var statearr_12910_13717 = state_12893__$1;(statearr_12910_13717[1] = 13);
} else
{var statearr_12911_13718 = state_12893__$1;(statearr_12911_13718[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 13))
{var inst_12882 = cljs.core.async.close_BANG_.call(null,out);var state_12893__$1 = state_12893;var statearr_12912_13719 = state_12893__$1;(statearr_12912_13719[2] = inst_12882);
(statearr_12912_13719[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 14))
{var inst_12879 = (state_12893[12]);var inst_12884 = cljs.core.apply.call(null,f,inst_12879);var state_12893__$1 = state_12893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12893__$1,16,out,inst_12884);
} else
{if((state_val_12894 === 15))
{var inst_12889 = (state_12893[2]);var state_12893__$1 = state_12893;var statearr_12913_13720 = state_12893__$1;(statearr_12913_13720[2] = inst_12889);
(statearr_12913_13720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12894 === 16))
{var inst_12886 = (state_12893[2]);var state_12893__$1 = (function (){var statearr_12914 = state_12893;(statearr_12914[13] = inst_12886);
return statearr_12914;
})();var statearr_12915_13721 = state_12893__$1;(statearr_12915_13721[2] = null);
(statearr_12915_13721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13706,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7454__auto__,c__7524__auto___13706,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12919[0] = state_machine__7455__auto__);
(statearr_12919[1] = 1);
return statearr_12919;
});
var state_machine__7455__auto____1 = (function (state_12893){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12893);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12920){if((e12920 instanceof Object))
{var ex__7458__auto__ = e12920;var statearr_12921_13722 = state_12893;(statearr_12921_13722[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12893);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13723 = state_12893;
state_12893 = G__13723;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12893){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13706,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7526__auto__ = (function (){var statearr_12922 = f__7525__auto__.call(null);(statearr_12922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13706);
return statearr_12922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13706,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___13724 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13724,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13724,out){
return (function (state_13006){var state_val_13007 = (state_13006[1]);if((state_val_13007 === 1))
{var inst_12977 = cljs.core.vec.call(null,chs);var inst_12978 = inst_12977;var state_13006__$1 = (function (){var statearr_13008 = state_13006;(statearr_13008[7] = inst_12978);
return statearr_13008;
})();var statearr_13009_13725 = state_13006__$1;(statearr_13009_13725[2] = null);
(statearr_13009_13725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13007 === 2))
{var inst_12978 = (state_13006[7]);var inst_12980 = cljs.core.count.call(null,inst_12978);var inst_12981 = (inst_12980 > 0);var state_13006__$1 = state_13006;if(cljs.core.truth_(inst_12981))
{var statearr_13010_13726 = state_13006__$1;(statearr_13010_13726[1] = 4);
} else
{var statearr_13011_13727 = state_13006__$1;(statearr_13011_13727[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13007 === 3))
{var inst_13004 = (state_13006[2]);var state_13006__$1 = state_13006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13006__$1,inst_13004);
} else
{if((state_val_13007 === 4))
{var inst_12978 = (state_13006[7]);var state_13006__$1 = state_13006;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13006__$1,7,inst_12978);
} else
{if((state_val_13007 === 5))
{var inst_13000 = cljs.core.async.close_BANG_.call(null,out);var state_13006__$1 = state_13006;var statearr_13012_13728 = state_13006__$1;(statearr_13012_13728[2] = inst_13000);
(statearr_13012_13728[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13007 === 6))
{var inst_13002 = (state_13006[2]);var state_13006__$1 = state_13006;var statearr_13013_13729 = state_13006__$1;(statearr_13013_13729[2] = inst_13002);
(statearr_13013_13729[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13007 === 7))
{var inst_12985 = (state_13006[8]);var inst_12986 = (state_13006[9]);var inst_12985__$1 = (state_13006[2]);var inst_12986__$1 = cljs.core.nth.call(null,inst_12985__$1,0,null);var inst_12987 = cljs.core.nth.call(null,inst_12985__$1,1,null);var inst_12988 = (inst_12986__$1 == null);var state_13006__$1 = (function (){var statearr_13014 = state_13006;(statearr_13014[8] = inst_12985__$1);
(statearr_13014[9] = inst_12986__$1);
(statearr_13014[10] = inst_12987);
return statearr_13014;
})();if(cljs.core.truth_(inst_12988))
{var statearr_13015_13730 = state_13006__$1;(statearr_13015_13730[1] = 8);
} else
{var statearr_13016_13731 = state_13006__$1;(statearr_13016_13731[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13007 === 8))
{var inst_12985 = (state_13006[8]);var inst_12986 = (state_13006[9]);var inst_12987 = (state_13006[10]);var inst_12978 = (state_13006[7]);var inst_12990 = (function (){var c = inst_12987;var v = inst_12986;var vec__12983 = inst_12985;var cs = inst_12978;return ((function (c,v,vec__12983,cs,inst_12985,inst_12986,inst_12987,inst_12978,state_val_13007,c__7524__auto___13724,out){
return (function (p1__12923_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12923_SHARP_);
});
;})(c,v,vec__12983,cs,inst_12985,inst_12986,inst_12987,inst_12978,state_val_13007,c__7524__auto___13724,out))
})();var inst_12991 = cljs.core.filterv.call(null,inst_12990,inst_12978);var inst_12978__$1 = inst_12991;var state_13006__$1 = (function (){var statearr_13017 = state_13006;(statearr_13017[7] = inst_12978__$1);
return statearr_13017;
})();var statearr_13018_13732 = state_13006__$1;(statearr_13018_13732[2] = null);
(statearr_13018_13732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13007 === 9))
{var inst_12986 = (state_13006[9]);var state_13006__$1 = state_13006;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13006__$1,11,out,inst_12986);
} else
{if((state_val_13007 === 10))
{var inst_12998 = (state_13006[2]);var state_13006__$1 = state_13006;var statearr_13020_13733 = state_13006__$1;(statearr_13020_13733[2] = inst_12998);
(statearr_13020_13733[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13007 === 11))
{var inst_12978 = (state_13006[7]);var inst_12995 = (state_13006[2]);var tmp13019 = inst_12978;var inst_12978__$1 = tmp13019;var state_13006__$1 = (function (){var statearr_13021 = state_13006;(statearr_13021[11] = inst_12995);
(statearr_13021[7] = inst_12978__$1);
return statearr_13021;
})();var statearr_13022_13734 = state_13006__$1;(statearr_13022_13734[2] = null);
(statearr_13022_13734[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13724,out))
;return ((function (switch__7454__auto__,c__7524__auto___13724,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_13026 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13026[0] = state_machine__7455__auto__);
(statearr_13026[1] = 1);
return statearr_13026;
});
var state_machine__7455__auto____1 = (function (state_13006){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_13006);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e13027){if((e13027 instanceof Object))
{var ex__7458__auto__ = e13027;var statearr_13028_13735 = state_13006;(statearr_13028_13735[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13006);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13736 = state_13006;
state_13006 = G__13736;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_13006){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_13006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13724,out))
})();var state__7526__auto__ = (function (){var statearr_13029 = f__7525__auto__.call(null);(statearr_13029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13724);
return statearr_13029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13724,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___13737 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13737,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13737,out){
return (function (state_13099){var state_val_13100 = (state_13099[1]);if((state_val_13100 === 1))
{var inst_13076 = 0;var state_13099__$1 = (function (){var statearr_13101 = state_13099;(statearr_13101[7] = inst_13076);
return statearr_13101;
})();var statearr_13102_13738 = state_13099__$1;(statearr_13102_13738[2] = null);
(statearr_13102_13738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13100 === 2))
{var inst_13076 = (state_13099[7]);var inst_13078 = (inst_13076 < n);var state_13099__$1 = state_13099;if(cljs.core.truth_(inst_13078))
{var statearr_13103_13739 = state_13099__$1;(statearr_13103_13739[1] = 4);
} else
{var statearr_13104_13740 = state_13099__$1;(statearr_13104_13740[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13100 === 3))
{var inst_13096 = (state_13099[2]);var inst_13097 = cljs.core.async.close_BANG_.call(null,out);var state_13099__$1 = (function (){var statearr_13105 = state_13099;(statearr_13105[8] = inst_13096);
return statearr_13105;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13099__$1,inst_13097);
} else
{if((state_val_13100 === 4))
{var state_13099__$1 = state_13099;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13099__$1,7,ch);
} else
{if((state_val_13100 === 5))
{var state_13099__$1 = state_13099;var statearr_13106_13741 = state_13099__$1;(statearr_13106_13741[2] = null);
(statearr_13106_13741[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13100 === 6))
{var inst_13094 = (state_13099[2]);var state_13099__$1 = state_13099;var statearr_13107_13742 = state_13099__$1;(statearr_13107_13742[2] = inst_13094);
(statearr_13107_13742[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13100 === 7))
{var inst_13081 = (state_13099[9]);var inst_13081__$1 = (state_13099[2]);var inst_13082 = (inst_13081__$1 == null);var inst_13083 = cljs.core.not.call(null,inst_13082);var state_13099__$1 = (function (){var statearr_13108 = state_13099;(statearr_13108[9] = inst_13081__$1);
return statearr_13108;
})();if(inst_13083)
{var statearr_13109_13743 = state_13099__$1;(statearr_13109_13743[1] = 8);
} else
{var statearr_13110_13744 = state_13099__$1;(statearr_13110_13744[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13100 === 8))
{var inst_13081 = (state_13099[9]);var state_13099__$1 = state_13099;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13099__$1,11,out,inst_13081);
} else
{if((state_val_13100 === 9))
{var state_13099__$1 = state_13099;var statearr_13111_13745 = state_13099__$1;(statearr_13111_13745[2] = null);
(statearr_13111_13745[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13100 === 10))
{var inst_13091 = (state_13099[2]);var state_13099__$1 = state_13099;var statearr_13112_13746 = state_13099__$1;(statearr_13112_13746[2] = inst_13091);
(statearr_13112_13746[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13100 === 11))
{var inst_13076 = (state_13099[7]);var inst_13086 = (state_13099[2]);var inst_13087 = (inst_13076 + 1);var inst_13076__$1 = inst_13087;var state_13099__$1 = (function (){var statearr_13113 = state_13099;(statearr_13113[7] = inst_13076__$1);
(statearr_13113[10] = inst_13086);
return statearr_13113;
})();var statearr_13114_13747 = state_13099__$1;(statearr_13114_13747[2] = null);
(statearr_13114_13747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13737,out))
;return ((function (switch__7454__auto__,c__7524__auto___13737,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_13118 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13118[0] = state_machine__7455__auto__);
(statearr_13118[1] = 1);
return statearr_13118;
});
var state_machine__7455__auto____1 = (function (state_13099){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_13099);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e13119){if((e13119 instanceof Object))
{var ex__7458__auto__ = e13119;var statearr_13120_13748 = state_13099;(statearr_13120_13748[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13099);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13119;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13749 = state_13099;
state_13099 = G__13749;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_13099){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_13099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13737,out))
})();var state__7526__auto__ = (function (){var statearr_13121 = f__7525__auto__.call(null);(statearr_13121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13737);
return statearr_13121;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13737,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___13750 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13750,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13750,out){
return (function (state_13193){var state_val_13194 = (state_13193[1]);if((state_val_13194 === 1))
{var inst_13170 = null;var state_13193__$1 = (function (){var statearr_13195 = state_13193;(statearr_13195[7] = inst_13170);
return statearr_13195;
})();var statearr_13196_13751 = state_13193__$1;(statearr_13196_13751[2] = null);
(statearr_13196_13751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 2))
{var state_13193__$1 = state_13193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13193__$1,4,ch);
} else
{if((state_val_13194 === 3))
{var inst_13190 = (state_13193[2]);var inst_13191 = cljs.core.async.close_BANG_.call(null,out);var state_13193__$1 = (function (){var statearr_13197 = state_13193;(statearr_13197[8] = inst_13190);
return statearr_13197;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13193__$1,inst_13191);
} else
{if((state_val_13194 === 4))
{var inst_13173 = (state_13193[9]);var inst_13173__$1 = (state_13193[2]);var inst_13174 = (inst_13173__$1 == null);var inst_13175 = cljs.core.not.call(null,inst_13174);var state_13193__$1 = (function (){var statearr_13198 = state_13193;(statearr_13198[9] = inst_13173__$1);
return statearr_13198;
})();if(inst_13175)
{var statearr_13199_13752 = state_13193__$1;(statearr_13199_13752[1] = 5);
} else
{var statearr_13200_13753 = state_13193__$1;(statearr_13200_13753[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 5))
{var inst_13170 = (state_13193[7]);var inst_13173 = (state_13193[9]);var inst_13177 = cljs.core._EQ_.call(null,inst_13173,inst_13170);var state_13193__$1 = state_13193;if(inst_13177)
{var statearr_13201_13754 = state_13193__$1;(statearr_13201_13754[1] = 8);
} else
{var statearr_13202_13755 = state_13193__$1;(statearr_13202_13755[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 6))
{var state_13193__$1 = state_13193;var statearr_13204_13756 = state_13193__$1;(statearr_13204_13756[2] = null);
(statearr_13204_13756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 7))
{var inst_13188 = (state_13193[2]);var state_13193__$1 = state_13193;var statearr_13205_13757 = state_13193__$1;(statearr_13205_13757[2] = inst_13188);
(statearr_13205_13757[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 8))
{var inst_13170 = (state_13193[7]);var tmp13203 = inst_13170;var inst_13170__$1 = tmp13203;var state_13193__$1 = (function (){var statearr_13206 = state_13193;(statearr_13206[7] = inst_13170__$1);
return statearr_13206;
})();var statearr_13207_13758 = state_13193__$1;(statearr_13207_13758[2] = null);
(statearr_13207_13758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 9))
{var inst_13173 = (state_13193[9]);var state_13193__$1 = state_13193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13193__$1,11,out,inst_13173);
} else
{if((state_val_13194 === 10))
{var inst_13185 = (state_13193[2]);var state_13193__$1 = state_13193;var statearr_13208_13759 = state_13193__$1;(statearr_13208_13759[2] = inst_13185);
(statearr_13208_13759[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13194 === 11))
{var inst_13173 = (state_13193[9]);var inst_13182 = (state_13193[2]);var inst_13170 = inst_13173;var state_13193__$1 = (function (){var statearr_13209 = state_13193;(statearr_13209[7] = inst_13170);
(statearr_13209[10] = inst_13182);
return statearr_13209;
})();var statearr_13210_13760 = state_13193__$1;(statearr_13210_13760[2] = null);
(statearr_13210_13760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13750,out))
;return ((function (switch__7454__auto__,c__7524__auto___13750,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_13214 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13214[0] = state_machine__7455__auto__);
(statearr_13214[1] = 1);
return statearr_13214;
});
var state_machine__7455__auto____1 = (function (state_13193){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_13193);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e13215){if((e13215 instanceof Object))
{var ex__7458__auto__ = e13215;var statearr_13216_13761 = state_13193;(statearr_13216_13761[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13762 = state_13193;
state_13193 = G__13762;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_13193){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_13193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13750,out))
})();var state__7526__auto__ = (function (){var statearr_13217 = f__7525__auto__.call(null);(statearr_13217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13750);
return statearr_13217;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13750,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___13763 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13763,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13763,out){
return (function (state_13322){var state_val_13323 = (state_13322[1]);if((state_val_13323 === 1))
{var inst_13285 = (new Array(n));var inst_13286 = inst_13285;var inst_13287 = 0;var state_13322__$1 = (function (){var statearr_13324 = state_13322;(statearr_13324[7] = inst_13287);
(statearr_13324[8] = inst_13286);
return statearr_13324;
})();var statearr_13325_13764 = state_13322__$1;(statearr_13325_13764[2] = null);
(statearr_13325_13764[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 2))
{var state_13322__$1 = state_13322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13322__$1,4,ch);
} else
{if((state_val_13323 === 3))
{var inst_13320 = (state_13322[2]);var state_13322__$1 = state_13322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13322__$1,inst_13320);
} else
{if((state_val_13323 === 4))
{var inst_13290 = (state_13322[9]);var inst_13290__$1 = (state_13322[2]);var inst_13291 = (inst_13290__$1 == null);var inst_13292 = cljs.core.not.call(null,inst_13291);var state_13322__$1 = (function (){var statearr_13326 = state_13322;(statearr_13326[9] = inst_13290__$1);
return statearr_13326;
})();if(inst_13292)
{var statearr_13327_13765 = state_13322__$1;(statearr_13327_13765[1] = 5);
} else
{var statearr_13328_13766 = state_13322__$1;(statearr_13328_13766[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 5))
{var inst_13287 = (state_13322[7]);var inst_13290 = (state_13322[9]);var inst_13286 = (state_13322[8]);var inst_13295 = (state_13322[10]);var inst_13294 = (inst_13286[inst_13287] = inst_13290);var inst_13295__$1 = (inst_13287 + 1);var inst_13296 = (inst_13295__$1 < n);var state_13322__$1 = (function (){var statearr_13329 = state_13322;(statearr_13329[10] = inst_13295__$1);
(statearr_13329[11] = inst_13294);
return statearr_13329;
})();if(cljs.core.truth_(inst_13296))
{var statearr_13330_13767 = state_13322__$1;(statearr_13330_13767[1] = 8);
} else
{var statearr_13331_13768 = state_13322__$1;(statearr_13331_13768[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 6))
{var inst_13287 = (state_13322[7]);var inst_13308 = (inst_13287 > 0);var state_13322__$1 = state_13322;if(cljs.core.truth_(inst_13308))
{var statearr_13333_13769 = state_13322__$1;(statearr_13333_13769[1] = 12);
} else
{var statearr_13334_13770 = state_13322__$1;(statearr_13334_13770[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 7))
{var inst_13318 = (state_13322[2]);var state_13322__$1 = state_13322;var statearr_13335_13771 = state_13322__$1;(statearr_13335_13771[2] = inst_13318);
(statearr_13335_13771[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 8))
{var inst_13286 = (state_13322[8]);var inst_13295 = (state_13322[10]);var tmp13332 = inst_13286;var inst_13286__$1 = tmp13332;var inst_13287 = inst_13295;var state_13322__$1 = (function (){var statearr_13336 = state_13322;(statearr_13336[7] = inst_13287);
(statearr_13336[8] = inst_13286__$1);
return statearr_13336;
})();var statearr_13337_13772 = state_13322__$1;(statearr_13337_13772[2] = null);
(statearr_13337_13772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 9))
{var inst_13286 = (state_13322[8]);var inst_13300 = cljs.core.vec.call(null,inst_13286);var state_13322__$1 = state_13322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13322__$1,11,out,inst_13300);
} else
{if((state_val_13323 === 10))
{var inst_13306 = (state_13322[2]);var state_13322__$1 = state_13322;var statearr_13338_13773 = state_13322__$1;(statearr_13338_13773[2] = inst_13306);
(statearr_13338_13773[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 11))
{var inst_13302 = (state_13322[2]);var inst_13303 = (new Array(n));var inst_13286 = inst_13303;var inst_13287 = 0;var state_13322__$1 = (function (){var statearr_13339 = state_13322;(statearr_13339[7] = inst_13287);
(statearr_13339[8] = inst_13286);
(statearr_13339[12] = inst_13302);
return statearr_13339;
})();var statearr_13340_13774 = state_13322__$1;(statearr_13340_13774[2] = null);
(statearr_13340_13774[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 12))
{var inst_13286 = (state_13322[8]);var inst_13310 = cljs.core.vec.call(null,inst_13286);var state_13322__$1 = state_13322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13322__$1,15,out,inst_13310);
} else
{if((state_val_13323 === 13))
{var state_13322__$1 = state_13322;var statearr_13341_13775 = state_13322__$1;(statearr_13341_13775[2] = null);
(statearr_13341_13775[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 14))
{var inst_13315 = (state_13322[2]);var inst_13316 = cljs.core.async.close_BANG_.call(null,out);var state_13322__$1 = (function (){var statearr_13342 = state_13322;(statearr_13342[13] = inst_13315);
return statearr_13342;
})();var statearr_13343_13776 = state_13322__$1;(statearr_13343_13776[2] = inst_13316);
(statearr_13343_13776[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 15))
{var inst_13312 = (state_13322[2]);var state_13322__$1 = state_13322;var statearr_13344_13777 = state_13322__$1;(statearr_13344_13777[2] = inst_13312);
(statearr_13344_13777[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13763,out))
;return ((function (switch__7454__auto__,c__7524__auto___13763,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_13348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13348[0] = state_machine__7455__auto__);
(statearr_13348[1] = 1);
return statearr_13348;
});
var state_machine__7455__auto____1 = (function (state_13322){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_13322);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e13349){if((e13349 instanceof Object))
{var ex__7458__auto__ = e13349;var statearr_13350_13778 = state_13322;(statearr_13350_13778[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13779 = state_13322;
state_13322 = G__13779;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_13322){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_13322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13763,out))
})();var state__7526__auto__ = (function (){var statearr_13351 = f__7525__auto__.call(null);(statearr_13351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13763);
return statearr_13351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13763,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___13780 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___13780,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___13780,out){
return (function (state_13464){var state_val_13465 = (state_13464[1]);if((state_val_13465 === 1))
{var inst_13423 = [];var inst_13424 = inst_13423;var inst_13425 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13464__$1 = (function (){var statearr_13466 = state_13464;(statearr_13466[7] = inst_13425);
(statearr_13466[8] = inst_13424);
return statearr_13466;
})();var statearr_13467_13781 = state_13464__$1;(statearr_13467_13781[2] = null);
(statearr_13467_13781[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13465 === 2))
{var state_13464__$1 = state_13464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13464__$1,4,ch);
} else
{if((state_val_13465 === 3))
{var inst_13462 = (state_13464[2]);var state_13464__$1 = state_13464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13464__$1,inst_13462);
} else
{if((state_val_13465 === 4))
{var inst_13428 = (state_13464[9]);var inst_13428__$1 = (state_13464[2]);var inst_13429 = (inst_13428__$1 == null);var inst_13430 = cljs.core.not.call(null,inst_13429);var state_13464__$1 = (function (){var statearr_13468 = state_13464;(statearr_13468[9] = inst_13428__$1);
return statearr_13468;
})();if(inst_13430)
{var statearr_13469_13782 = state_13464__$1;(statearr_13469_13782[1] = 5);
} else
{var statearr_13470_13783 = state_13464__$1;(statearr_13470_13783[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13465 === 5))
{var inst_13425 = (state_13464[7]);var inst_13432 = (state_13464[10]);var inst_13428 = (state_13464[9]);var inst_13432__$1 = f.call(null,inst_13428);var inst_13433 = cljs.core._EQ_.call(null,inst_13432__$1,inst_13425);var inst_13434 = cljs.core.keyword_identical_QMARK_.call(null,inst_13425,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13435 = (inst_13433) || (inst_13434);var state_13464__$1 = (function (){var statearr_13471 = state_13464;(statearr_13471[10] = inst_13432__$1);
return statearr_13471;
})();if(cljs.core.truth_(inst_13435))
{var statearr_13472_13784 = state_13464__$1;(statearr_13472_13784[1] = 8);
} else
{var statearr_13473_13785 = state_13464__$1;(statearr_13473_13785[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13465 === 6))
{var inst_13424 = (state_13464[8]);var inst_13449 = inst_13424.length;var inst_13450 = (inst_13449 > 0);var state_13464__$1 = state_13464;if(cljs.core.truth_(inst_13450))
{var statearr_13475_13786 = state_13464__$1;(statearr_13475_13786[1] = 12);
} else
{var statearr_13476_13787 = state_13464__$1;(statearr_13476_13787[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13465 === 7))
{var inst_13460 = (state_13464[2]);var state_13464__$1 = state_13464;var statearr_13477_13788 = state_13464__$1;(statearr_13477_13788[2] = inst_13460);
(statearr_13477_13788[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13465 === 8))
{var inst_13432 = (state_13464[10]);var inst_13428 = (state_13464[9]);var inst_13424 = (state_13464[8]);var inst_13437 = inst_13424.push(inst_13428);var tmp13474 = inst_13424;var inst_13424__$1 = tmp13474;var inst_13425 = inst_13432;var state_13464__$1 = (function (){var statearr_13478 = state_13464;(statearr_13478[11] = inst_13437);
(statearr_13478[7] = inst_13425);
(statearr_13478[8] = inst_13424__$1);
return statearr_13478;
})();var statearr_13479_13789 = state_13464__$1;(statearr_13479_13789[2] = null);
(statearr_13479_13789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13465 === 9))
{var inst_13424 = (state_13464[8]);var inst_13440 = cljs.core.vec.call(null,inst_13424);var state_13464__$1 = state_13464;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13464__$1,11,out,inst_13440);
} else
{if((state_val_13465 === 10))
{var inst_13447 = (state_13464[2]);var state_13464__$1 = state_13464;var statearr_13480_13790 = state_13464__$1;(statearr_13480_13790[2] = inst_13447);
(statearr_13480_13790[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13465 === 11))
{var inst_13432 = (state_13464[10]);var inst_13428 = (state_13464[9]);var inst_13442 = (state_13464[2]);var inst_13443 = [];var inst_13444 = inst_13443.push(inst_13428);var inst_13424 = inst_13443;var inst_13425 = inst_13432;var state_13464__$1 = (function (){var statearr_13481 = state_13464;(statearr_13481[12] = inst_13444);
(statearr_13481[13] = inst_13442);
(statearr_13481[7] = inst_13425);
(statearr_13481[8] = inst_13424);
return statearr_13481;
})();var statearr_13482_13791 = state_13464__$1;(statearr_13482_13791[2] = null);
(statearr_13482_13791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13465 === 12))
{var inst_13424 = (state_13464[8]);var inst_13452 = cljs.core.vec.call(null,inst_13424);var state_13464__$1 = state_13464;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13464__$1,15,out,inst_13452);
} else
{if((state_val_13465 === 13))
{var state_13464__$1 = state_13464;var statearr_13483_13792 = state_13464__$1;(statearr_13483_13792[2] = null);
(statearr_13483_13792[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13465 === 14))
{var inst_13457 = (state_13464[2]);var inst_13458 = cljs.core.async.close_BANG_.call(null,out);var state_13464__$1 = (function (){var statearr_13484 = state_13464;(statearr_13484[14] = inst_13457);
return statearr_13484;
})();var statearr_13485_13793 = state_13464__$1;(statearr_13485_13793[2] = inst_13458);
(statearr_13485_13793[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13465 === 15))
{var inst_13454 = (state_13464[2]);var state_13464__$1 = state_13464;var statearr_13486_13794 = state_13464__$1;(statearr_13486_13794[2] = inst_13454);
(statearr_13486_13794[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto___13780,out))
;return ((function (switch__7454__auto__,c__7524__auto___13780,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_13490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13490[0] = state_machine__7455__auto__);
(statearr_13490[1] = 1);
return statearr_13490;
});
var state_machine__7455__auto____1 = (function (state_13464){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_13464);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e13491){if((e13491 instanceof Object))
{var ex__7458__auto__ = e13491;var statearr_13492_13795 = state_13464;(statearr_13492_13795[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13464);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13491;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13796 = state_13464;
state_13464 = G__13796;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_13464){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_13464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___13780,out))
})();var state__7526__auto__ = (function (){var statearr_13493 = f__7525__auto__.call(null);(statearr_13493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___13780);
return statearr_13493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___13780,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.autocompleter.core')) {
goog.provide('lt.plugins.autocompleter.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('lt.util.js');
goog.require('lt.util.js');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__21931_SHARP_,p2__21930_SHARP_){return p2__21930_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__21933_SHARP_,p2__21932_SHARP_){return p2__21932_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (p1__21935_SHARP_,p2__21934_SHARP_){return p2__21934_SHARP_.pick.call(null);
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (p1__21937_SHARP_,p2__21936_SHARP_){return p2__21936_SHARP_.pick.call(null);
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__21939_SHARP_,p2__21938_SHARP_){return p2__21938_SHARP_.close.call(null);
})], null)], null);
lt.plugins.autocompleter.core.distinct_completions = (function distinct_completions(hints){var seen = {};return cljs.core.filter.call(null,((function (seen){
return (function (hint){if((seen[new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(hint)]) === true)
{return false;
} else
{return (seen[new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(hint)] = true);
}
});})(seen))
,hints);
});
/**
* Prepare found hints for display through CM showHint
*/
lt.plugins.autocompleter.core.process_hint_results = (function process_hint_results(hints){if(cljs.core.seq.call(null,hints))
{return cljs.core.clj__GT_js.call(null,(function (p1__21941_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__21941_SHARP_));return cljs.core.assoc.call(null,p1__21941_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"text","text",1017460895),lt.plugins.autocompleter.core.distinct_completions.call(null,cljs.core.filter.call(null,(function (p1__21940_SHARP_){return (new cljs.core.Keyword(null,"completion","completion",4767668046).cljs$core$IFn$_invoke$arity$1(p1__21940_SHARP_).length < 1000);
}),hints))))])));
} else
{return null;
}
});
/**
* Listen for hint results from all given channels
* Will raise a behavior to show results when all channels have delivered a result
* or alternatively the specified timeout has elapsed
*/
lt.plugins.autocompleter.core.listen_for_hint_results = (function listen_for_hint_results(ed,channels){var t = cljs.core.async.timeout.call(null,1000);var c__7524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto__,t){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto__,t){
return (function (state_22024){var state_val_22025 = (state_22024[1]);if((state_val_22025 === 1))
{var inst_21994 = cljs.core.conj.call(null,channels,t);var inst_21995 = cljs.core.PersistentVector.EMPTY;var inst_21996 = inst_21994;var state_22024__$1 = (function (){var statearr_22026 = state_22024;(statearr_22026[7] = inst_21995);
(statearr_22026[8] = inst_21996);
return statearr_22026;
})();var statearr_22027_22047 = state_22024__$1;(statearr_22027_22047[2] = null);
(statearr_22027_22047[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22025 === 2))
{var inst_21996 = (state_22024[8]);var inst_21998 = cljs.core.count.call(null,inst_21996);var inst_21999 = cljs.core._EQ_.call(null,1,inst_21998);var state_22024__$1 = state_22024;if(inst_21999)
{var statearr_22028_22048 = state_22024__$1;(statearr_22028_22048[1] = 4);
} else
{var statearr_22029_22049 = state_22024__$1;(statearr_22029_22049[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22025 === 3))
{var inst_22022 = (state_22024[2]);var state_22024__$1 = state_22024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22024__$1,inst_22022);
} else
{if((state_val_22025 === 4))
{var inst_21995 = (state_22024[7]);var inst_22001 = lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"show-hint-results","show-hint-results",3654108914),inst_21995);var state_22024__$1 = state_22024;var statearr_22030_22050 = state_22024__$1;(statearr_22030_22050[2] = inst_22001);
(statearr_22030_22050[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22025 === 5))
{var inst_21996 = (state_22024[8]);var state_22024__$1 = state_22024;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22024__$1,7,inst_21996);
} else
{if((state_val_22025 === 6))
{var inst_22020 = (state_22024[2]);var state_22024__$1 = state_22024;var statearr_22031_22051 = state_22024__$1;(statearr_22031_22051[2] = inst_22020);
(statearr_22031_22051[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22025 === 7))
{var inst_22007 = (state_22024[9]);var inst_22005 = (state_22024[2]);var inst_22006 = cljs.core.nth.call(null,inst_22005,0,null);var inst_22007__$1 = cljs.core.nth.call(null,inst_22005,1,null);var inst_22008 = (inst_22007__$1 === t);var state_22024__$1 = (function (){var statearr_22032 = state_22024;(statearr_22032[10] = inst_22006);
(statearr_22032[9] = inst_22007__$1);
return statearr_22032;
})();if(cljs.core.truth_(inst_22008))
{var statearr_22033_22052 = state_22024__$1;(statearr_22033_22052[1] = 8);
} else
{var statearr_22034_22053 = state_22024__$1;(statearr_22034_22053[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22025 === 8))
{var inst_21995 = (state_22024[7]);var inst_22010 = lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"show-hint-results","show-hint-results",3654108914),inst_21995);var state_22024__$1 = state_22024;var statearr_22035_22054 = state_22024__$1;(statearr_22035_22054[2] = inst_22010);
(statearr_22035_22054[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22025 === 9))
{var inst_21995 = (state_22024[7]);var inst_22006 = (state_22024[10]);var inst_21996 = (state_22024[8]);var inst_22007 = (state_22024[9]);var inst_22012 = cljs.core.into.call(null,inst_21995,inst_22006);var inst_22013 = [inst_22007];var inst_22014 = cljs.core.PersistentHashSet.fromArray.call(null,inst_22013,true);var inst_22015 = cljs.core.remove.call(null,inst_22014,inst_21996);var inst_21995__$1 = inst_22012;var inst_21996__$1 = inst_22015;var state_22024__$1 = (function (){var statearr_22036 = state_22024;(statearr_22036[7] = inst_21995__$1);
(statearr_22036[8] = inst_21996__$1);
return statearr_22036;
})();var statearr_22037_22055 = state_22024__$1;(statearr_22037_22055[2] = null);
(statearr_22037_22055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22025 === 10))
{var inst_22018 = (state_22024[2]);var state_22024__$1 = state_22024;var statearr_22038_22056 = state_22024__$1;(statearr_22038_22056[2] = inst_22018);
(statearr_22038_22056[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7524__auto__,t))
;return ((function (switch__7454__auto__,c__7524__auto__,t){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_22042 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22042[0] = state_machine__7455__auto__);
(statearr_22042[1] = 1);
return statearr_22042;
});
var state_machine__7455__auto____1 = (function (state_22024){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_22024);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e22043){if((e22043 instanceof Object))
{var ex__7458__auto__ = e22043;var statearr_22044_22057 = state_22024;(statearr_22044_22057[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22024);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22043;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22058 = state_22024;
state_22024 = G__22058;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_22024){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_22024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__,t))
})();var state__7526__auto__ = (function (){var statearr_22045 = f__7525__auto__.call(null);(statearr_22045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_22045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto__,t))
);
return c__7524__auto__;
});
lt.plugins.autocompleter.core.pos_obj__GT_pos = (function pos_obj__GT_pos(p){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),p.ch,new cljs.core.Keyword(null,"line","line",1017226086),p.line], null);
});
lt.plugins.autocompleter.core.from_cm_hints = (function from_cm_hints(res_obj){if(cljs.core.truth_(res_obj))
{var res = cljs.core.js__GT_clj.call(null,res_obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var from = lt.plugins.autocompleter.core.pos_obj__GT_pos.call(null,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(res));var to = lt.plugins.autocompleter.core.pos_obj__GT_pos.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(res));return cljs.core.map.call(null,((function (res,from,to){
return (function (p1__22046_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"completion","completion",4767668046),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[p1__22046_SHARP_,p1__22046_SHARP_,from,to]);
});})(res,from,to))
,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(res));
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
lt.plugins.autocompleter.core.get_token = (function get_token(ed){return lt.objs.editor.__GT_token.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));
});
lt.plugins.autocompleter.core.should_hint_QMARK_ = (function should_hint_QMARK_(ed){return cljs.core.seq.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.autocompleter.core.get_token.call(null,ed)).trim());
});
lt.plugins.autocompleter.core.completion_active_QMARK_ = (function completion_active_QMARK_(ed){return lt.objs.editor.__GT_cm_ed.call(null,ed).state.completionActive;
});
lt.plugins.autocompleter.core.maybe_close_hinter = (function maybe_close_hinter(ed){var temp__4092__auto__ = lt.plugins.autocompleter.core.completion_active_QMARK_.call(null,ed);if(cljs.core.truth_(temp__4092__auto__))
{var state = temp__4092__auto__;return state.close();
} else
{return null;
}
});
lt.plugins.autocompleter.core.__BEH__javascript_hints = (function __BEH__javascript_hints(ed,channels){if(lt.plugins.autocompleter.core.should_hint_QMARK_.call(null,ed))
{var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,lt.plugins.autocompleter.core.from_cm_hints.call(null,CodeMirror.hint.javascript(lt.objs.editor.__GT_cm_ed.call(null,ed))));
return cljs.core.conj.call(null,channels,ch);
} else
{return channels;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","javascript-hints","lt.plugins.autocompleter.core/javascript-hints",1809003230),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__javascript_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: JavaScript Hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),null], null), null));
lt.plugins.autocompleter.core.__BEH__anyword_hints = (function __BEH__anyword_hints(ed,channels){if(lt.plugins.autocompleter.core.should_hint_QMARK_.call(null,ed))
{var ch = cljs.core.async.chan.call(null);cljs.core.async.put_BANG_.call(null,ch,lt.plugins.autocompleter.core.from_cm_hints.call(null,CodeMirror.hint.anyword(lt.objs.editor.__GT_cm_ed.call(null,ed))));
return cljs.core.conj.call(null,channels,ch);
} else
{return channels;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","anyword-hints","lt.plugins.autocompleter.core/anyword-hints",1169070757),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__anyword_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Anyword Hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),null], null), null));
lt.plugins.autocompleter.core.__BEH__show_hint_results = (function __BEH__show_hint_results(ed,hints){lt.plugins.autocompleter.core.maybe_close_hinter.call(null,ed);
var temp__4092__auto__ = lt.plugins.autocompleter.core.process_hint_results.call(null,hints);if(cljs.core.truth_(temp__4092__auto__))
{var processed_hints = temp__4092__auto__;return CodeMirror.showHint(lt.objs.editor.__GT_cm_ed.call(null,ed),((function (processed_hints,temp__4092__auto__){
return (function (_,cb){return cb.call(null,processed_hints);
});})(processed_hints,temp__4092__auto__))
,cljs.core.clj__GT_js.call(null,lt.plugins.autocompleter.core.default_options));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","show-hint-results","lt.plugins.autocompleter.core/show-hint-results",3157800906),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__show_hint_results,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Show the autocompleter popup with the given hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-hint-results","show-hint-results",3654108914),null], null), null));
lt.plugins.autocompleter.core.on_line_change = (function on_line_change(line,ch){var ed = lt.objs.editor.pool.last_active.call(null);if(cljs.core.not.call(null,lt.plugins.autocompleter.core.completion_active_QMARK_.call(null,ed)))
{return CodeMirror.off(line,"change",on_line_change);
} else
{if(cljs.core._EQ_.call(null,"+delete",ch.origin))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"start-hinting","start-hinting",3115741442));
} else
{return null;
}
}
});
lt.plugins.autocompleter.core.__BEH__start_hinting = (function __BEH__start_hinting(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var line_handle = lt.objs.editor.line_handle.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos));var chs = lt.object.raise_reduce.call(null,ed,new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),cljs.core.PersistentVector.EMPTY);CodeMirror.off(line_handle,"change",lt.plugins.autocompleter.core.on_line_change);
if(cljs.core.seq.call(null,chs))
{lt.plugins.autocompleter.core.listen_for_hint_results.call(null,ed,chs);
return CodeMirror.on(line_handle,"change",lt.plugins.autocompleter.core.on_line_change);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","start-hinting","lt.plugins.autocompleter.core/start-hinting",2636185018),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__start_hinting,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Start hinting",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-hinting","start-hinting",3115741442),null], null), null));
lt.plugins.autocompleter.core.__BEH__auto_show_on_input = (function __BEH__auto_show_on_input(ed,_,ch){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"start-hinting","start-hinting",3115741442));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","auto-show-on-input","lt.plugins.autocompleter.core/auto-show-on-input",3736321980),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__auto_show_on_input,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Show on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",1114262332),null], null), null));
}

//# sourceMappingURL=autocompleter_compiled.js.map