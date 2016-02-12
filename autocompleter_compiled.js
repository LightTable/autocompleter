if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj12877 = {};return obj12877;
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
cljs.core.async.impl.protocols.WritePort = (function (){var obj12879 = {};return obj12879;
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
cljs.core.async.impl.protocols.Channel = (function (){var obj12881 = {};return obj12881;
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
cljs.core.async.impl.protocols.Handler = (function (){var obj12883 = {};return obj12883;
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
cljs.core.async.impl.protocols.Buffer = (function (){var obj12885 = {};return obj12885;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj12887 = {};return obj12887;
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
var G__12842 = (cnt + 1);
cnt = G__12842;
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
{var v_12843 = this$.pop();if(keep_QMARK_.call(null,v_12843))
{this$.unshift(v_12843);
} else
{}
{
var G__12844 = (x + 1);
x = G__12844;
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
var count_12873 = 0;while(true){
var m_12874 = cljs.core.async.impl.dispatch.tasks.pop();if((m_12874 == null))
{} else
{m_12874.call(null);
if((count_12873 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__12875 = (count_12873 + 1);
count_12873 = G__12875;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t12848 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t12848 = (function (val,box,meta12849){
this.val = val;
this.box = box;
this.meta12849 = meta12849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t12848.cljs$lang$type = true;
cljs.core.async.impl.channels.t12848.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t12848";
cljs.core.async.impl.channels.t12848.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.channels/t12848");
});
cljs.core.async.impl.channels.t12848.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t12848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12850){var self__ = this;
var _12850__$1 = this;return self__.meta12849;
});
cljs.core.async.impl.channels.t12848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12850,meta12849__$1){var self__ = this;
var _12850__$1 = this;return (new cljs.core.async.impl.channels.t12848(self__.val,self__.box,meta12849__$1));
});
cljs.core.async.impl.channels.__GT_t12848 = (function __GT_t12848(val__$1,box__$1,meta12849){return (new cljs.core.async.impl.channels.t12848(val__$1,box__$1,meta12849));
});
}
return (new cljs.core.async.impl.channels.t12848(val,box,null));
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
var taker_12861 = self__.takes.pop();if((taker_12861 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_12861))
{var take_cb_12862 = cljs.core.async.impl.protocols.commit.call(null,taker_12861);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_12862,taker_12861,this$__$1){
return (function (){return take_cb_12862.call(null,null);
});})(take_cb_12862,taker_12861,this$__$1))
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
var G__12908 = (level + 1);
level = G__12908;
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_12909 = 0;while(true){
if((i_12909 < arr.length))
{(arr[i_12909] = null);
{
var G__12910 = (i_12909 + 1);
i_12909 = G__12910;
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
var G__12911 = x_SINGLEQUOTE_;
x__$1 = G__12911;
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
var G__12912 = x__$1;
var G__12913 = k;
var G__12914 = (level - 1);
var G__12915 = update;
x = G__12912;
k = G__12913;
level = G__12914;
update = G__12915;
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
{var i_12916 = (self__.level + 1);while(true){
if((i_12916 <= (new_level + 1)))
{(update[i_12916] = self__.header);
{
var G__12917 = (i_12916 + 1);
i_12916 = G__12917;
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
{var i_12918 = 0;while(true){
if((i_12918 <= self__.level))
{var links_12919 = (update[i_12918]).forward;if(((links_12919[i_12918]) === x__$1))
{(links_12919[i_12918] = (x__$1.forward[i_12918]));
{
var G__12920 = (i_12918 + 1);
i_12918 = G__12920;
continue;
}
} else
{{
var G__12921 = (i_12918 + 1);
i_12918 = G__12921;
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
var G__12922 = x_SINGLEQUOTE_;
x__$1 = G__12922;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__12923 = nx;
var G__12924 = (level__$1 - 1);
x = G__12923;
level__$1 = G__12924;
continue;
}
} else
{{
var G__12925 = x;
var G__12926 = (level__$1 - 1);
x = G__12925;
level__$1 = G__12926;
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
var G__12927 = x_SINGLEQUOTE_;
x__$1 = G__12927;
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
var G__12928 = nx;
var G__12929 = (level__$1 - 1);
x = G__12928;
level__$1 = G__12929;
continue;
}
} else
{{
var G__12930 = x;
var G__12931 = (level__$1 - 1);
x = G__12930;
level__$1 = G__12931;
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t12772 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t12772 = (function (f,fn_handler,meta12773){
this.f = f;
this.fn_handler = fn_handler;
this.meta12773 = meta12773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t12772.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t12772.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t12772";
cljs.core.async.impl.ioc_helpers.t12772.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.ioc-helpers/t12772");
});
cljs.core.async.impl.ioc_helpers.t12772.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t12772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t12772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t12772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12774){var self__ = this;
var _12774__$1 = this;return self__.meta12773;
});
cljs.core.async.impl.ioc_helpers.t12772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12774,meta12773__$1){var self__ = this;
var _12774__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t12772(self__.f,self__.fn_handler,meta12773__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t12772 = (function __GT_t12772(f__$1,fn_handler__$1,meta12773){return (new cljs.core.async.impl.ioc_helpers.t12772(f__$1,fn_handler__$1,meta12773));
});
}
return (new cljs.core.async.impl.ioc_helpers.t12772(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e12776){if((e12776 instanceof Object))
{var ex = e12776;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12776;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_12779_12822 = state;(statearr_12779_12822[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_12779_12822[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_12780_12823 = state;(statearr_12780_12823[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_12780_12823[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_12783_12824 = state;(statearr_12783_12824[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_12783_12824[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_12784_12825 = state;(statearr_12784_12825[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_12784_12825[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12785){var map__12790 = p__12785;var map__12790__$1 = ((cljs.core.seq_QMARK_.call(null,map__12790))?cljs.core.apply.call(null,cljs.core.hash_map,map__12790):map__12790);var opts = map__12790__$1;var statearr_12791_12826 = state;(statearr_12791_12826[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__12790,map__12790__$1,opts){
return (function (val){var statearr_12792_12827 = state;(statearr_12792_12827[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12790,map__12790__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_12793_12828 = state;(statearr_12793_12828[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12785 = null;if (arguments.length > 3) {
  p__12785 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12785);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12829){
var state = cljs.core.first(arglist__12829);
arglist__12829 = cljs.core.next(arglist__12829);
var cont_block = cljs.core.first(arglist__12829);
arglist__12829 = cljs.core.next(arglist__12829);
var ports = cljs.core.first(arglist__12829);
var p__12785 = cljs.core.rest(arglist__12829);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12785);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12795,else__5473__auto__){var self__ = this;
var this__5472__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12795,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12795,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12795,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12795,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12795,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12795,else__5473__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12794){var self__ = this;
var this__5477__auto____$1 = this;var pred__12797 = cljs.core.keyword_identical_QMARK_;var expr__12798 = k__5478__auto__;if(cljs.core.truth_(pred__12797.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__12798)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__12794,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12797.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__12798)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__12794,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12797.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__12798)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__12794,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12797.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__12798)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__12794,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12797.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__12798)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__12794,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12794),null));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12794){var self__ = this;
var this__5469__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__12794,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__12796){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__12796),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__12796),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__12796),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__12796),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__12796),null,cljs.core.dissoc.call(null,G__12796,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_12801 = state;(statearr_12801[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_12801;
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
{var statearr_12807 = state;(statearr_12807[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_12807[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_12807[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_12807[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_12807;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4872__auto__;
}
})()))
{var statearr_12808_12830 = state;(statearr_12808_12830[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__12831 = state;
state = G__12831;
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
{var statearr_12809 = state;(statearr_12809[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_12809[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_12809;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core.not.call(null,exception);if(and__4872__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4872__auto__;
}
})()))
{var statearr_12810 = state;(statearr_12810[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_12810[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_12810;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_12811 = state;(statearr_12811[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_12811[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_12811;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10208 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10208 = (function (f,fn_handler,meta10209){
this.f = f;
this.fn_handler = fn_handler;
this.meta10209 = meta10209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10208.cljs$lang$type = true;
cljs.core.async.t10208.cljs$lang$ctorStr = "cljs.core.async/t10208";
cljs.core.async.t10208.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10208");
});
cljs.core.async.t10208.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10210){var self__ = this;
var _10210__$1 = this;return self__.meta10209;
});
cljs.core.async.t10208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10210,meta10209__$1){var self__ = this;
var _10210__$1 = this;return (new cljs.core.async.t10208(self__.f,self__.fn_handler,meta10209__$1));
});
cljs.core.async.__GT_t10208 = (function __GT_t10208(f__$1,fn_handler__$1,meta10209){return (new cljs.core.async.t10208(f__$1,fn_handler__$1,meta10209));
});
}
return (new cljs.core.async.t10208(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10212 = buff;if(G__10212)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__10212.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10212.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10212);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10212);
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
{var val_12476 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12476);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12476,ret){
return (function (){return fn1.call(null,val_12476);
});})(val_12476,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5732__auto___12477 = n;var x_12478 = 0;while(true){
if((x_12478 < n__5732__auto___12477))
{(a[x_12478] = 0);
{
var G__12479 = (x_12478 + 1);
x_12478 = G__12479;
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
var G__12480 = (i + 1);
i = G__12480;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10216 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10216 = (function (flag,alt_flag,meta10217){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10217 = meta10217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10216.cljs$lang$type = true;
cljs.core.async.t10216.cljs$lang$ctorStr = "cljs.core.async/t10216";
cljs.core.async.t10216.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10216");
});})(flag))
;
cljs.core.async.t10216.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10218){var self__ = this;
var _10218__$1 = this;return self__.meta10217;
});})(flag))
;
cljs.core.async.t10216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10218,meta10217__$1){var self__ = this;
var _10218__$1 = this;return (new cljs.core.async.t10216(self__.flag,self__.alt_flag,meta10217__$1));
});})(flag))
;
cljs.core.async.__GT_t10216 = ((function (flag){
return (function __GT_t10216(flag__$1,alt_flag__$1,meta10217){return (new cljs.core.async.t10216(flag__$1,alt_flag__$1,meta10217));
});})(flag))
;
}
return (new cljs.core.async.t10216(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10222 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10222 = (function (cb,flag,alt_handler,meta10223){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10223 = meta10223;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10222.cljs$lang$type = true;
cljs.core.async.t10222.cljs$lang$ctorStr = "cljs.core.async/t10222";
cljs.core.async.t10222.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10222");
});
cljs.core.async.t10222.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10224){var self__ = this;
var _10224__$1 = this;return self__.meta10223;
});
cljs.core.async.t10222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10224,meta10223__$1){var self__ = this;
var _10224__$1 = this;return (new cljs.core.async.t10222(self__.cb,self__.flag,self__.alt_handler,meta10223__$1));
});
cljs.core.async.__GT_t10222 = (function __GT_t10222(cb__$1,flag__$1,alt_handler__$1,meta10223){return (new cljs.core.async.t10222(cb__$1,flag__$1,alt_handler__$1,meta10223));
});
}
return (new cljs.core.async.t10222(cb,flag,alt_handler,null));
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
return (function (p1__10225_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10225_SHARP_,port], null));
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
var G__12481 = (i + 1);
i = G__12481;
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
var alts_BANG___delegate = function (ports,p__10226){var map__10228 = p__10226;var map__10228__$1 = ((cljs.core.seq_QMARK_.call(null,map__10228))?cljs.core.apply.call(null,cljs.core.hash_map,map__10228):map__10228);var opts = map__10228__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10226 = null;if (arguments.length > 1) {
  p__10226 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10226);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12482){
var ports = cljs.core.first(arglist__12482);
var p__10226 = cljs.core.rest(arglist__12482);
return alts_BANG___delegate(ports,p__10226);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10236 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10236 = (function (ch,f,map_LT_,meta10237){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10237 = meta10237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10236.cljs$lang$type = true;
cljs.core.async.t10236.cljs$lang$ctorStr = "cljs.core.async/t10236";
cljs.core.async.t10236.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10236");
});
cljs.core.async.t10236.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10236.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10236.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10236.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10239 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10239 = (function (fn1,_,meta10237,ch,f,map_LT_,meta10240){
this.fn1 = fn1;
this._ = _;
this.meta10237 = meta10237;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10240 = meta10240;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10239.cljs$lang$type = true;
cljs.core.async.t10239.cljs$lang$ctorStr = "cljs.core.async/t10239";
cljs.core.async.t10239.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10239");
});})(___$1))
;
cljs.core.async.t10239.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10239.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10229_SHARP_){return f1.call(null,(((p1__10229_SHARP_ == null))?null:self__.f.call(null,p1__10229_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10241){var self__ = this;
var _10241__$1 = this;return self__.meta10240;
});})(___$1))
;
cljs.core.async.t10239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10241,meta10240__$1){var self__ = this;
var _10241__$1 = this;return (new cljs.core.async.t10239(self__.fn1,self__._,self__.meta10237,self__.ch,self__.f,self__.map_LT_,meta10240__$1));
});})(___$1))
;
cljs.core.async.__GT_t10239 = ((function (___$1){
return (function __GT_t10239(fn1__$1,___$2,meta10237__$1,ch__$2,f__$2,map_LT___$2,meta10240){return (new cljs.core.async.t10239(fn1__$1,___$2,meta10237__$1,ch__$2,f__$2,map_LT___$2,meta10240));
});})(___$1))
;
}
return (new cljs.core.async.t10239(fn1,___$1,self__.meta10237,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10236.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10236.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10238){var self__ = this;
var _10238__$1 = this;return self__.meta10237;
});
cljs.core.async.t10236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10238,meta10237__$1){var self__ = this;
var _10238__$1 = this;return (new cljs.core.async.t10236(self__.ch,self__.f,self__.map_LT_,meta10237__$1));
});
cljs.core.async.__GT_t10236 = (function __GT_t10236(ch__$1,f__$1,map_LT___$1,meta10237){return (new cljs.core.async.t10236(ch__$1,f__$1,map_LT___$1,meta10237));
});
}
return (new cljs.core.async.t10236(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10245 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10245 = (function (ch,f,map_GT_,meta10246){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10246 = meta10246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10245.cljs$lang$type = true;
cljs.core.async.t10245.cljs$lang$ctorStr = "cljs.core.async/t10245";
cljs.core.async.t10245.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10245");
});
cljs.core.async.t10245.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10245.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10245.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10245.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10245.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10245.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10247){var self__ = this;
var _10247__$1 = this;return self__.meta10246;
});
cljs.core.async.t10245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10247,meta10246__$1){var self__ = this;
var _10247__$1 = this;return (new cljs.core.async.t10245(self__.ch,self__.f,self__.map_GT_,meta10246__$1));
});
cljs.core.async.__GT_t10245 = (function __GT_t10245(ch__$1,f__$1,map_GT___$1,meta10246){return (new cljs.core.async.t10245(ch__$1,f__$1,map_GT___$1,meta10246));
});
}
return (new cljs.core.async.t10245(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10251 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10251 = (function (ch,p,filter_GT_,meta10252){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10252 = meta10252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10251.cljs$lang$type = true;
cljs.core.async.t10251.cljs$lang$ctorStr = "cljs.core.async/t10251";
cljs.core.async.t10251.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10251");
});
cljs.core.async.t10251.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10251.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10251.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10253){var self__ = this;
var _10253__$1 = this;return self__.meta10252;
});
cljs.core.async.t10251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10253,meta10252__$1){var self__ = this;
var _10253__$1 = this;return (new cljs.core.async.t10251(self__.ch,self__.p,self__.filter_GT_,meta10252__$1));
});
cljs.core.async.__GT_t10251 = (function __GT_t10251(ch__$1,p__$1,filter_GT___$1,meta10252){return (new cljs.core.async.t10251(ch__$1,p__$1,filter_GT___$1,meta10252));
});
}
return (new cljs.core.async.t10251(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12483 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12483,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12483,out){
return (function (state_10315){var state_val_10316 = (state_10315[1]);if((state_val_10316 === 1))
{var state_10315__$1 = state_10315;var statearr_10317_12484 = state_10315__$1;(statearr_10317_12484[2] = null);
(statearr_10317_12484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10316 === 2))
{var state_10315__$1 = state_10315;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10315__$1,4,ch);
} else
{if((state_val_10316 === 3))
{var inst_10313 = (state_10315[2]);var state_10315__$1 = state_10315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10315__$1,inst_10313);
} else
{if((state_val_10316 === 4))
{var inst_10297 = (state_10315[7]);var inst_10297__$1 = (state_10315[2]);var inst_10298 = (inst_10297__$1 == null);var state_10315__$1 = (function (){var statearr_10318 = state_10315;(statearr_10318[7] = inst_10297__$1);
return statearr_10318;
})();if(cljs.core.truth_(inst_10298))
{var statearr_10319_12485 = state_10315__$1;(statearr_10319_12485[1] = 5);
} else
{var statearr_10320_12486 = state_10315__$1;(statearr_10320_12486[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10316 === 5))
{var inst_10300 = cljs.core.async.close_BANG_.call(null,out);var state_10315__$1 = state_10315;var statearr_10321_12487 = state_10315__$1;(statearr_10321_12487[2] = inst_10300);
(statearr_10321_12487[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10316 === 6))
{var inst_10297 = (state_10315[7]);var inst_10302 = p.call(null,inst_10297);var state_10315__$1 = state_10315;if(cljs.core.truth_(inst_10302))
{var statearr_10322_12488 = state_10315__$1;(statearr_10322_12488[1] = 8);
} else
{var statearr_10323_12489 = state_10315__$1;(statearr_10323_12489[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10316 === 7))
{var inst_10311 = (state_10315[2]);var state_10315__$1 = state_10315;var statearr_10324_12490 = state_10315__$1;(statearr_10324_12490[2] = inst_10311);
(statearr_10324_12490[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10316 === 8))
{var inst_10297 = (state_10315[7]);var state_10315__$1 = state_10315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10315__$1,11,out,inst_10297);
} else
{if((state_val_10316 === 9))
{var state_10315__$1 = state_10315;var statearr_10325_12491 = state_10315__$1;(statearr_10325_12491[2] = null);
(statearr_10325_12491[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10316 === 10))
{var inst_10308 = (state_10315[2]);var state_10315__$1 = (function (){var statearr_10326 = state_10315;(statearr_10326[8] = inst_10308);
return statearr_10326;
})();var statearr_10327_12492 = state_10315__$1;(statearr_10327_12492[2] = null);
(statearr_10327_12492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10316 === 11))
{var inst_10305 = (state_10315[2]);var state_10315__$1 = state_10315;var statearr_10328_12493 = state_10315__$1;(statearr_10328_12493[2] = inst_10305);
(statearr_10328_12493[1] = 10);
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
});})(c__7524__auto___12483,out))
;return ((function (switch__7454__auto__,c__7524__auto___12483,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_10332 = [null,null,null,null,null,null,null,null,null];(statearr_10332[0] = state_machine__7455__auto__);
(statearr_10332[1] = 1);
return statearr_10332;
});
var state_machine__7455__auto____1 = (function (state_10315){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10315);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10333){if((e10333 instanceof Object))
{var ex__7458__auto__ = e10333;var statearr_10334_12494 = state_10315;(statearr_10334_12494[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10315);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10333;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12495 = state_10315;
state_10315 = G__12495;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10315){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12483,out))
})();var state__7526__auto__ = (function (){var statearr_10335 = f__7525__auto__.call(null);(statearr_10335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12483);
return statearr_10335;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12483,out))
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
return (function (state_10487){var state_val_10488 = (state_10487[1]);if((state_val_10488 === 1))
{var state_10487__$1 = state_10487;var statearr_10489_12496 = state_10487__$1;(statearr_10489_12496[2] = null);
(statearr_10489_12496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 2))
{var state_10487__$1 = state_10487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10487__$1,4,in$);
} else
{if((state_val_10488 === 3))
{var inst_10485 = (state_10487[2]);var state_10487__$1 = state_10487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10487__$1,inst_10485);
} else
{if((state_val_10488 === 4))
{var inst_10433 = (state_10487[7]);var inst_10433__$1 = (state_10487[2]);var inst_10434 = (inst_10433__$1 == null);var state_10487__$1 = (function (){var statearr_10490 = state_10487;(statearr_10490[7] = inst_10433__$1);
return statearr_10490;
})();if(cljs.core.truth_(inst_10434))
{var statearr_10491_12497 = state_10487__$1;(statearr_10491_12497[1] = 5);
} else
{var statearr_10492_12498 = state_10487__$1;(statearr_10492_12498[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 5))
{var inst_10436 = cljs.core.async.close_BANG_.call(null,out);var state_10487__$1 = state_10487;var statearr_10493_12499 = state_10487__$1;(statearr_10493_12499[2] = inst_10436);
(statearr_10493_12499[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 6))
{var inst_10433 = (state_10487[7]);var inst_10438 = f.call(null,inst_10433);var inst_10443 = cljs.core.seq.call(null,inst_10438);var inst_10444 = inst_10443;var inst_10445 = null;var inst_10446 = 0;var inst_10447 = 0;var state_10487__$1 = (function (){var statearr_10494 = state_10487;(statearr_10494[8] = inst_10444);
(statearr_10494[9] = inst_10445);
(statearr_10494[10] = inst_10446);
(statearr_10494[11] = inst_10447);
return statearr_10494;
})();var statearr_10495_12500 = state_10487__$1;(statearr_10495_12500[2] = null);
(statearr_10495_12500[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 7))
{var inst_10483 = (state_10487[2]);var state_10487__$1 = state_10487;var statearr_10496_12501 = state_10487__$1;(statearr_10496_12501[2] = inst_10483);
(statearr_10496_12501[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 8))
{var inst_10446 = (state_10487[10]);var inst_10447 = (state_10487[11]);var inst_10449 = (inst_10447 < inst_10446);var inst_10450 = inst_10449;var state_10487__$1 = state_10487;if(cljs.core.truth_(inst_10450))
{var statearr_10497_12502 = state_10487__$1;(statearr_10497_12502[1] = 10);
} else
{var statearr_10498_12503 = state_10487__$1;(statearr_10498_12503[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 9))
{var inst_10480 = (state_10487[2]);var state_10487__$1 = (function (){var statearr_10499 = state_10487;(statearr_10499[12] = inst_10480);
return statearr_10499;
})();var statearr_10500_12504 = state_10487__$1;(statearr_10500_12504[2] = null);
(statearr_10500_12504[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 10))
{var inst_10445 = (state_10487[9]);var inst_10447 = (state_10487[11]);var inst_10452 = cljs.core._nth.call(null,inst_10445,inst_10447);var state_10487__$1 = state_10487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10487__$1,13,out,inst_10452);
} else
{if((state_val_10488 === 11))
{var inst_10444 = (state_10487[8]);var inst_10458 = (state_10487[13]);var inst_10458__$1 = cljs.core.seq.call(null,inst_10444);var state_10487__$1 = (function (){var statearr_10504 = state_10487;(statearr_10504[13] = inst_10458__$1);
return statearr_10504;
})();if(inst_10458__$1)
{var statearr_10505_12505 = state_10487__$1;(statearr_10505_12505[1] = 14);
} else
{var statearr_10506_12506 = state_10487__$1;(statearr_10506_12506[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 12))
{var inst_10478 = (state_10487[2]);var state_10487__$1 = state_10487;var statearr_10507_12507 = state_10487__$1;(statearr_10507_12507[2] = inst_10478);
(statearr_10507_12507[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 13))
{var inst_10444 = (state_10487[8]);var inst_10445 = (state_10487[9]);var inst_10446 = (state_10487[10]);var inst_10447 = (state_10487[11]);var inst_10454 = (state_10487[2]);var inst_10455 = (inst_10447 + 1);var tmp10501 = inst_10444;var tmp10502 = inst_10445;var tmp10503 = inst_10446;var inst_10444__$1 = tmp10501;var inst_10445__$1 = tmp10502;var inst_10446__$1 = tmp10503;var inst_10447__$1 = inst_10455;var state_10487__$1 = (function (){var statearr_10508 = state_10487;(statearr_10508[8] = inst_10444__$1);
(statearr_10508[14] = inst_10454);
(statearr_10508[9] = inst_10445__$1);
(statearr_10508[10] = inst_10446__$1);
(statearr_10508[11] = inst_10447__$1);
return statearr_10508;
})();var statearr_10509_12508 = state_10487__$1;(statearr_10509_12508[2] = null);
(statearr_10509_12508[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 14))
{var inst_10458 = (state_10487[13]);var inst_10460 = cljs.core.chunked_seq_QMARK_.call(null,inst_10458);var state_10487__$1 = state_10487;if(inst_10460)
{var statearr_10510_12509 = state_10487__$1;(statearr_10510_12509[1] = 17);
} else
{var statearr_10511_12510 = state_10487__$1;(statearr_10511_12510[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 15))
{var state_10487__$1 = state_10487;var statearr_10512_12511 = state_10487__$1;(statearr_10512_12511[2] = null);
(statearr_10512_12511[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 16))
{var inst_10476 = (state_10487[2]);var state_10487__$1 = state_10487;var statearr_10513_12512 = state_10487__$1;(statearr_10513_12512[2] = inst_10476);
(statearr_10513_12512[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 17))
{var inst_10458 = (state_10487[13]);var inst_10462 = cljs.core.chunk_first.call(null,inst_10458);var inst_10463 = cljs.core.chunk_rest.call(null,inst_10458);var inst_10464 = cljs.core.count.call(null,inst_10462);var inst_10444 = inst_10463;var inst_10445 = inst_10462;var inst_10446 = inst_10464;var inst_10447 = 0;var state_10487__$1 = (function (){var statearr_10514 = state_10487;(statearr_10514[8] = inst_10444);
(statearr_10514[9] = inst_10445);
(statearr_10514[10] = inst_10446);
(statearr_10514[11] = inst_10447);
return statearr_10514;
})();var statearr_10515_12513 = state_10487__$1;(statearr_10515_12513[2] = null);
(statearr_10515_12513[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 18))
{var inst_10458 = (state_10487[13]);var inst_10467 = cljs.core.first.call(null,inst_10458);var state_10487__$1 = state_10487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10487__$1,20,out,inst_10467);
} else
{if((state_val_10488 === 19))
{var inst_10473 = (state_10487[2]);var state_10487__$1 = state_10487;var statearr_10516_12514 = state_10487__$1;(statearr_10516_12514[2] = inst_10473);
(statearr_10516_12514[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10488 === 20))
{var inst_10458 = (state_10487[13]);var inst_10469 = (state_10487[2]);var inst_10470 = cljs.core.next.call(null,inst_10458);var inst_10444 = inst_10470;var inst_10445 = null;var inst_10446 = 0;var inst_10447 = 0;var state_10487__$1 = (function (){var statearr_10517 = state_10487;(statearr_10517[8] = inst_10444);
(statearr_10517[9] = inst_10445);
(statearr_10517[10] = inst_10446);
(statearr_10517[11] = inst_10447);
(statearr_10517[15] = inst_10469);
return statearr_10517;
})();var statearr_10518_12515 = state_10487__$1;(statearr_10518_12515[2] = null);
(statearr_10518_12515[1] = 8);
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
var state_machine__7455__auto____0 = (function (){var statearr_10522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10522[0] = state_machine__7455__auto__);
(statearr_10522[1] = 1);
return statearr_10522;
});
var state_machine__7455__auto____1 = (function (state_10487){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10487);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10523){if((e10523 instanceof Object))
{var ex__7458__auto__ = e10523;var statearr_10524_12516 = state_10487;(statearr_10524_12516[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12517 = state_10487;
state_10487 = G__12517;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10487){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__))
})();var state__7526__auto__ = (function (){var statearr_10525 = f__7525__auto__.call(null);(statearr_10525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_10525;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__7524__auto___12518 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12518){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12518){
return (function (state_10585){var state_val_10586 = (state_10585[1]);if((state_val_10586 === 1))
{var state_10585__$1 = state_10585;var statearr_10587_12519 = state_10585__$1;(statearr_10587_12519[2] = null);
(statearr_10587_12519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10586 === 2))
{var state_10585__$1 = state_10585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10585__$1,4,from);
} else
{if((state_val_10586 === 3))
{var inst_10583 = (state_10585[2]);var state_10585__$1 = state_10585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10585__$1,inst_10583);
} else
{if((state_val_10586 === 4))
{var inst_10568 = (state_10585[7]);var inst_10568__$1 = (state_10585[2]);var inst_10569 = (inst_10568__$1 == null);var state_10585__$1 = (function (){var statearr_10588 = state_10585;(statearr_10588[7] = inst_10568__$1);
return statearr_10588;
})();if(cljs.core.truth_(inst_10569))
{var statearr_10589_12520 = state_10585__$1;(statearr_10589_12520[1] = 5);
} else
{var statearr_10590_12521 = state_10585__$1;(statearr_10590_12521[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10586 === 5))
{var state_10585__$1 = state_10585;if(cljs.core.truth_(close_QMARK_))
{var statearr_10591_12522 = state_10585__$1;(statearr_10591_12522[1] = 8);
} else
{var statearr_10592_12523 = state_10585__$1;(statearr_10592_12523[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10586 === 6))
{var inst_10568 = (state_10585[7]);var state_10585__$1 = state_10585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10585__$1,11,to,inst_10568);
} else
{if((state_val_10586 === 7))
{var inst_10581 = (state_10585[2]);var state_10585__$1 = state_10585;var statearr_10593_12524 = state_10585__$1;(statearr_10593_12524[2] = inst_10581);
(statearr_10593_12524[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10586 === 8))
{var inst_10572 = cljs.core.async.close_BANG_.call(null,to);var state_10585__$1 = state_10585;var statearr_10594_12525 = state_10585__$1;(statearr_10594_12525[2] = inst_10572);
(statearr_10594_12525[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10586 === 9))
{var state_10585__$1 = state_10585;var statearr_10595_12526 = state_10585__$1;(statearr_10595_12526[2] = null);
(statearr_10595_12526[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10586 === 10))
{var inst_10575 = (state_10585[2]);var state_10585__$1 = state_10585;var statearr_10596_12527 = state_10585__$1;(statearr_10596_12527[2] = inst_10575);
(statearr_10596_12527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10586 === 11))
{var inst_10578 = (state_10585[2]);var state_10585__$1 = (function (){var statearr_10597 = state_10585;(statearr_10597[8] = inst_10578);
return statearr_10597;
})();var statearr_10598_12528 = state_10585__$1;(statearr_10598_12528[2] = null);
(statearr_10598_12528[1] = 2);
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
});})(c__7524__auto___12518))
;return ((function (switch__7454__auto__,c__7524__auto___12518){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_10602 = [null,null,null,null,null,null,null,null,null];(statearr_10602[0] = state_machine__7455__auto__);
(statearr_10602[1] = 1);
return statearr_10602;
});
var state_machine__7455__auto____1 = (function (state_10585){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10585);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10603){if((e10603 instanceof Object))
{var ex__7458__auto__ = e10603;var statearr_10604_12529 = state_10585;(statearr_10604_12529[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10585);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12530 = state_10585;
state_10585 = G__12530;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10585){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12518))
})();var state__7526__auto__ = (function (){var statearr_10605 = f__7525__auto__.call(null);(statearr_10605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12518);
return statearr_10605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12518))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7524__auto___12531 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12531,tc,fc){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12531,tc,fc){
return (function (state_10670){var state_val_10671 = (state_10670[1]);if((state_val_10671 === 1))
{var state_10670__$1 = state_10670;var statearr_10672_12532 = state_10670__$1;(statearr_10672_12532[2] = null);
(statearr_10672_12532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 2))
{var state_10670__$1 = state_10670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10670__$1,4,ch);
} else
{if((state_val_10671 === 3))
{var inst_10668 = (state_10670[2]);var state_10670__$1 = state_10670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10670__$1,inst_10668);
} else
{if((state_val_10671 === 4))
{var inst_10651 = (state_10670[7]);var inst_10651__$1 = (state_10670[2]);var inst_10652 = (inst_10651__$1 == null);var state_10670__$1 = (function (){var statearr_10673 = state_10670;(statearr_10673[7] = inst_10651__$1);
return statearr_10673;
})();if(cljs.core.truth_(inst_10652))
{var statearr_10674_12533 = state_10670__$1;(statearr_10674_12533[1] = 5);
} else
{var statearr_10675_12534 = state_10670__$1;(statearr_10675_12534[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 5))
{var inst_10654 = cljs.core.async.close_BANG_.call(null,tc);var inst_10655 = cljs.core.async.close_BANG_.call(null,fc);var state_10670__$1 = (function (){var statearr_10676 = state_10670;(statearr_10676[8] = inst_10654);
return statearr_10676;
})();var statearr_10677_12535 = state_10670__$1;(statearr_10677_12535[2] = inst_10655);
(statearr_10677_12535[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 6))
{var inst_10651 = (state_10670[7]);var inst_10657 = p.call(null,inst_10651);var state_10670__$1 = state_10670;if(cljs.core.truth_(inst_10657))
{var statearr_10678_12536 = state_10670__$1;(statearr_10678_12536[1] = 9);
} else
{var statearr_10679_12537 = state_10670__$1;(statearr_10679_12537[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 7))
{var inst_10666 = (state_10670[2]);var state_10670__$1 = state_10670;var statearr_10680_12538 = state_10670__$1;(statearr_10680_12538[2] = inst_10666);
(statearr_10680_12538[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 8))
{var inst_10663 = (state_10670[2]);var state_10670__$1 = (function (){var statearr_10681 = state_10670;(statearr_10681[9] = inst_10663);
return statearr_10681;
})();var statearr_10682_12539 = state_10670__$1;(statearr_10682_12539[2] = null);
(statearr_10682_12539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 9))
{var state_10670__$1 = state_10670;var statearr_10683_12540 = state_10670__$1;(statearr_10683_12540[2] = tc);
(statearr_10683_12540[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 10))
{var state_10670__$1 = state_10670;var statearr_10684_12541 = state_10670__$1;(statearr_10684_12541[2] = fc);
(statearr_10684_12541[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10671 === 11))
{var inst_10651 = (state_10670[7]);var inst_10661 = (state_10670[2]);var state_10670__$1 = state_10670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10670__$1,8,inst_10661,inst_10651);
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
});})(c__7524__auto___12531,tc,fc))
;return ((function (switch__7454__auto__,c__7524__auto___12531,tc,fc){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_10688 = [null,null,null,null,null,null,null,null,null,null];(statearr_10688[0] = state_machine__7455__auto__);
(statearr_10688[1] = 1);
return statearr_10688;
});
var state_machine__7455__auto____1 = (function (state_10670){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10670);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10689){if((e10689 instanceof Object))
{var ex__7458__auto__ = e10689;var statearr_10690_12542 = state_10670;(statearr_10690_12542[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10670);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12543 = state_10670;
state_10670 = G__12543;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10670){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12531,tc,fc))
})();var state__7526__auto__ = (function (){var statearr_10691 = f__7525__auto__.call(null);(statearr_10691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12531);
return statearr_10691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12531,tc,fc))
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
return (function (state_10738){var state_val_10739 = (state_10738[1]);if((state_val_10739 === 7))
{var inst_10734 = (state_10738[2]);var state_10738__$1 = state_10738;var statearr_10740_12544 = state_10738__$1;(statearr_10740_12544[2] = inst_10734);
(statearr_10740_12544[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10739 === 6))
{var inst_10724 = (state_10738[7]);var inst_10727 = (state_10738[8]);var inst_10731 = f.call(null,inst_10724,inst_10727);var inst_10724__$1 = inst_10731;var state_10738__$1 = (function (){var statearr_10741 = state_10738;(statearr_10741[7] = inst_10724__$1);
return statearr_10741;
})();var statearr_10742_12545 = state_10738__$1;(statearr_10742_12545[2] = null);
(statearr_10742_12545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10739 === 5))
{var inst_10724 = (state_10738[7]);var state_10738__$1 = state_10738;var statearr_10743_12546 = state_10738__$1;(statearr_10743_12546[2] = inst_10724);
(statearr_10743_12546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10739 === 4))
{var inst_10727 = (state_10738[8]);var inst_10727__$1 = (state_10738[2]);var inst_10728 = (inst_10727__$1 == null);var state_10738__$1 = (function (){var statearr_10744 = state_10738;(statearr_10744[8] = inst_10727__$1);
return statearr_10744;
})();if(cljs.core.truth_(inst_10728))
{var statearr_10745_12547 = state_10738__$1;(statearr_10745_12547[1] = 5);
} else
{var statearr_10746_12548 = state_10738__$1;(statearr_10746_12548[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10739 === 3))
{var inst_10736 = (state_10738[2]);var state_10738__$1 = state_10738;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10738__$1,inst_10736);
} else
{if((state_val_10739 === 2))
{var state_10738__$1 = state_10738;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10738__$1,4,ch);
} else
{if((state_val_10739 === 1))
{var inst_10724 = init;var state_10738__$1 = (function (){var statearr_10747 = state_10738;(statearr_10747[7] = inst_10724);
return statearr_10747;
})();var statearr_10748_12549 = state_10738__$1;(statearr_10748_12549[2] = null);
(statearr_10748_12549[1] = 2);
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
var state_machine__7455__auto____0 = (function (){var statearr_10752 = [null,null,null,null,null,null,null,null,null];(statearr_10752[0] = state_machine__7455__auto__);
(statearr_10752[1] = 1);
return statearr_10752;
});
var state_machine__7455__auto____1 = (function (state_10738){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10738);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10753){if((e10753 instanceof Object))
{var ex__7458__auto__ = e10753;var statearr_10754_12550 = state_10738;(statearr_10754_12550[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10738);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12551 = state_10738;
state_10738 = G__12551;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10738){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__))
})();var state__7526__auto__ = (function (){var statearr_10755 = f__7525__auto__.call(null);(statearr_10755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_10755;
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
return (function (state_10817){var state_val_10818 = (state_10817[1]);if((state_val_10818 === 1))
{var inst_10797 = cljs.core.seq.call(null,coll);var inst_10798 = inst_10797;var state_10817__$1 = (function (){var statearr_10819 = state_10817;(statearr_10819[7] = inst_10798);
return statearr_10819;
})();var statearr_10820_12552 = state_10817__$1;(statearr_10820_12552[2] = null);
(statearr_10820_12552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 2))
{var inst_10798 = (state_10817[7]);var state_10817__$1 = state_10817;if(cljs.core.truth_(inst_10798))
{var statearr_10821_12553 = state_10817__$1;(statearr_10821_12553[1] = 4);
} else
{var statearr_10822_12554 = state_10817__$1;(statearr_10822_12554[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 3))
{var inst_10815 = (state_10817[2]);var state_10817__$1 = state_10817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10817__$1,inst_10815);
} else
{if((state_val_10818 === 4))
{var inst_10798 = (state_10817[7]);var inst_10801 = cljs.core.first.call(null,inst_10798);var state_10817__$1 = state_10817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10817__$1,7,ch,inst_10801);
} else
{if((state_val_10818 === 5))
{var state_10817__$1 = state_10817;if(cljs.core.truth_(close_QMARK_))
{var statearr_10823_12555 = state_10817__$1;(statearr_10823_12555[1] = 8);
} else
{var statearr_10824_12556 = state_10817__$1;(statearr_10824_12556[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 6))
{var inst_10813 = (state_10817[2]);var state_10817__$1 = state_10817;var statearr_10825_12557 = state_10817__$1;(statearr_10825_12557[2] = inst_10813);
(statearr_10825_12557[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 7))
{var inst_10798 = (state_10817[7]);var inst_10803 = (state_10817[2]);var inst_10804 = cljs.core.next.call(null,inst_10798);var inst_10798__$1 = inst_10804;var state_10817__$1 = (function (){var statearr_10826 = state_10817;(statearr_10826[7] = inst_10798__$1);
(statearr_10826[8] = inst_10803);
return statearr_10826;
})();var statearr_10827_12558 = state_10817__$1;(statearr_10827_12558[2] = null);
(statearr_10827_12558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 8))
{var inst_10808 = cljs.core.async.close_BANG_.call(null,ch);var state_10817__$1 = state_10817;var statearr_10828_12559 = state_10817__$1;(statearr_10828_12559[2] = inst_10808);
(statearr_10828_12559[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 9))
{var state_10817__$1 = state_10817;var statearr_10829_12560 = state_10817__$1;(statearr_10829_12560[2] = null);
(statearr_10829_12560[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10818 === 10))
{var inst_10811 = (state_10817[2]);var state_10817__$1 = state_10817;var statearr_10830_12561 = state_10817__$1;(statearr_10830_12561[2] = inst_10811);
(statearr_10830_12561[1] = 6);
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
var state_machine__7455__auto____0 = (function (){var statearr_10834 = [null,null,null,null,null,null,null,null,null];(statearr_10834[0] = state_machine__7455__auto__);
(statearr_10834[1] = 1);
return statearr_10834;
});
var state_machine__7455__auto____1 = (function (state_10817){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10817);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10835){if((e10835 instanceof Object))
{var ex__7458__auto__ = e10835;var statearr_10836_12562 = state_10817;(statearr_10836_12562[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10817);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12563 = state_10817;
state_10817 = G__12563;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10817){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__))
})();var state__7526__auto__ = (function (){var statearr_10837 = f__7525__auto__.call(null);(statearr_10837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_10837;
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
cljs.core.async.Mux = (function (){var obj10839 = {};return obj10839;
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
cljs.core.async.Mult = (function (){var obj10841 = {};return obj10841;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11065 = (function (cs,ch,mult,meta11066){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11066 = meta11066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11065.cljs$lang$type = true;
cljs.core.async.t11065.cljs$lang$ctorStr = "cljs.core.async/t11065";
cljs.core.async.t11065.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11065");
});})(cs))
;
cljs.core.async.t11065.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11065.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11065.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11065.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11065.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11067){var self__ = this;
var _11067__$1 = this;return self__.meta11066;
});})(cs))
;
cljs.core.async.t11065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11067,meta11066__$1){var self__ = this;
var _11067__$1 = this;return (new cljs.core.async.t11065(self__.cs,self__.ch,self__.mult,meta11066__$1));
});})(cs))
;
cljs.core.async.__GT_t11065 = ((function (cs){
return (function __GT_t11065(cs__$1,ch__$1,mult__$1,meta11066){return (new cljs.core.async.t11065(cs__$1,ch__$1,mult__$1,meta11066));
});})(cs))
;
}
return (new cljs.core.async.t11065(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7524__auto___12564 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12564,cs,m,dchan,dctr,done){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12564,cs,m,dchan,dctr,done){
return (function (state_11202){var state_val_11203 = (state_11202[1]);if((state_val_11203 === 32))
{var inst_11146 = (state_11202[7]);var inst_11070 = (state_11202[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11202,31,Object,null,30);var inst_11153 = cljs.core.async.put_BANG_.call(null,inst_11146,inst_11070,done);var state_11202__$1 = state_11202;var statearr_11204_12565 = state_11202__$1;(statearr_11204_12565[2] = inst_11153);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11202__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 1))
{var state_11202__$1 = state_11202;var statearr_11205_12566 = state_11202__$1;(statearr_11205_12566[2] = null);
(statearr_11205_12566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 33))
{var inst_11159 = (state_11202[9]);var inst_11161 = cljs.core.chunked_seq_QMARK_.call(null,inst_11159);var state_11202__$1 = state_11202;if(inst_11161)
{var statearr_11206_12567 = state_11202__$1;(statearr_11206_12567[1] = 36);
} else
{var statearr_11207_12568 = state_11202__$1;(statearr_11207_12568[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 2))
{var state_11202__$1 = state_11202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11202__$1,4,ch);
} else
{if((state_val_11203 === 34))
{var state_11202__$1 = state_11202;var statearr_11208_12569 = state_11202__$1;(statearr_11208_12569[2] = null);
(statearr_11208_12569[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 3))
{var inst_11200 = (state_11202[2]);var state_11202__$1 = state_11202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11202__$1,inst_11200);
} else
{if((state_val_11203 === 35))
{var inst_11184 = (state_11202[2]);var state_11202__$1 = state_11202;var statearr_11209_12570 = state_11202__$1;(statearr_11209_12570[2] = inst_11184);
(statearr_11209_12570[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 4))
{var inst_11070 = (state_11202[8]);var inst_11070__$1 = (state_11202[2]);var inst_11071 = (inst_11070__$1 == null);var state_11202__$1 = (function (){var statearr_11210 = state_11202;(statearr_11210[8] = inst_11070__$1);
return statearr_11210;
})();if(cljs.core.truth_(inst_11071))
{var statearr_11211_12571 = state_11202__$1;(statearr_11211_12571[1] = 5);
} else
{var statearr_11212_12572 = state_11202__$1;(statearr_11212_12572[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 36))
{var inst_11159 = (state_11202[9]);var inst_11163 = cljs.core.chunk_first.call(null,inst_11159);var inst_11164 = cljs.core.chunk_rest.call(null,inst_11159);var inst_11165 = cljs.core.count.call(null,inst_11163);var inst_11138 = inst_11164;var inst_11139 = inst_11163;var inst_11140 = inst_11165;var inst_11141 = 0;var state_11202__$1 = (function (){var statearr_11213 = state_11202;(statearr_11213[10] = inst_11138);
(statearr_11213[11] = inst_11139);
(statearr_11213[12] = inst_11140);
(statearr_11213[13] = inst_11141);
return statearr_11213;
})();var statearr_11214_12573 = state_11202__$1;(statearr_11214_12573[2] = null);
(statearr_11214_12573[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 5))
{var inst_11077 = cljs.core.deref.call(null,cs);var inst_11078 = cljs.core.seq.call(null,inst_11077);var inst_11079 = inst_11078;var inst_11080 = null;var inst_11081 = 0;var inst_11082 = 0;var state_11202__$1 = (function (){var statearr_11215 = state_11202;(statearr_11215[14] = inst_11080);
(statearr_11215[15] = inst_11082);
(statearr_11215[16] = inst_11081);
(statearr_11215[17] = inst_11079);
return statearr_11215;
})();var statearr_11216_12574 = state_11202__$1;(statearr_11216_12574[2] = null);
(statearr_11216_12574[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 37))
{var inst_11159 = (state_11202[9]);var inst_11168 = cljs.core.first.call(null,inst_11159);var state_11202__$1 = (function (){var statearr_11217 = state_11202;(statearr_11217[18] = inst_11168);
return statearr_11217;
})();var statearr_11218_12575 = state_11202__$1;(statearr_11218_12575[2] = null);
(statearr_11218_12575[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 6))
{var inst_11130 = (state_11202[19]);var inst_11129 = cljs.core.deref.call(null,cs);var inst_11130__$1 = cljs.core.keys.call(null,inst_11129);var inst_11131 = cljs.core.count.call(null,inst_11130__$1);var inst_11132 = cljs.core.reset_BANG_.call(null,dctr,inst_11131);var inst_11137 = cljs.core.seq.call(null,inst_11130__$1);var inst_11138 = inst_11137;var inst_11139 = null;var inst_11140 = 0;var inst_11141 = 0;var state_11202__$1 = (function (){var statearr_11219 = state_11202;(statearr_11219[20] = inst_11132);
(statearr_11219[19] = inst_11130__$1);
(statearr_11219[10] = inst_11138);
(statearr_11219[11] = inst_11139);
(statearr_11219[12] = inst_11140);
(statearr_11219[13] = inst_11141);
return statearr_11219;
})();var statearr_11220_12576 = state_11202__$1;(statearr_11220_12576[2] = null);
(statearr_11220_12576[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 38))
{var inst_11181 = (state_11202[2]);var state_11202__$1 = state_11202;var statearr_11221_12577 = state_11202__$1;(statearr_11221_12577[2] = inst_11181);
(statearr_11221_12577[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 7))
{var inst_11198 = (state_11202[2]);var state_11202__$1 = state_11202;var statearr_11222_12578 = state_11202__$1;(statearr_11222_12578[2] = inst_11198);
(statearr_11222_12578[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 39))
{var inst_11159 = (state_11202[9]);var inst_11177 = (state_11202[2]);var inst_11178 = cljs.core.next.call(null,inst_11159);var inst_11138 = inst_11178;var inst_11139 = null;var inst_11140 = 0;var inst_11141 = 0;var state_11202__$1 = (function (){var statearr_11223 = state_11202;(statearr_11223[10] = inst_11138);
(statearr_11223[11] = inst_11139);
(statearr_11223[12] = inst_11140);
(statearr_11223[13] = inst_11141);
(statearr_11223[21] = inst_11177);
return statearr_11223;
})();var statearr_11224_12579 = state_11202__$1;(statearr_11224_12579[2] = null);
(statearr_11224_12579[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 8))
{var inst_11082 = (state_11202[15]);var inst_11081 = (state_11202[16]);var inst_11084 = (inst_11082 < inst_11081);var inst_11085 = inst_11084;var state_11202__$1 = state_11202;if(cljs.core.truth_(inst_11085))
{var statearr_11225_12580 = state_11202__$1;(statearr_11225_12580[1] = 10);
} else
{var statearr_11226_12581 = state_11202__$1;(statearr_11226_12581[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 40))
{var inst_11168 = (state_11202[18]);var inst_11169 = (state_11202[2]);var inst_11170 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11171 = cljs.core.async.untap_STAR_.call(null,m,inst_11168);var state_11202__$1 = (function (){var statearr_11227 = state_11202;(statearr_11227[22] = inst_11170);
(statearr_11227[23] = inst_11169);
return statearr_11227;
})();var statearr_11228_12582 = state_11202__$1;(statearr_11228_12582[2] = inst_11171);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11202__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 9))
{var inst_11127 = (state_11202[2]);var state_11202__$1 = state_11202;var statearr_11229_12583 = state_11202__$1;(statearr_11229_12583[2] = inst_11127);
(statearr_11229_12583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 41))
{var inst_11070 = (state_11202[8]);var inst_11168 = (state_11202[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11202,40,Object,null,39);var inst_11175 = cljs.core.async.put_BANG_.call(null,inst_11168,inst_11070,done);var state_11202__$1 = state_11202;var statearr_11230_12584 = state_11202__$1;(statearr_11230_12584[2] = inst_11175);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11202__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 10))
{var inst_11080 = (state_11202[14]);var inst_11082 = (state_11202[15]);var inst_11088 = cljs.core._nth.call(null,inst_11080,inst_11082);var inst_11089 = cljs.core.nth.call(null,inst_11088,0,null);var inst_11090 = cljs.core.nth.call(null,inst_11088,1,null);var state_11202__$1 = (function (){var statearr_11231 = state_11202;(statearr_11231[24] = inst_11089);
return statearr_11231;
})();if(cljs.core.truth_(inst_11090))
{var statearr_11232_12585 = state_11202__$1;(statearr_11232_12585[1] = 13);
} else
{var statearr_11233_12586 = state_11202__$1;(statearr_11233_12586[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 42))
{var state_11202__$1 = state_11202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11202__$1,45,dchan);
} else
{if((state_val_11203 === 11))
{var inst_11099 = (state_11202[25]);var inst_11079 = (state_11202[17]);var inst_11099__$1 = cljs.core.seq.call(null,inst_11079);var state_11202__$1 = (function (){var statearr_11234 = state_11202;(statearr_11234[25] = inst_11099__$1);
return statearr_11234;
})();if(inst_11099__$1)
{var statearr_11235_12587 = state_11202__$1;(statearr_11235_12587[1] = 16);
} else
{var statearr_11236_12588 = state_11202__$1;(statearr_11236_12588[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 43))
{var state_11202__$1 = state_11202;var statearr_11237_12589 = state_11202__$1;(statearr_11237_12589[2] = null);
(statearr_11237_12589[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 12))
{var inst_11125 = (state_11202[2]);var state_11202__$1 = state_11202;var statearr_11238_12590 = state_11202__$1;(statearr_11238_12590[2] = inst_11125);
(statearr_11238_12590[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 44))
{var inst_11195 = (state_11202[2]);var state_11202__$1 = (function (){var statearr_11239 = state_11202;(statearr_11239[26] = inst_11195);
return statearr_11239;
})();var statearr_11240_12591 = state_11202__$1;(statearr_11240_12591[2] = null);
(statearr_11240_12591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 13))
{var inst_11089 = (state_11202[24]);var inst_11092 = cljs.core.async.close_BANG_.call(null,inst_11089);var state_11202__$1 = state_11202;var statearr_11241_12592 = state_11202__$1;(statearr_11241_12592[2] = inst_11092);
(statearr_11241_12592[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 45))
{var inst_11192 = (state_11202[2]);var state_11202__$1 = state_11202;var statearr_11245_12593 = state_11202__$1;(statearr_11245_12593[2] = inst_11192);
(statearr_11245_12593[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 14))
{var state_11202__$1 = state_11202;var statearr_11246_12594 = state_11202__$1;(statearr_11246_12594[2] = null);
(statearr_11246_12594[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 15))
{var inst_11080 = (state_11202[14]);var inst_11082 = (state_11202[15]);var inst_11081 = (state_11202[16]);var inst_11079 = (state_11202[17]);var inst_11095 = (state_11202[2]);var inst_11096 = (inst_11082 + 1);var tmp11242 = inst_11080;var tmp11243 = inst_11081;var tmp11244 = inst_11079;var inst_11079__$1 = tmp11244;var inst_11080__$1 = tmp11242;var inst_11081__$1 = tmp11243;var inst_11082__$1 = inst_11096;var state_11202__$1 = (function (){var statearr_11247 = state_11202;(statearr_11247[14] = inst_11080__$1);
(statearr_11247[27] = inst_11095);
(statearr_11247[15] = inst_11082__$1);
(statearr_11247[16] = inst_11081__$1);
(statearr_11247[17] = inst_11079__$1);
return statearr_11247;
})();var statearr_11248_12595 = state_11202__$1;(statearr_11248_12595[2] = null);
(statearr_11248_12595[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 16))
{var inst_11099 = (state_11202[25]);var inst_11101 = cljs.core.chunked_seq_QMARK_.call(null,inst_11099);var state_11202__$1 = state_11202;if(inst_11101)
{var statearr_11249_12596 = state_11202__$1;(statearr_11249_12596[1] = 19);
} else
{var statearr_11250_12597 = state_11202__$1;(statearr_11250_12597[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 17))
{var state_11202__$1 = state_11202;var statearr_11251_12598 = state_11202__$1;(statearr_11251_12598[2] = null);
(statearr_11251_12598[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 18))
{var inst_11123 = (state_11202[2]);var state_11202__$1 = state_11202;var statearr_11252_12599 = state_11202__$1;(statearr_11252_12599[2] = inst_11123);
(statearr_11252_12599[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 19))
{var inst_11099 = (state_11202[25]);var inst_11103 = cljs.core.chunk_first.call(null,inst_11099);var inst_11104 = cljs.core.chunk_rest.call(null,inst_11099);var inst_11105 = cljs.core.count.call(null,inst_11103);var inst_11079 = inst_11104;var inst_11080 = inst_11103;var inst_11081 = inst_11105;var inst_11082 = 0;var state_11202__$1 = (function (){var statearr_11253 = state_11202;(statearr_11253[14] = inst_11080);
(statearr_11253[15] = inst_11082);
(statearr_11253[16] = inst_11081);
(statearr_11253[17] = inst_11079);
return statearr_11253;
})();var statearr_11254_12600 = state_11202__$1;(statearr_11254_12600[2] = null);
(statearr_11254_12600[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 20))
{var inst_11099 = (state_11202[25]);var inst_11109 = cljs.core.first.call(null,inst_11099);var inst_11110 = cljs.core.nth.call(null,inst_11109,0,null);var inst_11111 = cljs.core.nth.call(null,inst_11109,1,null);var state_11202__$1 = (function (){var statearr_11255 = state_11202;(statearr_11255[28] = inst_11110);
return statearr_11255;
})();if(cljs.core.truth_(inst_11111))
{var statearr_11256_12601 = state_11202__$1;(statearr_11256_12601[1] = 22);
} else
{var statearr_11257_12602 = state_11202__$1;(statearr_11257_12602[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 21))
{var inst_11120 = (state_11202[2]);var state_11202__$1 = state_11202;var statearr_11258_12603 = state_11202__$1;(statearr_11258_12603[2] = inst_11120);
(statearr_11258_12603[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 22))
{var inst_11110 = (state_11202[28]);var inst_11113 = cljs.core.async.close_BANG_.call(null,inst_11110);var state_11202__$1 = state_11202;var statearr_11259_12604 = state_11202__$1;(statearr_11259_12604[2] = inst_11113);
(statearr_11259_12604[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 23))
{var state_11202__$1 = state_11202;var statearr_11260_12605 = state_11202__$1;(statearr_11260_12605[2] = null);
(statearr_11260_12605[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 24))
{var inst_11099 = (state_11202[25]);var inst_11116 = (state_11202[2]);var inst_11117 = cljs.core.next.call(null,inst_11099);var inst_11079 = inst_11117;var inst_11080 = null;var inst_11081 = 0;var inst_11082 = 0;var state_11202__$1 = (function (){var statearr_11261 = state_11202;(statearr_11261[14] = inst_11080);
(statearr_11261[29] = inst_11116);
(statearr_11261[15] = inst_11082);
(statearr_11261[16] = inst_11081);
(statearr_11261[17] = inst_11079);
return statearr_11261;
})();var statearr_11262_12606 = state_11202__$1;(statearr_11262_12606[2] = null);
(statearr_11262_12606[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 25))
{var inst_11140 = (state_11202[12]);var inst_11141 = (state_11202[13]);var inst_11143 = (inst_11141 < inst_11140);var inst_11144 = inst_11143;var state_11202__$1 = state_11202;if(cljs.core.truth_(inst_11144))
{var statearr_11263_12607 = state_11202__$1;(statearr_11263_12607[1] = 27);
} else
{var statearr_11264_12608 = state_11202__$1;(statearr_11264_12608[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 26))
{var inst_11130 = (state_11202[19]);var inst_11188 = (state_11202[2]);var inst_11189 = cljs.core.seq.call(null,inst_11130);var state_11202__$1 = (function (){var statearr_11265 = state_11202;(statearr_11265[30] = inst_11188);
return statearr_11265;
})();if(inst_11189)
{var statearr_11266_12609 = state_11202__$1;(statearr_11266_12609[1] = 42);
} else
{var statearr_11267_12610 = state_11202__$1;(statearr_11267_12610[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 27))
{var inst_11139 = (state_11202[11]);var inst_11141 = (state_11202[13]);var inst_11146 = cljs.core._nth.call(null,inst_11139,inst_11141);var state_11202__$1 = (function (){var statearr_11268 = state_11202;(statearr_11268[7] = inst_11146);
return statearr_11268;
})();var statearr_11269_12611 = state_11202__$1;(statearr_11269_12611[2] = null);
(statearr_11269_12611[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 28))
{var inst_11138 = (state_11202[10]);var inst_11159 = (state_11202[9]);var inst_11159__$1 = cljs.core.seq.call(null,inst_11138);var state_11202__$1 = (function (){var statearr_11273 = state_11202;(statearr_11273[9] = inst_11159__$1);
return statearr_11273;
})();if(inst_11159__$1)
{var statearr_11274_12612 = state_11202__$1;(statearr_11274_12612[1] = 33);
} else
{var statearr_11275_12613 = state_11202__$1;(statearr_11275_12613[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 29))
{var inst_11186 = (state_11202[2]);var state_11202__$1 = state_11202;var statearr_11276_12614 = state_11202__$1;(statearr_11276_12614[2] = inst_11186);
(statearr_11276_12614[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 30))
{var inst_11138 = (state_11202[10]);var inst_11139 = (state_11202[11]);var inst_11140 = (state_11202[12]);var inst_11141 = (state_11202[13]);var inst_11155 = (state_11202[2]);var inst_11156 = (inst_11141 + 1);var tmp11270 = inst_11138;var tmp11271 = inst_11139;var tmp11272 = inst_11140;var inst_11138__$1 = tmp11270;var inst_11139__$1 = tmp11271;var inst_11140__$1 = tmp11272;var inst_11141__$1 = inst_11156;var state_11202__$1 = (function (){var statearr_11277 = state_11202;(statearr_11277[10] = inst_11138__$1);
(statearr_11277[11] = inst_11139__$1);
(statearr_11277[12] = inst_11140__$1);
(statearr_11277[13] = inst_11141__$1);
(statearr_11277[31] = inst_11155);
return statearr_11277;
})();var statearr_11278_12615 = state_11202__$1;(statearr_11278_12615[2] = null);
(statearr_11278_12615[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11203 === 31))
{var inst_11146 = (state_11202[7]);var inst_11147 = (state_11202[2]);var inst_11148 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11149 = cljs.core.async.untap_STAR_.call(null,m,inst_11146);var state_11202__$1 = (function (){var statearr_11279 = state_11202;(statearr_11279[32] = inst_11147);
(statearr_11279[33] = inst_11148);
return statearr_11279;
})();var statearr_11280_12616 = state_11202__$1;(statearr_11280_12616[2] = inst_11149);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11202__$1);
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
});})(c__7524__auto___12564,cs,m,dchan,dctr,done))
;return ((function (switch__7454__auto__,c__7524__auto___12564,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11284[0] = state_machine__7455__auto__);
(statearr_11284[1] = 1);
return statearr_11284;
});
var state_machine__7455__auto____1 = (function (state_11202){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11202);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11285){if((e11285 instanceof Object))
{var ex__7458__auto__ = e11285;var statearr_11286_12617 = state_11202;(statearr_11286_12617[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11202);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11285;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12618 = state_11202;
state_11202 = G__12618;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11202){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12564,cs,m,dchan,dctr,done))
})();var state__7526__auto__ = (function (){var statearr_11287 = f__7525__auto__.call(null);(statearr_11287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12564);
return statearr_11287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12564,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj11289 = {};return obj11289;
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
;var m = (function (){if(typeof cljs.core.async.t11399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11399 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11400){
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
this.meta11400 = meta11400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11399.cljs$lang$type = true;
cljs.core.async.t11399.cljs$lang$ctorStr = "cljs.core.async/t11399";
cljs.core.async.t11399.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11399");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11399.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11399.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11399.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11399.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11399.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11399.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11399.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11401){var self__ = this;
var _11401__$1 = this;return self__.meta11400;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11401,meta11400__$1){var self__ = this;
var _11401__$1 = this;return (new cljs.core.async.t11399(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11400__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11399 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11399(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11400){return (new cljs.core.async.t11399(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11400));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11399(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7524__auto___12619 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11466){var state_val_11467 = (state_11466[1]);if((state_val_11467 === 1))
{var inst_11405 = (state_11466[7]);var inst_11405__$1 = calc_state.call(null);var inst_11406 = cljs.core.seq_QMARK_.call(null,inst_11405__$1);var state_11466__$1 = (function (){var statearr_11468 = state_11466;(statearr_11468[7] = inst_11405__$1);
return statearr_11468;
})();if(inst_11406)
{var statearr_11469_12620 = state_11466__$1;(statearr_11469_12620[1] = 2);
} else
{var statearr_11470_12621 = state_11466__$1;(statearr_11470_12621[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 2))
{var inst_11405 = (state_11466[7]);var inst_11408 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11405);var state_11466__$1 = state_11466;var statearr_11471_12622 = state_11466__$1;(statearr_11471_12622[2] = inst_11408);
(statearr_11471_12622[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 3))
{var inst_11405 = (state_11466[7]);var state_11466__$1 = state_11466;var statearr_11472_12623 = state_11466__$1;(statearr_11472_12623[2] = inst_11405);
(statearr_11472_12623[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 4))
{var inst_11405 = (state_11466[7]);var inst_11411 = (state_11466[2]);var inst_11412 = cljs.core.get.call(null,inst_11411,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11413 = cljs.core.get.call(null,inst_11411,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11414 = cljs.core.get.call(null,inst_11411,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11415 = inst_11405;var state_11466__$1 = (function (){var statearr_11473 = state_11466;(statearr_11473[8] = inst_11412);
(statearr_11473[9] = inst_11413);
(statearr_11473[10] = inst_11414);
(statearr_11473[11] = inst_11415);
return statearr_11473;
})();var statearr_11474_12624 = state_11466__$1;(statearr_11474_12624[2] = null);
(statearr_11474_12624[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 5))
{var inst_11415 = (state_11466[11]);var inst_11418 = cljs.core.seq_QMARK_.call(null,inst_11415);var state_11466__$1 = state_11466;if(inst_11418)
{var statearr_11475_12625 = state_11466__$1;(statearr_11475_12625[1] = 7);
} else
{var statearr_11476_12626 = state_11466__$1;(statearr_11476_12626[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 6))
{var inst_11464 = (state_11466[2]);var state_11466__$1 = state_11466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11466__$1,inst_11464);
} else
{if((state_val_11467 === 7))
{var inst_11415 = (state_11466[11]);var inst_11420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11415);var state_11466__$1 = state_11466;var statearr_11477_12627 = state_11466__$1;(statearr_11477_12627[2] = inst_11420);
(statearr_11477_12627[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 8))
{var inst_11415 = (state_11466[11]);var state_11466__$1 = state_11466;var statearr_11478_12628 = state_11466__$1;(statearr_11478_12628[2] = inst_11415);
(statearr_11478_12628[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 9))
{var inst_11423 = (state_11466[12]);var inst_11423__$1 = (state_11466[2]);var inst_11424 = cljs.core.get.call(null,inst_11423__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11425 = cljs.core.get.call(null,inst_11423__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11426 = cljs.core.get.call(null,inst_11423__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11466__$1 = (function (){var statearr_11479 = state_11466;(statearr_11479[12] = inst_11423__$1);
(statearr_11479[13] = inst_11425);
(statearr_11479[14] = inst_11426);
return statearr_11479;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11466__$1,10,inst_11424);
} else
{if((state_val_11467 === 10))
{var inst_11431 = (state_11466[15]);var inst_11430 = (state_11466[16]);var inst_11429 = (state_11466[2]);var inst_11430__$1 = cljs.core.nth.call(null,inst_11429,0,null);var inst_11431__$1 = cljs.core.nth.call(null,inst_11429,1,null);var inst_11432 = (inst_11430__$1 == null);var inst_11433 = cljs.core._EQ_.call(null,inst_11431__$1,change);var inst_11434 = (inst_11432) || (inst_11433);var state_11466__$1 = (function (){var statearr_11480 = state_11466;(statearr_11480[15] = inst_11431__$1);
(statearr_11480[16] = inst_11430__$1);
return statearr_11480;
})();if(cljs.core.truth_(inst_11434))
{var statearr_11481_12629 = state_11466__$1;(statearr_11481_12629[1] = 11);
} else
{var statearr_11482_12630 = state_11466__$1;(statearr_11482_12630[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 11))
{var inst_11430 = (state_11466[16]);var inst_11436 = (inst_11430 == null);var state_11466__$1 = state_11466;if(cljs.core.truth_(inst_11436))
{var statearr_11483_12631 = state_11466__$1;(statearr_11483_12631[1] = 14);
} else
{var statearr_11484_12632 = state_11466__$1;(statearr_11484_12632[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 12))
{var inst_11445 = (state_11466[17]);var inst_11431 = (state_11466[15]);var inst_11426 = (state_11466[14]);var inst_11445__$1 = inst_11426.call(null,inst_11431);var state_11466__$1 = (function (){var statearr_11485 = state_11466;(statearr_11485[17] = inst_11445__$1);
return statearr_11485;
})();if(cljs.core.truth_(inst_11445__$1))
{var statearr_11486_12633 = state_11466__$1;(statearr_11486_12633[1] = 17);
} else
{var statearr_11487_12634 = state_11466__$1;(statearr_11487_12634[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 13))
{var inst_11462 = (state_11466[2]);var state_11466__$1 = state_11466;var statearr_11488_12635 = state_11466__$1;(statearr_11488_12635[2] = inst_11462);
(statearr_11488_12635[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 14))
{var inst_11431 = (state_11466[15]);var inst_11438 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11431);var state_11466__$1 = state_11466;var statearr_11489_12636 = state_11466__$1;(statearr_11489_12636[2] = inst_11438);
(statearr_11489_12636[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 15))
{var state_11466__$1 = state_11466;var statearr_11490_12637 = state_11466__$1;(statearr_11490_12637[2] = null);
(statearr_11490_12637[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 16))
{var inst_11441 = (state_11466[2]);var inst_11442 = calc_state.call(null);var inst_11415 = inst_11442;var state_11466__$1 = (function (){var statearr_11491 = state_11466;(statearr_11491[11] = inst_11415);
(statearr_11491[18] = inst_11441);
return statearr_11491;
})();var statearr_11492_12638 = state_11466__$1;(statearr_11492_12638[2] = null);
(statearr_11492_12638[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 17))
{var inst_11445 = (state_11466[17]);var state_11466__$1 = state_11466;var statearr_11493_12639 = state_11466__$1;(statearr_11493_12639[2] = inst_11445);
(statearr_11493_12639[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 18))
{var inst_11425 = (state_11466[13]);var inst_11431 = (state_11466[15]);var inst_11426 = (state_11466[14]);var inst_11448 = cljs.core.empty_QMARK_.call(null,inst_11426);var inst_11449 = inst_11425.call(null,inst_11431);var inst_11450 = cljs.core.not.call(null,inst_11449);var inst_11451 = (inst_11448) && (inst_11450);var state_11466__$1 = state_11466;var statearr_11494_12640 = state_11466__$1;(statearr_11494_12640[2] = inst_11451);
(statearr_11494_12640[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 19))
{var inst_11453 = (state_11466[2]);var state_11466__$1 = state_11466;if(cljs.core.truth_(inst_11453))
{var statearr_11495_12641 = state_11466__$1;(statearr_11495_12641[1] = 20);
} else
{var statearr_11496_12642 = state_11466__$1;(statearr_11496_12642[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 20))
{var inst_11430 = (state_11466[16]);var state_11466__$1 = state_11466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11466__$1,23,out,inst_11430);
} else
{if((state_val_11467 === 21))
{var state_11466__$1 = state_11466;var statearr_11497_12643 = state_11466__$1;(statearr_11497_12643[2] = null);
(statearr_11497_12643[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 22))
{var inst_11423 = (state_11466[12]);var inst_11459 = (state_11466[2]);var inst_11415 = inst_11423;var state_11466__$1 = (function (){var statearr_11498 = state_11466;(statearr_11498[19] = inst_11459);
(statearr_11498[11] = inst_11415);
return statearr_11498;
})();var statearr_11499_12644 = state_11466__$1;(statearr_11499_12644[2] = null);
(statearr_11499_12644[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11467 === 23))
{var inst_11456 = (state_11466[2]);var state_11466__$1 = state_11466;var statearr_11500_12645 = state_11466__$1;(statearr_11500_12645[2] = inst_11456);
(statearr_11500_12645[1] = 22);
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
});})(c__7524__auto___12619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7454__auto__,c__7524__auto___12619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11504[0] = state_machine__7455__auto__);
(statearr_11504[1] = 1);
return statearr_11504;
});
var state_machine__7455__auto____1 = (function (state_11466){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11466);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11505){if((e11505 instanceof Object))
{var ex__7458__auto__ = e11505;var statearr_11506_12646 = state_11466;(statearr_11506_12646[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12647 = state_11466;
state_11466 = G__12647;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11466){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7526__auto__ = (function (){var statearr_11507 = f__7525__auto__.call(null);(statearr_11507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12619);
return statearr_11507;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12619,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj11509 = {};return obj11509;
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
return (function (p1__11510_SHARP_){if(cljs.core.truth_(p1__11510_SHARP_.call(null,topic)))
{return p1__11510_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11510_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4884__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11635 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11635 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11636){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11636 = meta11636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11635.cljs$lang$type = true;
cljs.core.async.t11635.cljs$lang$ctorStr = "cljs.core.async/t11635";
cljs.core.async.t11635.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11635");
});})(mults,ensure_mult))
;
cljs.core.async.t11635.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11635.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11635.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11635.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11635.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11635.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11637){var self__ = this;
var _11637__$1 = this;return self__.meta11636;
});})(mults,ensure_mult))
;
cljs.core.async.t11635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11637,meta11636__$1){var self__ = this;
var _11637__$1 = this;return (new cljs.core.async.t11635(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11636__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11635 = ((function (mults,ensure_mult){
return (function __GT_t11635(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11636){return (new cljs.core.async.t11635(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11636));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11635(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7524__auto___12648 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12648,mults,ensure_mult,p){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12648,mults,ensure_mult,p){
return (function (state_11711){var state_val_11712 = (state_11711[1]);if((state_val_11712 === 1))
{var state_11711__$1 = state_11711;var statearr_11713_12649 = state_11711__$1;(statearr_11713_12649[2] = null);
(statearr_11713_12649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 2))
{var state_11711__$1 = state_11711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11711__$1,4,ch);
} else
{if((state_val_11712 === 3))
{var inst_11709 = (state_11711[2]);var state_11711__$1 = state_11711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11711__$1,inst_11709);
} else
{if((state_val_11712 === 4))
{var inst_11640 = (state_11711[7]);var inst_11640__$1 = (state_11711[2]);var inst_11641 = (inst_11640__$1 == null);var state_11711__$1 = (function (){var statearr_11714 = state_11711;(statearr_11714[7] = inst_11640__$1);
return statearr_11714;
})();if(cljs.core.truth_(inst_11641))
{var statearr_11715_12650 = state_11711__$1;(statearr_11715_12650[1] = 5);
} else
{var statearr_11716_12651 = state_11711__$1;(statearr_11716_12651[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 5))
{var inst_11647 = cljs.core.deref.call(null,mults);var inst_11648 = cljs.core.vals.call(null,inst_11647);var inst_11649 = cljs.core.seq.call(null,inst_11648);var inst_11650 = inst_11649;var inst_11651 = null;var inst_11652 = 0;var inst_11653 = 0;var state_11711__$1 = (function (){var statearr_11717 = state_11711;(statearr_11717[8] = inst_11653);
(statearr_11717[9] = inst_11652);
(statearr_11717[10] = inst_11651);
(statearr_11717[11] = inst_11650);
return statearr_11717;
})();var statearr_11718_12652 = state_11711__$1;(statearr_11718_12652[2] = null);
(statearr_11718_12652[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 6))
{var inst_11690 = (state_11711[12]);var inst_11688 = (state_11711[13]);var inst_11640 = (state_11711[7]);var inst_11688__$1 = topic_fn.call(null,inst_11640);var inst_11689 = cljs.core.deref.call(null,mults);var inst_11690__$1 = cljs.core.get.call(null,inst_11689,inst_11688__$1);var state_11711__$1 = (function (){var statearr_11719 = state_11711;(statearr_11719[12] = inst_11690__$1);
(statearr_11719[13] = inst_11688__$1);
return statearr_11719;
})();if(cljs.core.truth_(inst_11690__$1))
{var statearr_11720_12653 = state_11711__$1;(statearr_11720_12653[1] = 19);
} else
{var statearr_11721_12654 = state_11711__$1;(statearr_11721_12654[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 7))
{var inst_11707 = (state_11711[2]);var state_11711__$1 = state_11711;var statearr_11722_12655 = state_11711__$1;(statearr_11722_12655[2] = inst_11707);
(statearr_11722_12655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 8))
{var inst_11653 = (state_11711[8]);var inst_11652 = (state_11711[9]);var inst_11655 = (inst_11653 < inst_11652);var inst_11656 = inst_11655;var state_11711__$1 = state_11711;if(cljs.core.truth_(inst_11656))
{var statearr_11726_12656 = state_11711__$1;(statearr_11726_12656[1] = 10);
} else
{var statearr_11727_12657 = state_11711__$1;(statearr_11727_12657[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 9))
{var inst_11686 = (state_11711[2]);var state_11711__$1 = state_11711;var statearr_11728_12658 = state_11711__$1;(statearr_11728_12658[2] = inst_11686);
(statearr_11728_12658[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 10))
{var inst_11653 = (state_11711[8]);var inst_11652 = (state_11711[9]);var inst_11651 = (state_11711[10]);var inst_11650 = (state_11711[11]);var inst_11658 = cljs.core._nth.call(null,inst_11651,inst_11653);var inst_11659 = cljs.core.async.muxch_STAR_.call(null,inst_11658);var inst_11660 = cljs.core.async.close_BANG_.call(null,inst_11659);var inst_11661 = (inst_11653 + 1);var tmp11723 = inst_11652;var tmp11724 = inst_11651;var tmp11725 = inst_11650;var inst_11650__$1 = tmp11725;var inst_11651__$1 = tmp11724;var inst_11652__$1 = tmp11723;var inst_11653__$1 = inst_11661;var state_11711__$1 = (function (){var statearr_11729 = state_11711;(statearr_11729[14] = inst_11660);
(statearr_11729[8] = inst_11653__$1);
(statearr_11729[9] = inst_11652__$1);
(statearr_11729[10] = inst_11651__$1);
(statearr_11729[11] = inst_11650__$1);
return statearr_11729;
})();var statearr_11730_12659 = state_11711__$1;(statearr_11730_12659[2] = null);
(statearr_11730_12659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 11))
{var inst_11664 = (state_11711[15]);var inst_11650 = (state_11711[11]);var inst_11664__$1 = cljs.core.seq.call(null,inst_11650);var state_11711__$1 = (function (){var statearr_11731 = state_11711;(statearr_11731[15] = inst_11664__$1);
return statearr_11731;
})();if(inst_11664__$1)
{var statearr_11732_12660 = state_11711__$1;(statearr_11732_12660[1] = 13);
} else
{var statearr_11733_12661 = state_11711__$1;(statearr_11733_12661[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 12))
{var inst_11684 = (state_11711[2]);var state_11711__$1 = state_11711;var statearr_11734_12662 = state_11711__$1;(statearr_11734_12662[2] = inst_11684);
(statearr_11734_12662[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 13))
{var inst_11664 = (state_11711[15]);var inst_11666 = cljs.core.chunked_seq_QMARK_.call(null,inst_11664);var state_11711__$1 = state_11711;if(inst_11666)
{var statearr_11735_12663 = state_11711__$1;(statearr_11735_12663[1] = 16);
} else
{var statearr_11736_12664 = state_11711__$1;(statearr_11736_12664[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 14))
{var state_11711__$1 = state_11711;var statearr_11737_12665 = state_11711__$1;(statearr_11737_12665[2] = null);
(statearr_11737_12665[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 15))
{var inst_11682 = (state_11711[2]);var state_11711__$1 = state_11711;var statearr_11738_12666 = state_11711__$1;(statearr_11738_12666[2] = inst_11682);
(statearr_11738_12666[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 16))
{var inst_11664 = (state_11711[15]);var inst_11668 = cljs.core.chunk_first.call(null,inst_11664);var inst_11669 = cljs.core.chunk_rest.call(null,inst_11664);var inst_11670 = cljs.core.count.call(null,inst_11668);var inst_11650 = inst_11669;var inst_11651 = inst_11668;var inst_11652 = inst_11670;var inst_11653 = 0;var state_11711__$1 = (function (){var statearr_11739 = state_11711;(statearr_11739[8] = inst_11653);
(statearr_11739[9] = inst_11652);
(statearr_11739[10] = inst_11651);
(statearr_11739[11] = inst_11650);
return statearr_11739;
})();var statearr_11740_12667 = state_11711__$1;(statearr_11740_12667[2] = null);
(statearr_11740_12667[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 17))
{var inst_11664 = (state_11711[15]);var inst_11673 = cljs.core.first.call(null,inst_11664);var inst_11674 = cljs.core.async.muxch_STAR_.call(null,inst_11673);var inst_11675 = cljs.core.async.close_BANG_.call(null,inst_11674);var inst_11676 = cljs.core.next.call(null,inst_11664);var inst_11650 = inst_11676;var inst_11651 = null;var inst_11652 = 0;var inst_11653 = 0;var state_11711__$1 = (function (){var statearr_11741 = state_11711;(statearr_11741[8] = inst_11653);
(statearr_11741[9] = inst_11652);
(statearr_11741[10] = inst_11651);
(statearr_11741[11] = inst_11650);
(statearr_11741[16] = inst_11675);
return statearr_11741;
})();var statearr_11742_12668 = state_11711__$1;(statearr_11742_12668[2] = null);
(statearr_11742_12668[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 18))
{var inst_11679 = (state_11711[2]);var state_11711__$1 = state_11711;var statearr_11743_12669 = state_11711__$1;(statearr_11743_12669[2] = inst_11679);
(statearr_11743_12669[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 19))
{var state_11711__$1 = state_11711;var statearr_11744_12670 = state_11711__$1;(statearr_11744_12670[2] = null);
(statearr_11744_12670[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 20))
{var state_11711__$1 = state_11711;var statearr_11745_12671 = state_11711__$1;(statearr_11745_12671[2] = null);
(statearr_11745_12671[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 21))
{var inst_11704 = (state_11711[2]);var state_11711__$1 = (function (){var statearr_11746 = state_11711;(statearr_11746[17] = inst_11704);
return statearr_11746;
})();var statearr_11747_12672 = state_11711__$1;(statearr_11747_12672[2] = null);
(statearr_11747_12672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 22))
{var inst_11701 = (state_11711[2]);var state_11711__$1 = state_11711;var statearr_11748_12673 = state_11711__$1;(statearr_11748_12673[2] = inst_11701);
(statearr_11748_12673[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 23))
{var inst_11688 = (state_11711[13]);var inst_11692 = (state_11711[2]);var inst_11693 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11688);var state_11711__$1 = (function (){var statearr_11749 = state_11711;(statearr_11749[18] = inst_11692);
return statearr_11749;
})();var statearr_11750_12674 = state_11711__$1;(statearr_11750_12674[2] = inst_11693);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11711__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11712 === 24))
{var inst_11690 = (state_11711[12]);var inst_11640 = (state_11711[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11711,23,Object,null,22);var inst_11697 = cljs.core.async.muxch_STAR_.call(null,inst_11690);var state_11711__$1 = state_11711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11711__$1,25,inst_11697,inst_11640);
} else
{if((state_val_11712 === 25))
{var inst_11699 = (state_11711[2]);var state_11711__$1 = state_11711;var statearr_11751_12675 = state_11711__$1;(statearr_11751_12675[2] = inst_11699);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11711__$1);
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
});})(c__7524__auto___12648,mults,ensure_mult,p))
;return ((function (switch__7454__auto__,c__7524__auto___12648,mults,ensure_mult,p){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11755[0] = state_machine__7455__auto__);
(statearr_11755[1] = 1);
return statearr_11755;
});
var state_machine__7455__auto____1 = (function (state_11711){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11711);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11756){if((e11756 instanceof Object))
{var ex__7458__auto__ = e11756;var statearr_11757_12676 = state_11711;(statearr_11757_12676[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11711);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12677 = state_11711;
state_11711 = G__12677;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11711){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12648,mults,ensure_mult,p))
})();var state__7526__auto__ = (function (){var statearr_11758 = f__7525__auto__.call(null);(statearr_11758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12648);
return statearr_11758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12648,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__7524__auto___12678 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11865){var state_val_11866 = (state_11865[1]);if((state_val_11866 === 1))
{var state_11865__$1 = state_11865;var statearr_11867_12679 = state_11865__$1;(statearr_11867_12679[2] = null);
(statearr_11867_12679[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 2))
{var inst_11828 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11829 = 0;var state_11865__$1 = (function (){var statearr_11868 = state_11865;(statearr_11868[7] = inst_11829);
(statearr_11868[8] = inst_11828);
return statearr_11868;
})();var statearr_11869_12680 = state_11865__$1;(statearr_11869_12680[2] = null);
(statearr_11869_12680[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 3))
{var inst_11863 = (state_11865[2]);var state_11865__$1 = state_11865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11865__$1,inst_11863);
} else
{if((state_val_11866 === 4))
{var inst_11829 = (state_11865[7]);var inst_11831 = (inst_11829 < cnt);var state_11865__$1 = state_11865;if(cljs.core.truth_(inst_11831))
{var statearr_11870_12681 = state_11865__$1;(statearr_11870_12681[1] = 6);
} else
{var statearr_11871_12682 = state_11865__$1;(statearr_11871_12682[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 5))
{var inst_11849 = (state_11865[2]);var state_11865__$1 = (function (){var statearr_11872 = state_11865;(statearr_11872[9] = inst_11849);
return statearr_11872;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11865__$1,12,dchan);
} else
{if((state_val_11866 === 6))
{var state_11865__$1 = state_11865;var statearr_11873_12683 = state_11865__$1;(statearr_11873_12683[2] = null);
(statearr_11873_12683[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 7))
{var state_11865__$1 = state_11865;var statearr_11874_12684 = state_11865__$1;(statearr_11874_12684[2] = null);
(statearr_11874_12684[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 8))
{var inst_11847 = (state_11865[2]);var state_11865__$1 = state_11865;var statearr_11875_12685 = state_11865__$1;(statearr_11875_12685[2] = inst_11847);
(statearr_11875_12685[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 9))
{var inst_11829 = (state_11865[7]);var inst_11842 = (state_11865[2]);var inst_11843 = (inst_11829 + 1);var inst_11829__$1 = inst_11843;var state_11865__$1 = (function (){var statearr_11876 = state_11865;(statearr_11876[7] = inst_11829__$1);
(statearr_11876[10] = inst_11842);
return statearr_11876;
})();var statearr_11877_12686 = state_11865__$1;(statearr_11877_12686[2] = null);
(statearr_11877_12686[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 10))
{var inst_11833 = (state_11865[2]);var inst_11834 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11865__$1 = (function (){var statearr_11878 = state_11865;(statearr_11878[11] = inst_11833);
return statearr_11878;
})();var statearr_11879_12687 = state_11865__$1;(statearr_11879_12687[2] = inst_11834);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11865__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 11))
{var inst_11829 = (state_11865[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11865,10,Object,null,9);var inst_11838 = chs__$1.call(null,inst_11829);var inst_11839 = done.call(null,inst_11829);var inst_11840 = cljs.core.async.take_BANG_.call(null,inst_11838,inst_11839);var state_11865__$1 = state_11865;var statearr_11880_12688 = state_11865__$1;(statearr_11880_12688[2] = inst_11840);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11865__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 12))
{var inst_11851 = (state_11865[12]);var inst_11851__$1 = (state_11865[2]);var inst_11852 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11851__$1);var state_11865__$1 = (function (){var statearr_11881 = state_11865;(statearr_11881[12] = inst_11851__$1);
return statearr_11881;
})();if(cljs.core.truth_(inst_11852))
{var statearr_11882_12689 = state_11865__$1;(statearr_11882_12689[1] = 13);
} else
{var statearr_11883_12690 = state_11865__$1;(statearr_11883_12690[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 13))
{var inst_11854 = cljs.core.async.close_BANG_.call(null,out);var state_11865__$1 = state_11865;var statearr_11884_12691 = state_11865__$1;(statearr_11884_12691[2] = inst_11854);
(statearr_11884_12691[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 14))
{var inst_11851 = (state_11865[12]);var inst_11856 = cljs.core.apply.call(null,f,inst_11851);var state_11865__$1 = state_11865;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11865__$1,16,out,inst_11856);
} else
{if((state_val_11866 === 15))
{var inst_11861 = (state_11865[2]);var state_11865__$1 = state_11865;var statearr_11885_12692 = state_11865__$1;(statearr_11885_12692[2] = inst_11861);
(statearr_11885_12692[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11866 === 16))
{var inst_11858 = (state_11865[2]);var state_11865__$1 = (function (){var statearr_11886 = state_11865;(statearr_11886[13] = inst_11858);
return statearr_11886;
})();var statearr_11887_12693 = state_11865__$1;(statearr_11887_12693[2] = null);
(statearr_11887_12693[1] = 2);
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
});})(c__7524__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7454__auto__,c__7524__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11891[0] = state_machine__7455__auto__);
(statearr_11891[1] = 1);
return statearr_11891;
});
var state_machine__7455__auto____1 = (function (state_11865){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11865);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11892){if((e11892 instanceof Object))
{var ex__7458__auto__ = e11892;var statearr_11893_12694 = state_11865;(statearr_11893_12694[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11865);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12695 = state_11865;
state_11865 = G__12695;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11865){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7526__auto__ = (function (){var statearr_11894 = f__7525__auto__.call(null);(statearr_11894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12678);
return statearr_11894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12678,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12696 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12696,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12696,out){
return (function (state_11978){var state_val_11979 = (state_11978[1]);if((state_val_11979 === 1))
{var inst_11949 = cljs.core.vec.call(null,chs);var inst_11950 = inst_11949;var state_11978__$1 = (function (){var statearr_11980 = state_11978;(statearr_11980[7] = inst_11950);
return statearr_11980;
})();var statearr_11981_12697 = state_11978__$1;(statearr_11981_12697[2] = null);
(statearr_11981_12697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11979 === 2))
{var inst_11950 = (state_11978[7]);var inst_11952 = cljs.core.count.call(null,inst_11950);var inst_11953 = (inst_11952 > 0);var state_11978__$1 = state_11978;if(cljs.core.truth_(inst_11953))
{var statearr_11982_12698 = state_11978__$1;(statearr_11982_12698[1] = 4);
} else
{var statearr_11983_12699 = state_11978__$1;(statearr_11983_12699[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11979 === 3))
{var inst_11976 = (state_11978[2]);var state_11978__$1 = state_11978;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11978__$1,inst_11976);
} else
{if((state_val_11979 === 4))
{var inst_11950 = (state_11978[7]);var state_11978__$1 = state_11978;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11978__$1,7,inst_11950);
} else
{if((state_val_11979 === 5))
{var inst_11972 = cljs.core.async.close_BANG_.call(null,out);var state_11978__$1 = state_11978;var statearr_11984_12700 = state_11978__$1;(statearr_11984_12700[2] = inst_11972);
(statearr_11984_12700[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11979 === 6))
{var inst_11974 = (state_11978[2]);var state_11978__$1 = state_11978;var statearr_11985_12701 = state_11978__$1;(statearr_11985_12701[2] = inst_11974);
(statearr_11985_12701[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11979 === 7))
{var inst_11958 = (state_11978[8]);var inst_11957 = (state_11978[9]);var inst_11957__$1 = (state_11978[2]);var inst_11958__$1 = cljs.core.nth.call(null,inst_11957__$1,0,null);var inst_11959 = cljs.core.nth.call(null,inst_11957__$1,1,null);var inst_11960 = (inst_11958__$1 == null);var state_11978__$1 = (function (){var statearr_11986 = state_11978;(statearr_11986[8] = inst_11958__$1);
(statearr_11986[9] = inst_11957__$1);
(statearr_11986[10] = inst_11959);
return statearr_11986;
})();if(cljs.core.truth_(inst_11960))
{var statearr_11987_12702 = state_11978__$1;(statearr_11987_12702[1] = 8);
} else
{var statearr_11988_12703 = state_11978__$1;(statearr_11988_12703[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11979 === 8))
{var inst_11958 = (state_11978[8]);var inst_11957 = (state_11978[9]);var inst_11959 = (state_11978[10]);var inst_11950 = (state_11978[7]);var inst_11962 = (function (){var c = inst_11959;var v = inst_11958;var vec__11955 = inst_11957;var cs = inst_11950;return ((function (c,v,vec__11955,cs,inst_11958,inst_11957,inst_11959,inst_11950,state_val_11979,c__7524__auto___12696,out){
return (function (p1__11895_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11895_SHARP_);
});
;})(c,v,vec__11955,cs,inst_11958,inst_11957,inst_11959,inst_11950,state_val_11979,c__7524__auto___12696,out))
})();var inst_11963 = cljs.core.filterv.call(null,inst_11962,inst_11950);var inst_11950__$1 = inst_11963;var state_11978__$1 = (function (){var statearr_11989 = state_11978;(statearr_11989[7] = inst_11950__$1);
return statearr_11989;
})();var statearr_11990_12704 = state_11978__$1;(statearr_11990_12704[2] = null);
(statearr_11990_12704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11979 === 9))
{var inst_11958 = (state_11978[8]);var state_11978__$1 = state_11978;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11978__$1,11,out,inst_11958);
} else
{if((state_val_11979 === 10))
{var inst_11970 = (state_11978[2]);var state_11978__$1 = state_11978;var statearr_11992_12705 = state_11978__$1;(statearr_11992_12705[2] = inst_11970);
(statearr_11992_12705[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11979 === 11))
{var inst_11950 = (state_11978[7]);var inst_11967 = (state_11978[2]);var tmp11991 = inst_11950;var inst_11950__$1 = tmp11991;var state_11978__$1 = (function (){var statearr_11993 = state_11978;(statearr_11993[11] = inst_11967);
(statearr_11993[7] = inst_11950__$1);
return statearr_11993;
})();var statearr_11994_12706 = state_11978__$1;(statearr_11994_12706[2] = null);
(statearr_11994_12706[1] = 2);
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
});})(c__7524__auto___12696,out))
;return ((function (switch__7454__auto__,c__7524__auto___12696,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11998 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11998[0] = state_machine__7455__auto__);
(statearr_11998[1] = 1);
return statearr_11998;
});
var state_machine__7455__auto____1 = (function (state_11978){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11978);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11999){if((e11999 instanceof Object))
{var ex__7458__auto__ = e11999;var statearr_12000_12707 = state_11978;(statearr_12000_12707[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11978);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12708 = state_11978;
state_11978 = G__12708;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11978){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12696,out))
})();var state__7526__auto__ = (function (){var statearr_12001 = f__7525__auto__.call(null);(statearr_12001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12696);
return statearr_12001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12696,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12709,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12709,out){
return (function (state_12071){var state_val_12072 = (state_12071[1]);if((state_val_12072 === 1))
{var inst_12048 = 0;var state_12071__$1 = (function (){var statearr_12073 = state_12071;(statearr_12073[7] = inst_12048);
return statearr_12073;
})();var statearr_12074_12710 = state_12071__$1;(statearr_12074_12710[2] = null);
(statearr_12074_12710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 2))
{var inst_12048 = (state_12071[7]);var inst_12050 = (inst_12048 < n);var state_12071__$1 = state_12071;if(cljs.core.truth_(inst_12050))
{var statearr_12075_12711 = state_12071__$1;(statearr_12075_12711[1] = 4);
} else
{var statearr_12076_12712 = state_12071__$1;(statearr_12076_12712[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 3))
{var inst_12068 = (state_12071[2]);var inst_12069 = cljs.core.async.close_BANG_.call(null,out);var state_12071__$1 = (function (){var statearr_12077 = state_12071;(statearr_12077[8] = inst_12068);
return statearr_12077;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12071__$1,inst_12069);
} else
{if((state_val_12072 === 4))
{var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12071__$1,7,ch);
} else
{if((state_val_12072 === 5))
{var state_12071__$1 = state_12071;var statearr_12078_12713 = state_12071__$1;(statearr_12078_12713[2] = null);
(statearr_12078_12713[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 6))
{var inst_12066 = (state_12071[2]);var state_12071__$1 = state_12071;var statearr_12079_12714 = state_12071__$1;(statearr_12079_12714[2] = inst_12066);
(statearr_12079_12714[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 7))
{var inst_12053 = (state_12071[9]);var inst_12053__$1 = (state_12071[2]);var inst_12054 = (inst_12053__$1 == null);var inst_12055 = cljs.core.not.call(null,inst_12054);var state_12071__$1 = (function (){var statearr_12080 = state_12071;(statearr_12080[9] = inst_12053__$1);
return statearr_12080;
})();if(inst_12055)
{var statearr_12081_12715 = state_12071__$1;(statearr_12081_12715[1] = 8);
} else
{var statearr_12082_12716 = state_12071__$1;(statearr_12082_12716[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 8))
{var inst_12053 = (state_12071[9]);var state_12071__$1 = state_12071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12071__$1,11,out,inst_12053);
} else
{if((state_val_12072 === 9))
{var state_12071__$1 = state_12071;var statearr_12083_12717 = state_12071__$1;(statearr_12083_12717[2] = null);
(statearr_12083_12717[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 10))
{var inst_12063 = (state_12071[2]);var state_12071__$1 = state_12071;var statearr_12084_12718 = state_12071__$1;(statearr_12084_12718[2] = inst_12063);
(statearr_12084_12718[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12072 === 11))
{var inst_12048 = (state_12071[7]);var inst_12058 = (state_12071[2]);var inst_12059 = (inst_12048 + 1);var inst_12048__$1 = inst_12059;var state_12071__$1 = (function (){var statearr_12085 = state_12071;(statearr_12085[10] = inst_12058);
(statearr_12085[7] = inst_12048__$1);
return statearr_12085;
})();var statearr_12086_12719 = state_12071__$1;(statearr_12086_12719[2] = null);
(statearr_12086_12719[1] = 2);
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
});})(c__7524__auto___12709,out))
;return ((function (switch__7454__auto__,c__7524__auto___12709,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12090 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12090[0] = state_machine__7455__auto__);
(statearr_12090[1] = 1);
return statearr_12090;
});
var state_machine__7455__auto____1 = (function (state_12071){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12071);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12091){if((e12091 instanceof Object))
{var ex__7458__auto__ = e12091;var statearr_12092_12720 = state_12071;(statearr_12092_12720[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12071);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12721 = state_12071;
state_12071 = G__12721;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12071){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12709,out))
})();var state__7526__auto__ = (function (){var statearr_12093 = f__7525__auto__.call(null);(statearr_12093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12709);
return statearr_12093;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12709,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12722 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12722,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12722,out){
return (function (state_12165){var state_val_12166 = (state_12165[1]);if((state_val_12166 === 1))
{var inst_12142 = null;var state_12165__$1 = (function (){var statearr_12167 = state_12165;(statearr_12167[7] = inst_12142);
return statearr_12167;
})();var statearr_12168_12723 = state_12165__$1;(statearr_12168_12723[2] = null);
(statearr_12168_12723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 2))
{var state_12165__$1 = state_12165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12165__$1,4,ch);
} else
{if((state_val_12166 === 3))
{var inst_12162 = (state_12165[2]);var inst_12163 = cljs.core.async.close_BANG_.call(null,out);var state_12165__$1 = (function (){var statearr_12169 = state_12165;(statearr_12169[8] = inst_12162);
return statearr_12169;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12165__$1,inst_12163);
} else
{if((state_val_12166 === 4))
{var inst_12145 = (state_12165[9]);var inst_12145__$1 = (state_12165[2]);var inst_12146 = (inst_12145__$1 == null);var inst_12147 = cljs.core.not.call(null,inst_12146);var state_12165__$1 = (function (){var statearr_12170 = state_12165;(statearr_12170[9] = inst_12145__$1);
return statearr_12170;
})();if(inst_12147)
{var statearr_12171_12724 = state_12165__$1;(statearr_12171_12724[1] = 5);
} else
{var statearr_12172_12725 = state_12165__$1;(statearr_12172_12725[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 5))
{var inst_12142 = (state_12165[7]);var inst_12145 = (state_12165[9]);var inst_12149 = cljs.core._EQ_.call(null,inst_12145,inst_12142);var state_12165__$1 = state_12165;if(inst_12149)
{var statearr_12173_12726 = state_12165__$1;(statearr_12173_12726[1] = 8);
} else
{var statearr_12174_12727 = state_12165__$1;(statearr_12174_12727[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 6))
{var state_12165__$1 = state_12165;var statearr_12176_12728 = state_12165__$1;(statearr_12176_12728[2] = null);
(statearr_12176_12728[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 7))
{var inst_12160 = (state_12165[2]);var state_12165__$1 = state_12165;var statearr_12177_12729 = state_12165__$1;(statearr_12177_12729[2] = inst_12160);
(statearr_12177_12729[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 8))
{var inst_12142 = (state_12165[7]);var tmp12175 = inst_12142;var inst_12142__$1 = tmp12175;var state_12165__$1 = (function (){var statearr_12178 = state_12165;(statearr_12178[7] = inst_12142__$1);
return statearr_12178;
})();var statearr_12179_12730 = state_12165__$1;(statearr_12179_12730[2] = null);
(statearr_12179_12730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 9))
{var inst_12145 = (state_12165[9]);var state_12165__$1 = state_12165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12165__$1,11,out,inst_12145);
} else
{if((state_val_12166 === 10))
{var inst_12157 = (state_12165[2]);var state_12165__$1 = state_12165;var statearr_12180_12731 = state_12165__$1;(statearr_12180_12731[2] = inst_12157);
(statearr_12180_12731[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12166 === 11))
{var inst_12145 = (state_12165[9]);var inst_12154 = (state_12165[2]);var inst_12142 = inst_12145;var state_12165__$1 = (function (){var statearr_12181 = state_12165;(statearr_12181[7] = inst_12142);
(statearr_12181[10] = inst_12154);
return statearr_12181;
})();var statearr_12182_12732 = state_12165__$1;(statearr_12182_12732[2] = null);
(statearr_12182_12732[1] = 2);
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
});})(c__7524__auto___12722,out))
;return ((function (switch__7454__auto__,c__7524__auto___12722,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12186 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12186[0] = state_machine__7455__auto__);
(statearr_12186[1] = 1);
return statearr_12186;
});
var state_machine__7455__auto____1 = (function (state_12165){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12165);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12187){if((e12187 instanceof Object))
{var ex__7458__auto__ = e12187;var statearr_12188_12733 = state_12165;(statearr_12188_12733[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12165);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12734 = state_12165;
state_12165 = G__12734;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12165){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12722,out))
})();var state__7526__auto__ = (function (){var statearr_12189 = f__7525__auto__.call(null);(statearr_12189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12722);
return statearr_12189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12722,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12735 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12735,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12735,out){
return (function (state_12294){var state_val_12295 = (state_12294[1]);if((state_val_12295 === 1))
{var inst_12257 = (new Array(n));var inst_12258 = inst_12257;var inst_12259 = 0;var state_12294__$1 = (function (){var statearr_12296 = state_12294;(statearr_12296[7] = inst_12259);
(statearr_12296[8] = inst_12258);
return statearr_12296;
})();var statearr_12297_12736 = state_12294__$1;(statearr_12297_12736[2] = null);
(statearr_12297_12736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12295 === 2))
{var state_12294__$1 = state_12294;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12294__$1,4,ch);
} else
{if((state_val_12295 === 3))
{var inst_12292 = (state_12294[2]);var state_12294__$1 = state_12294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12294__$1,inst_12292);
} else
{if((state_val_12295 === 4))
{var inst_12262 = (state_12294[9]);var inst_12262__$1 = (state_12294[2]);var inst_12263 = (inst_12262__$1 == null);var inst_12264 = cljs.core.not.call(null,inst_12263);var state_12294__$1 = (function (){var statearr_12298 = state_12294;(statearr_12298[9] = inst_12262__$1);
return statearr_12298;
})();if(inst_12264)
{var statearr_12299_12737 = state_12294__$1;(statearr_12299_12737[1] = 5);
} else
{var statearr_12300_12738 = state_12294__$1;(statearr_12300_12738[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12295 === 5))
{var inst_12262 = (state_12294[9]);var inst_12259 = (state_12294[7]);var inst_12267 = (state_12294[10]);var inst_12258 = (state_12294[8]);var inst_12266 = (inst_12258[inst_12259] = inst_12262);var inst_12267__$1 = (inst_12259 + 1);var inst_12268 = (inst_12267__$1 < n);var state_12294__$1 = (function (){var statearr_12301 = state_12294;(statearr_12301[10] = inst_12267__$1);
(statearr_12301[11] = inst_12266);
return statearr_12301;
})();if(cljs.core.truth_(inst_12268))
{var statearr_12302_12739 = state_12294__$1;(statearr_12302_12739[1] = 8);
} else
{var statearr_12303_12740 = state_12294__$1;(statearr_12303_12740[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12295 === 6))
{var inst_12259 = (state_12294[7]);var inst_12280 = (inst_12259 > 0);var state_12294__$1 = state_12294;if(cljs.core.truth_(inst_12280))
{var statearr_12305_12741 = state_12294__$1;(statearr_12305_12741[1] = 12);
} else
{var statearr_12306_12742 = state_12294__$1;(statearr_12306_12742[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12295 === 7))
{var inst_12290 = (state_12294[2]);var state_12294__$1 = state_12294;var statearr_12307_12743 = state_12294__$1;(statearr_12307_12743[2] = inst_12290);
(statearr_12307_12743[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12295 === 8))
{var inst_12267 = (state_12294[10]);var inst_12258 = (state_12294[8]);var tmp12304 = inst_12258;var inst_12258__$1 = tmp12304;var inst_12259 = inst_12267;var state_12294__$1 = (function (){var statearr_12308 = state_12294;(statearr_12308[7] = inst_12259);
(statearr_12308[8] = inst_12258__$1);
return statearr_12308;
})();var statearr_12309_12744 = state_12294__$1;(statearr_12309_12744[2] = null);
(statearr_12309_12744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12295 === 9))
{var inst_12258 = (state_12294[8]);var inst_12272 = cljs.core.vec.call(null,inst_12258);var state_12294__$1 = state_12294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12294__$1,11,out,inst_12272);
} else
{if((state_val_12295 === 10))
{var inst_12278 = (state_12294[2]);var state_12294__$1 = state_12294;var statearr_12310_12745 = state_12294__$1;(statearr_12310_12745[2] = inst_12278);
(statearr_12310_12745[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12295 === 11))
{var inst_12274 = (state_12294[2]);var inst_12275 = (new Array(n));var inst_12258 = inst_12275;var inst_12259 = 0;var state_12294__$1 = (function (){var statearr_12311 = state_12294;(statearr_12311[12] = inst_12274);
(statearr_12311[7] = inst_12259);
(statearr_12311[8] = inst_12258);
return statearr_12311;
})();var statearr_12312_12746 = state_12294__$1;(statearr_12312_12746[2] = null);
(statearr_12312_12746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12295 === 12))
{var inst_12258 = (state_12294[8]);var inst_12282 = cljs.core.vec.call(null,inst_12258);var state_12294__$1 = state_12294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12294__$1,15,out,inst_12282);
} else
{if((state_val_12295 === 13))
{var state_12294__$1 = state_12294;var statearr_12313_12747 = state_12294__$1;(statearr_12313_12747[2] = null);
(statearr_12313_12747[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12295 === 14))
{var inst_12287 = (state_12294[2]);var inst_12288 = cljs.core.async.close_BANG_.call(null,out);var state_12294__$1 = (function (){var statearr_12314 = state_12294;(statearr_12314[13] = inst_12287);
return statearr_12314;
})();var statearr_12315_12748 = state_12294__$1;(statearr_12315_12748[2] = inst_12288);
(statearr_12315_12748[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12295 === 15))
{var inst_12284 = (state_12294[2]);var state_12294__$1 = state_12294;var statearr_12316_12749 = state_12294__$1;(statearr_12316_12749[2] = inst_12284);
(statearr_12316_12749[1] = 14);
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
});})(c__7524__auto___12735,out))
;return ((function (switch__7454__auto__,c__7524__auto___12735,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12320[0] = state_machine__7455__auto__);
(statearr_12320[1] = 1);
return statearr_12320;
});
var state_machine__7455__auto____1 = (function (state_12294){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12294);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12321){if((e12321 instanceof Object))
{var ex__7458__auto__ = e12321;var statearr_12322_12750 = state_12294;(statearr_12322_12750[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12294);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12751 = state_12294;
state_12294 = G__12751;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12294){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12735,out))
})();var state__7526__auto__ = (function (){var statearr_12323 = f__7525__auto__.call(null);(statearr_12323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12735);
return statearr_12323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12735,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12752 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12752,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12752,out){
return (function (state_12436){var state_val_12437 = (state_12436[1]);if((state_val_12437 === 1))
{var inst_12395 = [];var inst_12396 = inst_12395;var inst_12397 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12436__$1 = (function (){var statearr_12438 = state_12436;(statearr_12438[7] = inst_12396);
(statearr_12438[8] = inst_12397);
return statearr_12438;
})();var statearr_12439_12753 = state_12436__$1;(statearr_12439_12753[2] = null);
(statearr_12439_12753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 2))
{var state_12436__$1 = state_12436;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12436__$1,4,ch);
} else
{if((state_val_12437 === 3))
{var inst_12434 = (state_12436[2]);var state_12436__$1 = state_12436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12436__$1,inst_12434);
} else
{if((state_val_12437 === 4))
{var inst_12400 = (state_12436[9]);var inst_12400__$1 = (state_12436[2]);var inst_12401 = (inst_12400__$1 == null);var inst_12402 = cljs.core.not.call(null,inst_12401);var state_12436__$1 = (function (){var statearr_12440 = state_12436;(statearr_12440[9] = inst_12400__$1);
return statearr_12440;
})();if(inst_12402)
{var statearr_12441_12754 = state_12436__$1;(statearr_12441_12754[1] = 5);
} else
{var statearr_12442_12755 = state_12436__$1;(statearr_12442_12755[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 5))
{var inst_12397 = (state_12436[8]);var inst_12404 = (state_12436[10]);var inst_12400 = (state_12436[9]);var inst_12404__$1 = f.call(null,inst_12400);var inst_12405 = cljs.core._EQ_.call(null,inst_12404__$1,inst_12397);var inst_12406 = cljs.core.keyword_identical_QMARK_.call(null,inst_12397,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12407 = (inst_12405) || (inst_12406);var state_12436__$1 = (function (){var statearr_12443 = state_12436;(statearr_12443[10] = inst_12404__$1);
return statearr_12443;
})();if(cljs.core.truth_(inst_12407))
{var statearr_12444_12756 = state_12436__$1;(statearr_12444_12756[1] = 8);
} else
{var statearr_12445_12757 = state_12436__$1;(statearr_12445_12757[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 6))
{var inst_12396 = (state_12436[7]);var inst_12421 = inst_12396.length;var inst_12422 = (inst_12421 > 0);var state_12436__$1 = state_12436;if(cljs.core.truth_(inst_12422))
{var statearr_12447_12758 = state_12436__$1;(statearr_12447_12758[1] = 12);
} else
{var statearr_12448_12759 = state_12436__$1;(statearr_12448_12759[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 7))
{var inst_12432 = (state_12436[2]);var state_12436__$1 = state_12436;var statearr_12449_12760 = state_12436__$1;(statearr_12449_12760[2] = inst_12432);
(statearr_12449_12760[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 8))
{var inst_12396 = (state_12436[7]);var inst_12404 = (state_12436[10]);var inst_12400 = (state_12436[9]);var inst_12409 = inst_12396.push(inst_12400);var tmp12446 = inst_12396;var inst_12396__$1 = tmp12446;var inst_12397 = inst_12404;var state_12436__$1 = (function (){var statearr_12450 = state_12436;(statearr_12450[7] = inst_12396__$1);
(statearr_12450[8] = inst_12397);
(statearr_12450[11] = inst_12409);
return statearr_12450;
})();var statearr_12451_12761 = state_12436__$1;(statearr_12451_12761[2] = null);
(statearr_12451_12761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 9))
{var inst_12396 = (state_12436[7]);var inst_12412 = cljs.core.vec.call(null,inst_12396);var state_12436__$1 = state_12436;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12436__$1,11,out,inst_12412);
} else
{if((state_val_12437 === 10))
{var inst_12419 = (state_12436[2]);var state_12436__$1 = state_12436;var statearr_12452_12762 = state_12436__$1;(statearr_12452_12762[2] = inst_12419);
(statearr_12452_12762[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 11))
{var inst_12404 = (state_12436[10]);var inst_12400 = (state_12436[9]);var inst_12414 = (state_12436[2]);var inst_12415 = [];var inst_12416 = inst_12415.push(inst_12400);var inst_12396 = inst_12415;var inst_12397 = inst_12404;var state_12436__$1 = (function (){var statearr_12453 = state_12436;(statearr_12453[7] = inst_12396);
(statearr_12453[8] = inst_12397);
(statearr_12453[12] = inst_12414);
(statearr_12453[13] = inst_12416);
return statearr_12453;
})();var statearr_12454_12763 = state_12436__$1;(statearr_12454_12763[2] = null);
(statearr_12454_12763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 12))
{var inst_12396 = (state_12436[7]);var inst_12424 = cljs.core.vec.call(null,inst_12396);var state_12436__$1 = state_12436;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12436__$1,15,out,inst_12424);
} else
{if((state_val_12437 === 13))
{var state_12436__$1 = state_12436;var statearr_12455_12764 = state_12436__$1;(statearr_12455_12764[2] = null);
(statearr_12455_12764[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 14))
{var inst_12429 = (state_12436[2]);var inst_12430 = cljs.core.async.close_BANG_.call(null,out);var state_12436__$1 = (function (){var statearr_12456 = state_12436;(statearr_12456[14] = inst_12429);
return statearr_12456;
})();var statearr_12457_12765 = state_12436__$1;(statearr_12457_12765[2] = inst_12430);
(statearr_12457_12765[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12437 === 15))
{var inst_12426 = (state_12436[2]);var state_12436__$1 = state_12436;var statearr_12458_12766 = state_12436__$1;(statearr_12458_12766[2] = inst_12426);
(statearr_12458_12766[1] = 14);
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
});})(c__7524__auto___12752,out))
;return ((function (switch__7454__auto__,c__7524__auto___12752,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12462[0] = state_machine__7455__auto__);
(statearr_12462[1] = 1);
return statearr_12462;
});
var state_machine__7455__auto____1 = (function (state_12436){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12436);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12463){if((e12463 instanceof Object))
{var ex__7458__auto__ = e12463;var statearr_12464_12767 = state_12436;(statearr_12464_12767[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12436);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12768 = state_12436;
state_12436 = G__12768;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12436){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12752,out))
})();var state__7526__auto__ = (function (){var statearr_12465 = f__7525__auto__.call(null);(statearr_12465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12752);
return statearr_12465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12752,out))
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
goog.require('lt.util.dom');
goog.require('cljs.core.async');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.autocompleter.core.curr_time = (function curr_time(){return (new Date()).getTime();
});
lt.plugins.autocompleter.core.elapsed = (function elapsed(start){return [cljs.core.str((lt.plugins.autocompleter.core.curr_time.call(null) - start)),cljs.core.str(" ms")].join('');
});
lt.plugins.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),false,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__15725_SHARP_,p2__15724_SHARP_){return p2__15724_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__15727_SHARP_,p2__15726_SHARP_){return p2__15726_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (p1__15729_SHARP_,p2__15728_SHARP_){return p2__15728_SHARP_.pick.call(null);
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (p1__15731_SHARP_,p2__15730_SHARP_){return p2__15730_SHARP_.pick.call(null);
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__15733_SHARP_,p2__15732_SHARP_){return p2__15732_SHARP_.close.call(null);
})], null)], null);
lt.plugins.autocompleter.core.distinct_completions = (function distinct_completions(hints){var seen = {};return cljs.core.filter.call(null,((function (seen){
return (function (hint){if((seen[new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(hint)]) === true)
{return false;
} else
{return (seen[new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(hint)] = true);
}
});})(seen))
,hints);
});
/**
* Prepare found hints for display through CM showHint
*/
lt.plugins.autocompleter.core.process_hint_results = (function process_hint_results(hints){if(cljs.core.seq.call(null,hints))
{return cljs.core.clj__GT_js.call(null,(function (p1__15735_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__15735_SHARP_));return cljs.core.assoc.call(null,p1__15735_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"text","text",1017460895),lt.plugins.autocompleter.core.distinct_completions.call(null,cljs.core.filter.call(null,(function (p1__15734_SHARP_){return (new cljs.core.Keyword(null,"displayText","displayText",2728236161).cljs$core$IFn$_invoke$arity$1(p1__15734_SHARP_).length < 1000);
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
return (function (state_15821){var state_val_15822 = (state_15821[1]);if((state_val_15822 === 1))
{var inst_15790 = cljs.core.conj.call(null,channels,t);var inst_15791 = cljs.core.PersistentVector.EMPTY;var inst_15792 = inst_15790;var state_15821__$1 = (function (){var statearr_15823 = state_15821;(statearr_15823[7] = inst_15792);
(statearr_15823[8] = inst_15791);
return statearr_15823;
})();var statearr_15824_15845 = state_15821__$1;(statearr_15824_15845[2] = null);
(statearr_15824_15845[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15822 === 2))
{var inst_15792 = (state_15821[7]);var inst_15794 = cljs.core.count.call(null,inst_15792);var inst_15795 = cljs.core._EQ_.call(null,1,inst_15794);var state_15821__$1 = state_15821;if(inst_15795)
{var statearr_15825_15846 = state_15821__$1;(statearr_15825_15846[1] = 4);
} else
{var statearr_15826_15847 = state_15821__$1;(statearr_15826_15847[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15822 === 3))
{var inst_15819 = (state_15821[2]);var state_15821__$1 = state_15821;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15821__$1,inst_15819);
} else
{if((state_val_15822 === 4))
{var inst_15791 = (state_15821[8]);var inst_15797 = lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"show-hint-results","show-hint-results",3654108914),inst_15791);var state_15821__$1 = state_15821;var statearr_15827_15848 = state_15821__$1;(statearr_15827_15848[2] = inst_15797);
(statearr_15827_15848[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15822 === 5))
{var inst_15792 = (state_15821[7]);var state_15821__$1 = state_15821;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15821__$1,7,inst_15792);
} else
{if((state_val_15822 === 6))
{var inst_15817 = (state_15821[2]);var state_15821__$1 = state_15821;var statearr_15828_15849 = state_15821__$1;(statearr_15828_15849[2] = inst_15817);
(statearr_15828_15849[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15822 === 7))
{var inst_15803 = (state_15821[9]);var inst_15801 = (state_15821[2]);var inst_15802 = cljs.core.nth.call(null,inst_15801,0,null);var inst_15803__$1 = cljs.core.nth.call(null,inst_15801,1,null);var inst_15804 = (inst_15803__$1 === t);var state_15821__$1 = (function (){var statearr_15829 = state_15821;(statearr_15829[10] = inst_15802);
(statearr_15829[9] = inst_15803__$1);
return statearr_15829;
})();if(cljs.core.truth_(inst_15804))
{var statearr_15830_15850 = state_15821__$1;(statearr_15830_15850[1] = 8);
} else
{var statearr_15831_15851 = state_15821__$1;(statearr_15831_15851[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15822 === 8))
{var inst_15791 = (state_15821[8]);var inst_15806 = cljs.core.println.call(null,"WARNING: Timeout waiting from channel results");var inst_15807 = lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"show-hint-results","show-hint-results",3654108914),inst_15791);var state_15821__$1 = (function (){var statearr_15832 = state_15821;(statearr_15832[11] = inst_15806);
return statearr_15832;
})();var statearr_15833_15852 = state_15821__$1;(statearr_15833_15852[2] = inst_15807);
(statearr_15833_15852[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15822 === 9))
{var inst_15802 = (state_15821[10]);var inst_15803 = (state_15821[9]);var inst_15792 = (state_15821[7]);var inst_15791 = (state_15821[8]);var inst_15809 = cljs.core.into.call(null,inst_15791,inst_15802);var inst_15810 = [inst_15803];var inst_15811 = cljs.core.PersistentHashSet.fromArray.call(null,inst_15810,true);var inst_15812 = cljs.core.remove.call(null,inst_15811,inst_15792);var inst_15791__$1 = inst_15809;var inst_15792__$1 = inst_15812;var state_15821__$1 = (function (){var statearr_15834 = state_15821;(statearr_15834[7] = inst_15792__$1);
(statearr_15834[8] = inst_15791__$1);
return statearr_15834;
})();var statearr_15835_15853 = state_15821__$1;(statearr_15835_15853[2] = null);
(statearr_15835_15853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15822 === 10))
{var inst_15815 = (state_15821[2]);var state_15821__$1 = state_15821;var statearr_15836_15854 = state_15821__$1;(statearr_15836_15854[2] = inst_15815);
(statearr_15836_15854[1] = 6);
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
var state_machine__7455__auto____0 = (function (){var statearr_15840 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15840[0] = state_machine__7455__auto__);
(statearr_15840[1] = 1);
return statearr_15840;
});
var state_machine__7455__auto____1 = (function (state_15821){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_15821);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e15841){if((e15841 instanceof Object))
{var ex__7458__auto__ = e15841;var statearr_15842_15855 = state_15821;(statearr_15842_15855[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15821);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15856 = state_15821;
state_15821 = G__15856;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_15821){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_15821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__,t))
})();var state__7526__auto__ = (function (){var statearr_15843 = f__7525__auto__.call(null);(statearr_15843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_15843;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto__,t))
);
return c__7524__auto__;
});
lt.plugins.autocompleter.core.pos_obj__GT_pos = (function pos_obj__GT_pos(p){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),p.ch,new cljs.core.Keyword(null,"line","line",1017226086),p.line], null);
});
lt.plugins.autocompleter.core.from_cm_hints = (function from_cm_hints(res_obj){if(cljs.core.truth_(res_obj))
{var res = cljs.core.js__GT_clj.call(null,res_obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var from = lt.plugins.autocompleter.core.pos_obj__GT_pos.call(null,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(res));var to = lt.plugins.autocompleter.core.pos_obj__GT_pos.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(res));var sym = lt.objs.editor.range.call(null,lt.objs.editor.pool.last_active.call(null),from,to);if(cljs.core.seq.call(null,sym.trim()))
{return cljs.core.map.call(null,((function (res,from,to,sym){
return (function (p1__15844_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[p1__15844_SHARP_,p1__15844_SHARP_,((function (res,from,to,sym){
return (function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": sym}));
});})(res,from,to,sym))
,from,to]);
});})(res,from,to,sym))
,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(res));
} else
{return null;
}
} else
{return null;
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
lt.plugins.autocompleter.core.cm_hinter = (function cm_hinter(ed,channels,hinter_fn){if(lt.plugins.autocompleter.core.should_hint_QMARK_.call(null,ed))
{var ch = cljs.core.async.chan.call(null);var hints = lt.plugins.autocompleter.core.from_cm_hints.call(null,hinter_fn.call(null,lt.objs.editor.__GT_cm_ed.call(null,ed)));if(cljs.core.seq.call(null,hints))
{cljs.core.async.put_BANG_.call(null,ch,hints);
return cljs.core.conj.call(null,channels,ch);
} else
{return channels;
}
} else
{return channels;
}
});
lt.plugins.autocompleter.core.__BEH__javascript_hints = (function __BEH__javascript_hints(ed,channels){return lt.plugins.autocompleter.core.cm_hinter.call(null,ed,channels,(function (cm_ed){return CodeMirror.hint.javascript(cm_ed);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","javascript-hints","lt.plugins.autocompleter.core/javascript-hints",1809003230),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__javascript_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: JavaScript Hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),null], null), null));
lt.plugins.autocompleter.core.__BEH__anyword_hints = (function __BEH__anyword_hints(ed,channels){return lt.plugins.autocompleter.core.cm_hinter.call(null,ed,channels,(function (cm_ed){return CodeMirror.hint.anyword(cm_ed);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","anyword-hints","lt.plugins.autocompleter.core/anyword-hints",1169070757),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__anyword_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Anyword Hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),null], null), null));
lt.plugins.autocompleter.core.__BEH__show_hint_results = (function __BEH__show_hint_results(ed,hints){lt.plugins.autocompleter.core.maybe_close_hinter.call(null,ed);
var temp__4092__auto__ = lt.plugins.autocompleter.core.process_hint_results.call(null,hints);if(cljs.core.truth_(temp__4092__auto__))
{var processed_hints = temp__4092__auto__;return CodeMirror.showHint(lt.objs.editor.__GT_cm_ed.call(null,ed),((function (processed_hints,temp__4092__auto__){
return (function (){return processed_hints;
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
{return lt.plugins.autocompleter.core.maybe_close_hinter.call(null,ed);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","start-hinting","lt.plugins.autocompleter.core/start-hinting",2636185018),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__start_hinting,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Start hinting",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-hinting","start-hinting",3115741442),null], null), null));
lt.plugins.autocompleter.core.__BEH__auto_show_on_input = (function __BEH__auto_show_on_input(ed,_,ch){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"start-hinting","start-hinting",3115741442));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.core","auto-show-on-input","lt.plugins.autocompleter.core/auto-show-on-input",3736321980),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.core.__BEH__auto_show_on_input,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Show on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",1114262332),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.autocompleter.async-dummy')) {
goog.provide('lt.plugins.autocompleter.async_dummy');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('lt.util.js');
goog.require('lt.plugins.autocompleter.core');
goog.require('lt.util.js');
goog.require('lt.util.dom');
goog.require('cljs.core.async');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.autocompleter.core');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.autocompleter.async_dummy.chan_id = (function chan_id(ch){return (lt.plugins.autocompleter.core.curr_time.call(null) + cljs.core.hash.call(null,ch));
});
lt.plugins.autocompleter.async_dummy.store_ch = (function store_ch(ed,ch){var chs = (function (){var or__4884__auto__ = new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var ch_id = lt.plugins.autocompleter.async_dummy.chan_id.call(null,ch);lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168)], null),cljs.core.assoc.call(null,chs,ch_id,ch));
return ch_id;
});
lt.plugins.autocompleter.async_dummy.get_ch = (function get_ch(ed,ch_id){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168),ch_id], null));
});
lt.plugins.autocompleter.async_dummy.remove_ch = (function remove_ch(ed,ch_id){var chs = (function (){var or__4884__auto__ = new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168)], null),cljs.core.dissoc.call(null,chs,ch_id));
});
lt.plugins.autocompleter.async_dummy.background_worker = lt.objs.thread.thread_STAR_.call(null,(function tfun15587(){var orig__9921__auto__ = argsArray(arguments);var msg__9922__auto__ = orig__9921__auto__.shift();var args__9923__auto__ = orig__9921__auto__.map(cljs.reader.read_string);var raise = ((function (orig__9921__auto__,msg__9922__auto__,args__9923__auto__){
return (function (obj__9924__auto__,k__9925__auto__,v__9926__auto__){return _send(obj__9924__auto__,k__9925__auto__,cljs.core.pr_str.call(null,v__9926__auto__),"clj");
});})(orig__9921__auto__,msg__9922__auto__,args__9923__auto__))
;args__9923__auto__.unshift(msg__9922__auto__.obj);
return ((function (orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise){
return (function (obj_id,token,ch_id){return setTimeout(((function (orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise){
return (function (){var all_hints = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["map","map-indexed","map-reduce","max","min"], null);var starts_with = ((function (all_hints,orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise){
return (function (p1__15584_SHARP_,p2__15585_SHARP_){return cljs.core._EQ_.call(null,0,p1__15584_SHARP_.indexOf(p2__15585_SHARP_));
});})(all_hints,orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise))
;var sym = new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token);return _send(obj_id,new cljs.core.Keyword(null,"async-hint-results","async-hint-results",1351910867),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sym","sym",1014018617),sym,new cljs.core.Keyword(null,"chid","chid",1016956850),ch_id,new cljs.core.Keyword(null,"list","list",1017226256),cljs.core.filter.call(null,((function (all_hints,starts_with,sym,orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise){
return (function (p1__15586_SHARP_){return starts_with.call(null,p1__15586_SHARP_,sym);
});})(all_hints,starts_with,sym,orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise))
,all_hints),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null)], null)));
});})(orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise))
,(100 + cljs.core.rand_int.call(null,1)));
});})(orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise))
.apply(null,args__9923__auto__);
}));
lt.plugins.autocompleter.async_dummy.__GT_hints = (function __GT_hints(ed,res_obj){var map__15590 = cljs.core.js__GT_clj.call(null,res_obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var map__15590__$1 = ((cljs.core.seq_QMARK_.call(null,map__15590))?cljs.core.apply.call(null,cljs.core.hash_map,map__15590):map__15590);var res = map__15590__$1;var to = cljs.core.get.call(null,map__15590__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__15590__$1,new cljs.core.Keyword(null,"from","from",1017056028));var sym = cljs.core.get.call(null,map__15590__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));return cljs.core.map.call(null,((function (map__15590,map__15590__$1,res,to,from,sym){
return (function (p1__15588_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[p1__15588_SHARP_,p1__15588_SHARP_,((function (map__15590,map__15590__$1,res,to,from,sym){
return (function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": sym}));
});})(map__15590,map__15590__$1,res,to,from,sym))
,from,to]);
});})(map__15590,map__15590__$1,res,to,from,sym))
,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(res));
});
lt.plugins.autocompleter.async_dummy.__BEH__async_hint_results = (function __BEH__async_hint_results(ed,res){var temp__4092__auto__ = lt.plugins.autocompleter.async_dummy.get_ch.call(null,ed,res.chid);if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;cljs.core.async.put_BANG_.call(null,ch,lt.plugins.autocompleter.async_dummy.__GT_hints.call(null,ed,res));
return lt.plugins.autocompleter.async_dummy.remove_ch.call(null,ed,res.chid);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.async-dummy","async-hint-results","lt.plugins.autocompleter.async-dummy/async-hint-results",3853075167),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.async_dummy.__BEH__async_hint_results,new cljs.core.Keyword(null,"desc","desc",1016984067),"Async dummy: Hint results",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-hint-results","async-hint-results",1351910867),null], null), null));
lt.plugins.autocompleter.async_dummy.__BEH__async_hints = (function __BEH__async_hints(ed,channels){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var token = cljs.core.assoc.call(null,lt.plugins.autocompleter.core.get_token.call(null,ed),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos));var ch = cljs.core.async.chan.call(null);if(lt.plugins.autocompleter.core.should_hint_QMARK_.call(null,ed))
{var ch_id = lt.plugins.autocompleter.async_dummy.store_ch.call(null,ed,ch);lt.plugins.autocompleter.async_dummy.background_worker.call(null,ed,token,ch_id,lt.plugins.autocompleter.core.curr_time.call(null));
return cljs.core.conj.call(null,channels,ch);
} else
{return channels;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.async-dummy","async-hints","lt.plugins.autocompleter.async-dummy/async-hints",1880154373),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.async_dummy.__BEH__async_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Async dummy hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),null], null), null));
}

//# sourceMappingURL=autocompleter_compiled.js.map