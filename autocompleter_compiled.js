if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj12874 = {};return obj12874;
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
cljs.core.async.impl.protocols.WritePort = (function (){var obj12876 = {};return obj12876;
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
cljs.core.async.impl.protocols.Channel = (function (){var obj12878 = {};return obj12878;
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
cljs.core.async.impl.protocols.Handler = (function (){var obj12880 = {};return obj12880;
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
cljs.core.async.impl.protocols.Buffer = (function (){var obj12882 = {};return obj12882;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj12884 = {};return obj12884;
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
var G__12839 = (cnt + 1);
cnt = G__12839;
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
{var v_12840 = this$.pop();if(keep_QMARK_.call(null,v_12840))
{this$.unshift(v_12840);
} else
{}
{
var G__12841 = (x + 1);
x = G__12841;
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
var count_12870 = 0;while(true){
var m_12871 = cljs.core.async.impl.dispatch.tasks.pop();if((m_12871 == null))
{} else
{m_12871.call(null);
if((count_12870 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__12872 = (count_12870 + 1);
count_12870 = G__12872;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t12845 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t12845 = (function (val,box,meta12846){
this.val = val;
this.box = box;
this.meta12846 = meta12846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t12845.cljs$lang$type = true;
cljs.core.async.impl.channels.t12845.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t12845";
cljs.core.async.impl.channels.t12845.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.channels/t12845");
});
cljs.core.async.impl.channels.t12845.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t12845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12847){var self__ = this;
var _12847__$1 = this;return self__.meta12846;
});
cljs.core.async.impl.channels.t12845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12847,meta12846__$1){var self__ = this;
var _12847__$1 = this;return (new cljs.core.async.impl.channels.t12845(self__.val,self__.box,meta12846__$1));
});
cljs.core.async.impl.channels.__GT_t12845 = (function __GT_t12845(val__$1,box__$1,meta12846){return (new cljs.core.async.impl.channels.t12845(val__$1,box__$1,meta12846));
});
}
return (new cljs.core.async.impl.channels.t12845(val,box,null));
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
var taker_12858 = self__.takes.pop();if((taker_12858 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_12858))
{var take_cb_12859 = cljs.core.async.impl.protocols.commit.call(null,taker_12858);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_12859,taker_12858,this$__$1){
return (function (){return take_cb_12859.call(null,null);
});})(take_cb_12859,taker_12858,this$__$1))
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
var G__12905 = (level + 1);
level = G__12905;
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_12906 = 0;while(true){
if((i_12906 < arr.length))
{(arr[i_12906] = null);
{
var G__12907 = (i_12906 + 1);
i_12906 = G__12907;
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
var G__12908 = x_SINGLEQUOTE_;
x__$1 = G__12908;
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
var G__12909 = x__$1;
var G__12910 = k;
var G__12911 = (level - 1);
var G__12912 = update;
x = G__12909;
k = G__12910;
level = G__12911;
update = G__12912;
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
{var i_12913 = (self__.level + 1);while(true){
if((i_12913 <= (new_level + 1)))
{(update[i_12913] = self__.header);
{
var G__12914 = (i_12913 + 1);
i_12913 = G__12914;
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
{var i_12915 = 0;while(true){
if((i_12915 <= self__.level))
{var links_12916 = (update[i_12915]).forward;if(((links_12916[i_12915]) === x__$1))
{(links_12916[i_12915] = (x__$1.forward[i_12915]));
{
var G__12917 = (i_12915 + 1);
i_12915 = G__12917;
continue;
}
} else
{{
var G__12918 = (i_12915 + 1);
i_12915 = G__12918;
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
var G__12919 = x_SINGLEQUOTE_;
x__$1 = G__12919;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__12920 = nx;
var G__12921 = (level__$1 - 1);
x = G__12920;
level__$1 = G__12921;
continue;
}
} else
{{
var G__12922 = x;
var G__12923 = (level__$1 - 1);
x = G__12922;
level__$1 = G__12923;
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
var G__12924 = x_SINGLEQUOTE_;
x__$1 = G__12924;
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
var G__12925 = nx;
var G__12926 = (level__$1 - 1);
x = G__12925;
level__$1 = G__12926;
continue;
}
} else
{{
var G__12927 = x;
var G__12928 = (level__$1 - 1);
x = G__12927;
level__$1 = G__12928;
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t12769 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t12769 = (function (f,fn_handler,meta12770){
this.f = f;
this.fn_handler = fn_handler;
this.meta12770 = meta12770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t12769.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t12769.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t12769";
cljs.core.async.impl.ioc_helpers.t12769.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async.impl.ioc-helpers/t12769");
});
cljs.core.async.impl.ioc_helpers.t12769.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t12769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t12769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t12769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12771){var self__ = this;
var _12771__$1 = this;return self__.meta12770;
});
cljs.core.async.impl.ioc_helpers.t12769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12771,meta12770__$1){var self__ = this;
var _12771__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t12769(self__.f,self__.fn_handler,meta12770__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t12769 = (function __GT_t12769(f__$1,fn_handler__$1,meta12770){return (new cljs.core.async.impl.ioc_helpers.t12769(f__$1,fn_handler__$1,meta12770));
});
}
return (new cljs.core.async.impl.ioc_helpers.t12769(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e12773){if((e12773 instanceof Object))
{var ex = e12773;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12773;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_12776_12819 = state;(statearr_12776_12819[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_12776_12819[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_12777_12820 = state;(statearr_12777_12820[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_12777_12820[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_12780_12821 = state;(statearr_12780_12821[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_12780_12821[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_12781_12822 = state;(statearr_12781_12822[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_12781_12822[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12782){var map__12787 = p__12782;var map__12787__$1 = ((cljs.core.seq_QMARK_.call(null,map__12787))?cljs.core.apply.call(null,cljs.core.hash_map,map__12787):map__12787);var opts = map__12787__$1;var statearr_12788_12823 = state;(statearr_12788_12823[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__12787,map__12787__$1,opts){
return (function (val){var statearr_12789_12824 = state;(statearr_12789_12824[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12787,map__12787__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_12790_12825 = state;(statearr_12790_12825[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12782 = null;if (arguments.length > 3) {
  p__12782 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12782);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12826){
var state = cljs.core.first(arglist__12826);
arglist__12826 = cljs.core.next(arglist__12826);
var cont_block = cljs.core.first(arglist__12826);
arglist__12826 = cljs.core.next(arglist__12826);
var ports = cljs.core.first(arglist__12826);
var p__12782 = cljs.core.rest(arglist__12826);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12782);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12792,else__5473__auto__){var self__ = this;
var this__5472__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k12792,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12792,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12792,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12792,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k12792,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k12792,else__5473__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12791){var self__ = this;
var this__5477__auto____$1 = this;var pred__12794 = cljs.core.keyword_identical_QMARK_;var expr__12795 = k__5478__auto__;if(cljs.core.truth_(pred__12794.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__12795)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__12791,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12794.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__12795)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__12791,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12794.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__12795)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__12791,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12794.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__12795)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__12791,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__12794.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__12795)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__12791,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12791),null));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12791){var self__ = this;
var this__5469__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__12791,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__12793){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__12793),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__12793),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__12793),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__12793),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__12793),null,cljs.core.dissoc.call(null,G__12793,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_12798 = state;(statearr_12798[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_12798;
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
{var statearr_12804 = state;(statearr_12804[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_12804[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_12804[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_12804[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_12804;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = exception;if(cljs.core.truth_(and__4872__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4872__auto__;
}
})()))
{var statearr_12805_12827 = state;(statearr_12805_12827[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__12828 = state;
state = G__12828;
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
{var statearr_12806 = state;(statearr_12806[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_12806[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_12806;
} else
{if(cljs.core.truth_((function (){var and__4872__auto__ = cljs.core.not.call(null,exception);if(and__4872__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4872__auto__;
}
})()))
{var statearr_12807 = state;(statearr_12807[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_12807[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_12807;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_12808 = state;(statearr_12808[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_12808[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_12808;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10205 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10205 = (function (f,fn_handler,meta10206){
this.f = f;
this.fn_handler = fn_handler;
this.meta10206 = meta10206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10205.cljs$lang$type = true;
cljs.core.async.t10205.cljs$lang$ctorStr = "cljs.core.async/t10205";
cljs.core.async.t10205.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10205");
});
cljs.core.async.t10205.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10207){var self__ = this;
var _10207__$1 = this;return self__.meta10206;
});
cljs.core.async.t10205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10207,meta10206__$1){var self__ = this;
var _10207__$1 = this;return (new cljs.core.async.t10205(self__.f,self__.fn_handler,meta10206__$1));
});
cljs.core.async.__GT_t10205 = (function __GT_t10205(f__$1,fn_handler__$1,meta10206){return (new cljs.core.async.t10205(f__$1,fn_handler__$1,meta10206));
});
}
return (new cljs.core.async.t10205(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10209 = buff;if(G__10209)
{var bit__5534__auto__ = null;if(cljs.core.truth_((function (){var or__4884__auto__ = bit__5534__auto__;if(cljs.core.truth_(or__4884__auto__))
{return or__4884__auto__;
} else
{return G__10209.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10209.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10209);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10209);
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
{var val_12473 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12473);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12473,ret){
return (function (){return fn1.call(null,val_12473);
});})(val_12473,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5732__auto___12474 = n;var x_12475 = 0;while(true){
if((x_12475 < n__5732__auto___12474))
{(a[x_12475] = 0);
{
var G__12476 = (x_12475 + 1);
x_12475 = G__12476;
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
var G__12477 = (i + 1);
i = G__12477;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10213 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10213 = (function (flag,alt_flag,meta10214){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10214 = meta10214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10213.cljs$lang$type = true;
cljs.core.async.t10213.cljs$lang$ctorStr = "cljs.core.async/t10213";
cljs.core.async.t10213.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10213");
});})(flag))
;
cljs.core.async.t10213.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10215){var self__ = this;
var _10215__$1 = this;return self__.meta10214;
});})(flag))
;
cljs.core.async.t10213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10215,meta10214__$1){var self__ = this;
var _10215__$1 = this;return (new cljs.core.async.t10213(self__.flag,self__.alt_flag,meta10214__$1));
});})(flag))
;
cljs.core.async.__GT_t10213 = ((function (flag){
return (function __GT_t10213(flag__$1,alt_flag__$1,meta10214){return (new cljs.core.async.t10213(flag__$1,alt_flag__$1,meta10214));
});})(flag))
;
}
return (new cljs.core.async.t10213(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10219 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10219 = (function (cb,flag,alt_handler,meta10220){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10220 = meta10220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10219.cljs$lang$type = true;
cljs.core.async.t10219.cljs$lang$ctorStr = "cljs.core.async/t10219";
cljs.core.async.t10219.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10219");
});
cljs.core.async.t10219.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10221){var self__ = this;
var _10221__$1 = this;return self__.meta10220;
});
cljs.core.async.t10219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10221,meta10220__$1){var self__ = this;
var _10221__$1 = this;return (new cljs.core.async.t10219(self__.cb,self__.flag,self__.alt_handler,meta10220__$1));
});
cljs.core.async.__GT_t10219 = (function __GT_t10219(cb__$1,flag__$1,alt_handler__$1,meta10220){return (new cljs.core.async.t10219(cb__$1,flag__$1,alt_handler__$1,meta10220));
});
}
return (new cljs.core.async.t10219(cb,flag,alt_handler,null));
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
return (function (p1__10222_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10222_SHARP_,port], null));
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
var G__12478 = (i + 1);
i = G__12478;
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
var alts_BANG___delegate = function (ports,p__10223){var map__10225 = p__10223;var map__10225__$1 = ((cljs.core.seq_QMARK_.call(null,map__10225))?cljs.core.apply.call(null,cljs.core.hash_map,map__10225):map__10225);var opts = map__10225__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10223 = null;if (arguments.length > 1) {
  p__10223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10223);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12479){
var ports = cljs.core.first(arglist__12479);
var p__10223 = cljs.core.rest(arglist__12479);
return alts_BANG___delegate(ports,p__10223);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10233 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10233 = (function (ch,f,map_LT_,meta10234){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10234 = meta10234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10233.cljs$lang$type = true;
cljs.core.async.t10233.cljs$lang$ctorStr = "cljs.core.async/t10233";
cljs.core.async.t10233.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10233");
});
cljs.core.async.t10233.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10233.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10236 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10236 = (function (fn1,_,meta10234,ch,f,map_LT_,meta10237){
this.fn1 = fn1;
this._ = _;
this.meta10234 = meta10234;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10237 = meta10237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10236.cljs$lang$type = true;
cljs.core.async.t10236.cljs$lang$ctorStr = "cljs.core.async/t10236";
cljs.core.async.t10236.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10236");
});})(___$1))
;
cljs.core.async.t10236.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10236.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10226_SHARP_){return f1.call(null,(((p1__10226_SHARP_ == null))?null:self__.f.call(null,p1__10226_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10238){var self__ = this;
var _10238__$1 = this;return self__.meta10237;
});})(___$1))
;
cljs.core.async.t10236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10238,meta10237__$1){var self__ = this;
var _10238__$1 = this;return (new cljs.core.async.t10236(self__.fn1,self__._,self__.meta10234,self__.ch,self__.f,self__.map_LT_,meta10237__$1));
});})(___$1))
;
cljs.core.async.__GT_t10236 = ((function (___$1){
return (function __GT_t10236(fn1__$1,___$2,meta10234__$1,ch__$2,f__$2,map_LT___$2,meta10237){return (new cljs.core.async.t10236(fn1__$1,___$2,meta10234__$1,ch__$2,f__$2,map_LT___$2,meta10237));
});})(___$1))
;
}
return (new cljs.core.async.t10236(fn1,___$1,self__.meta10234,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10233.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10235){var self__ = this;
var _10235__$1 = this;return self__.meta10234;
});
cljs.core.async.t10233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10235,meta10234__$1){var self__ = this;
var _10235__$1 = this;return (new cljs.core.async.t10233(self__.ch,self__.f,self__.map_LT_,meta10234__$1));
});
cljs.core.async.__GT_t10233 = (function __GT_t10233(ch__$1,f__$1,map_LT___$1,meta10234){return (new cljs.core.async.t10233(ch__$1,f__$1,map_LT___$1,meta10234));
});
}
return (new cljs.core.async.t10233(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10242 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10242 = (function (ch,f,map_GT_,meta10243){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10243 = meta10243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10242.cljs$lang$type = true;
cljs.core.async.t10242.cljs$lang$ctorStr = "cljs.core.async/t10242";
cljs.core.async.t10242.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10242");
});
cljs.core.async.t10242.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10242.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10242.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10244){var self__ = this;
var _10244__$1 = this;return self__.meta10243;
});
cljs.core.async.t10242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10244,meta10243__$1){var self__ = this;
var _10244__$1 = this;return (new cljs.core.async.t10242(self__.ch,self__.f,self__.map_GT_,meta10243__$1));
});
cljs.core.async.__GT_t10242 = (function __GT_t10242(ch__$1,f__$1,map_GT___$1,meta10243){return (new cljs.core.async.t10242(ch__$1,f__$1,map_GT___$1,meta10243));
});
}
return (new cljs.core.async.t10242(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10248 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10248 = (function (ch,p,filter_GT_,meta10249){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10249 = meta10249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10248.cljs$lang$type = true;
cljs.core.async.t10248.cljs$lang$ctorStr = "cljs.core.async/t10248";
cljs.core.async.t10248.cljs$lang$ctorPrWriter = (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t10248");
});
cljs.core.async.t10248.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10248.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10248.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10250){var self__ = this;
var _10250__$1 = this;return self__.meta10249;
});
cljs.core.async.t10248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10250,meta10249__$1){var self__ = this;
var _10250__$1 = this;return (new cljs.core.async.t10248(self__.ch,self__.p,self__.filter_GT_,meta10249__$1));
});
cljs.core.async.__GT_t10248 = (function __GT_t10248(ch__$1,p__$1,filter_GT___$1,meta10249){return (new cljs.core.async.t10248(ch__$1,p__$1,filter_GT___$1,meta10249));
});
}
return (new cljs.core.async.t10248(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12480 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12480,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12480,out){
return (function (state_10312){var state_val_10313 = (state_10312[1]);if((state_val_10313 === 1))
{var state_10312__$1 = state_10312;var statearr_10314_12481 = state_10312__$1;(statearr_10314_12481[2] = null);
(statearr_10314_12481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10313 === 2))
{var state_10312__$1 = state_10312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10312__$1,4,ch);
} else
{if((state_val_10313 === 3))
{var inst_10310 = (state_10312[2]);var state_10312__$1 = state_10312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10312__$1,inst_10310);
} else
{if((state_val_10313 === 4))
{var inst_10294 = (state_10312[7]);var inst_10294__$1 = (state_10312[2]);var inst_10295 = (inst_10294__$1 == null);var state_10312__$1 = (function (){var statearr_10315 = state_10312;(statearr_10315[7] = inst_10294__$1);
return statearr_10315;
})();if(cljs.core.truth_(inst_10295))
{var statearr_10316_12482 = state_10312__$1;(statearr_10316_12482[1] = 5);
} else
{var statearr_10317_12483 = state_10312__$1;(statearr_10317_12483[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10313 === 5))
{var inst_10297 = cljs.core.async.close_BANG_.call(null,out);var state_10312__$1 = state_10312;var statearr_10318_12484 = state_10312__$1;(statearr_10318_12484[2] = inst_10297);
(statearr_10318_12484[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10313 === 6))
{var inst_10294 = (state_10312[7]);var inst_10299 = p.call(null,inst_10294);var state_10312__$1 = state_10312;if(cljs.core.truth_(inst_10299))
{var statearr_10319_12485 = state_10312__$1;(statearr_10319_12485[1] = 8);
} else
{var statearr_10320_12486 = state_10312__$1;(statearr_10320_12486[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10313 === 7))
{var inst_10308 = (state_10312[2]);var state_10312__$1 = state_10312;var statearr_10321_12487 = state_10312__$1;(statearr_10321_12487[2] = inst_10308);
(statearr_10321_12487[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10313 === 8))
{var inst_10294 = (state_10312[7]);var state_10312__$1 = state_10312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10312__$1,11,out,inst_10294);
} else
{if((state_val_10313 === 9))
{var state_10312__$1 = state_10312;var statearr_10322_12488 = state_10312__$1;(statearr_10322_12488[2] = null);
(statearr_10322_12488[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10313 === 10))
{var inst_10305 = (state_10312[2]);var state_10312__$1 = (function (){var statearr_10323 = state_10312;(statearr_10323[8] = inst_10305);
return statearr_10323;
})();var statearr_10324_12489 = state_10312__$1;(statearr_10324_12489[2] = null);
(statearr_10324_12489[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10313 === 11))
{var inst_10302 = (state_10312[2]);var state_10312__$1 = state_10312;var statearr_10325_12490 = state_10312__$1;(statearr_10325_12490[2] = inst_10302);
(statearr_10325_12490[1] = 10);
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
});})(c__7524__auto___12480,out))
;return ((function (switch__7454__auto__,c__7524__auto___12480,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_10329 = [null,null,null,null,null,null,null,null,null];(statearr_10329[0] = state_machine__7455__auto__);
(statearr_10329[1] = 1);
return statearr_10329;
});
var state_machine__7455__auto____1 = (function (state_10312){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10312);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10330){if((e10330 instanceof Object))
{var ex__7458__auto__ = e10330;var statearr_10331_12491 = state_10312;(statearr_10331_12491[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10312);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12492 = state_10312;
state_10312 = G__12492;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10312){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12480,out))
})();var state__7526__auto__ = (function (){var statearr_10332 = f__7525__auto__.call(null);(statearr_10332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12480);
return statearr_10332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12480,out))
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
return (function (state_10484){var state_val_10485 = (state_10484[1]);if((state_val_10485 === 1))
{var state_10484__$1 = state_10484;var statearr_10486_12493 = state_10484__$1;(statearr_10486_12493[2] = null);
(statearr_10486_12493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 2))
{var state_10484__$1 = state_10484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10484__$1,4,in$);
} else
{if((state_val_10485 === 3))
{var inst_10482 = (state_10484[2]);var state_10484__$1 = state_10484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10484__$1,inst_10482);
} else
{if((state_val_10485 === 4))
{var inst_10430 = (state_10484[7]);var inst_10430__$1 = (state_10484[2]);var inst_10431 = (inst_10430__$1 == null);var state_10484__$1 = (function (){var statearr_10487 = state_10484;(statearr_10487[7] = inst_10430__$1);
return statearr_10487;
})();if(cljs.core.truth_(inst_10431))
{var statearr_10488_12494 = state_10484__$1;(statearr_10488_12494[1] = 5);
} else
{var statearr_10489_12495 = state_10484__$1;(statearr_10489_12495[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 5))
{var inst_10433 = cljs.core.async.close_BANG_.call(null,out);var state_10484__$1 = state_10484;var statearr_10490_12496 = state_10484__$1;(statearr_10490_12496[2] = inst_10433);
(statearr_10490_12496[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 6))
{var inst_10430 = (state_10484[7]);var inst_10435 = f.call(null,inst_10430);var inst_10440 = cljs.core.seq.call(null,inst_10435);var inst_10441 = inst_10440;var inst_10442 = null;var inst_10443 = 0;var inst_10444 = 0;var state_10484__$1 = (function (){var statearr_10491 = state_10484;(statearr_10491[8] = inst_10444);
(statearr_10491[9] = inst_10443);
(statearr_10491[10] = inst_10442);
(statearr_10491[11] = inst_10441);
return statearr_10491;
})();var statearr_10492_12497 = state_10484__$1;(statearr_10492_12497[2] = null);
(statearr_10492_12497[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 7))
{var inst_10480 = (state_10484[2]);var state_10484__$1 = state_10484;var statearr_10493_12498 = state_10484__$1;(statearr_10493_12498[2] = inst_10480);
(statearr_10493_12498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 8))
{var inst_10444 = (state_10484[8]);var inst_10443 = (state_10484[9]);var inst_10446 = (inst_10444 < inst_10443);var inst_10447 = inst_10446;var state_10484__$1 = state_10484;if(cljs.core.truth_(inst_10447))
{var statearr_10494_12499 = state_10484__$1;(statearr_10494_12499[1] = 10);
} else
{var statearr_10495_12500 = state_10484__$1;(statearr_10495_12500[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 9))
{var inst_10477 = (state_10484[2]);var state_10484__$1 = (function (){var statearr_10496 = state_10484;(statearr_10496[12] = inst_10477);
return statearr_10496;
})();var statearr_10497_12501 = state_10484__$1;(statearr_10497_12501[2] = null);
(statearr_10497_12501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 10))
{var inst_10444 = (state_10484[8]);var inst_10442 = (state_10484[10]);var inst_10449 = cljs.core._nth.call(null,inst_10442,inst_10444);var state_10484__$1 = state_10484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10484__$1,13,out,inst_10449);
} else
{if((state_val_10485 === 11))
{var inst_10441 = (state_10484[11]);var inst_10455 = (state_10484[13]);var inst_10455__$1 = cljs.core.seq.call(null,inst_10441);var state_10484__$1 = (function (){var statearr_10501 = state_10484;(statearr_10501[13] = inst_10455__$1);
return statearr_10501;
})();if(inst_10455__$1)
{var statearr_10502_12502 = state_10484__$1;(statearr_10502_12502[1] = 14);
} else
{var statearr_10503_12503 = state_10484__$1;(statearr_10503_12503[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 12))
{var inst_10475 = (state_10484[2]);var state_10484__$1 = state_10484;var statearr_10504_12504 = state_10484__$1;(statearr_10504_12504[2] = inst_10475);
(statearr_10504_12504[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 13))
{var inst_10444 = (state_10484[8]);var inst_10443 = (state_10484[9]);var inst_10442 = (state_10484[10]);var inst_10441 = (state_10484[11]);var inst_10451 = (state_10484[2]);var inst_10452 = (inst_10444 + 1);var tmp10498 = inst_10443;var tmp10499 = inst_10442;var tmp10500 = inst_10441;var inst_10441__$1 = tmp10500;var inst_10442__$1 = tmp10499;var inst_10443__$1 = tmp10498;var inst_10444__$1 = inst_10452;var state_10484__$1 = (function (){var statearr_10505 = state_10484;(statearr_10505[8] = inst_10444__$1);
(statearr_10505[14] = inst_10451);
(statearr_10505[9] = inst_10443__$1);
(statearr_10505[10] = inst_10442__$1);
(statearr_10505[11] = inst_10441__$1);
return statearr_10505;
})();var statearr_10506_12505 = state_10484__$1;(statearr_10506_12505[2] = null);
(statearr_10506_12505[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 14))
{var inst_10455 = (state_10484[13]);var inst_10457 = cljs.core.chunked_seq_QMARK_.call(null,inst_10455);var state_10484__$1 = state_10484;if(inst_10457)
{var statearr_10507_12506 = state_10484__$1;(statearr_10507_12506[1] = 17);
} else
{var statearr_10508_12507 = state_10484__$1;(statearr_10508_12507[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 15))
{var state_10484__$1 = state_10484;var statearr_10509_12508 = state_10484__$1;(statearr_10509_12508[2] = null);
(statearr_10509_12508[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 16))
{var inst_10473 = (state_10484[2]);var state_10484__$1 = state_10484;var statearr_10510_12509 = state_10484__$1;(statearr_10510_12509[2] = inst_10473);
(statearr_10510_12509[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 17))
{var inst_10455 = (state_10484[13]);var inst_10459 = cljs.core.chunk_first.call(null,inst_10455);var inst_10460 = cljs.core.chunk_rest.call(null,inst_10455);var inst_10461 = cljs.core.count.call(null,inst_10459);var inst_10441 = inst_10460;var inst_10442 = inst_10459;var inst_10443 = inst_10461;var inst_10444 = 0;var state_10484__$1 = (function (){var statearr_10511 = state_10484;(statearr_10511[8] = inst_10444);
(statearr_10511[9] = inst_10443);
(statearr_10511[10] = inst_10442);
(statearr_10511[11] = inst_10441);
return statearr_10511;
})();var statearr_10512_12510 = state_10484__$1;(statearr_10512_12510[2] = null);
(statearr_10512_12510[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 18))
{var inst_10455 = (state_10484[13]);var inst_10464 = cljs.core.first.call(null,inst_10455);var state_10484__$1 = state_10484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10484__$1,20,out,inst_10464);
} else
{if((state_val_10485 === 19))
{var inst_10470 = (state_10484[2]);var state_10484__$1 = state_10484;var statearr_10513_12511 = state_10484__$1;(statearr_10513_12511[2] = inst_10470);
(statearr_10513_12511[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10485 === 20))
{var inst_10455 = (state_10484[13]);var inst_10466 = (state_10484[2]);var inst_10467 = cljs.core.next.call(null,inst_10455);var inst_10441 = inst_10467;var inst_10442 = null;var inst_10443 = 0;var inst_10444 = 0;var state_10484__$1 = (function (){var statearr_10514 = state_10484;(statearr_10514[8] = inst_10444);
(statearr_10514[9] = inst_10443);
(statearr_10514[10] = inst_10442);
(statearr_10514[11] = inst_10441);
(statearr_10514[15] = inst_10466);
return statearr_10514;
})();var statearr_10515_12512 = state_10484__$1;(statearr_10515_12512[2] = null);
(statearr_10515_12512[1] = 8);
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
var state_machine__7455__auto____0 = (function (){var statearr_10519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10519[0] = state_machine__7455__auto__);
(statearr_10519[1] = 1);
return statearr_10519;
});
var state_machine__7455__auto____1 = (function (state_10484){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10484);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10520){if((e10520 instanceof Object))
{var ex__7458__auto__ = e10520;var statearr_10521_12513 = state_10484;(statearr_10521_12513[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10484);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12514 = state_10484;
state_10484 = G__12514;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10484){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__))
})();var state__7526__auto__ = (function (){var statearr_10522 = f__7525__auto__.call(null);(statearr_10522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_10522;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__7524__auto___12515 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12515){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12515){
return (function (state_10582){var state_val_10583 = (state_10582[1]);if((state_val_10583 === 1))
{var state_10582__$1 = state_10582;var statearr_10584_12516 = state_10582__$1;(statearr_10584_12516[2] = null);
(statearr_10584_12516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10583 === 2))
{var state_10582__$1 = state_10582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10582__$1,4,from);
} else
{if((state_val_10583 === 3))
{var inst_10580 = (state_10582[2]);var state_10582__$1 = state_10582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10582__$1,inst_10580);
} else
{if((state_val_10583 === 4))
{var inst_10565 = (state_10582[7]);var inst_10565__$1 = (state_10582[2]);var inst_10566 = (inst_10565__$1 == null);var state_10582__$1 = (function (){var statearr_10585 = state_10582;(statearr_10585[7] = inst_10565__$1);
return statearr_10585;
})();if(cljs.core.truth_(inst_10566))
{var statearr_10586_12517 = state_10582__$1;(statearr_10586_12517[1] = 5);
} else
{var statearr_10587_12518 = state_10582__$1;(statearr_10587_12518[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10583 === 5))
{var state_10582__$1 = state_10582;if(cljs.core.truth_(close_QMARK_))
{var statearr_10588_12519 = state_10582__$1;(statearr_10588_12519[1] = 8);
} else
{var statearr_10589_12520 = state_10582__$1;(statearr_10589_12520[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10583 === 6))
{var inst_10565 = (state_10582[7]);var state_10582__$1 = state_10582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10582__$1,11,to,inst_10565);
} else
{if((state_val_10583 === 7))
{var inst_10578 = (state_10582[2]);var state_10582__$1 = state_10582;var statearr_10590_12521 = state_10582__$1;(statearr_10590_12521[2] = inst_10578);
(statearr_10590_12521[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10583 === 8))
{var inst_10569 = cljs.core.async.close_BANG_.call(null,to);var state_10582__$1 = state_10582;var statearr_10591_12522 = state_10582__$1;(statearr_10591_12522[2] = inst_10569);
(statearr_10591_12522[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10583 === 9))
{var state_10582__$1 = state_10582;var statearr_10592_12523 = state_10582__$1;(statearr_10592_12523[2] = null);
(statearr_10592_12523[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10583 === 10))
{var inst_10572 = (state_10582[2]);var state_10582__$1 = state_10582;var statearr_10593_12524 = state_10582__$1;(statearr_10593_12524[2] = inst_10572);
(statearr_10593_12524[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10583 === 11))
{var inst_10575 = (state_10582[2]);var state_10582__$1 = (function (){var statearr_10594 = state_10582;(statearr_10594[8] = inst_10575);
return statearr_10594;
})();var statearr_10595_12525 = state_10582__$1;(statearr_10595_12525[2] = null);
(statearr_10595_12525[1] = 2);
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
});})(c__7524__auto___12515))
;return ((function (switch__7454__auto__,c__7524__auto___12515){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_10599 = [null,null,null,null,null,null,null,null,null];(statearr_10599[0] = state_machine__7455__auto__);
(statearr_10599[1] = 1);
return statearr_10599;
});
var state_machine__7455__auto____1 = (function (state_10582){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10582);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10600){if((e10600 instanceof Object))
{var ex__7458__auto__ = e10600;var statearr_10601_12526 = state_10582;(statearr_10601_12526[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12527 = state_10582;
state_10582 = G__12527;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10582){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12515))
})();var state__7526__auto__ = (function (){var statearr_10602 = f__7525__auto__.call(null);(statearr_10602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12515);
return statearr_10602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12515))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7524__auto___12528 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12528,tc,fc){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12528,tc,fc){
return (function (state_10667){var state_val_10668 = (state_10667[1]);if((state_val_10668 === 1))
{var state_10667__$1 = state_10667;var statearr_10669_12529 = state_10667__$1;(statearr_10669_12529[2] = null);
(statearr_10669_12529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10668 === 2))
{var state_10667__$1 = state_10667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10667__$1,4,ch);
} else
{if((state_val_10668 === 3))
{var inst_10665 = (state_10667[2]);var state_10667__$1 = state_10667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10667__$1,inst_10665);
} else
{if((state_val_10668 === 4))
{var inst_10648 = (state_10667[7]);var inst_10648__$1 = (state_10667[2]);var inst_10649 = (inst_10648__$1 == null);var state_10667__$1 = (function (){var statearr_10670 = state_10667;(statearr_10670[7] = inst_10648__$1);
return statearr_10670;
})();if(cljs.core.truth_(inst_10649))
{var statearr_10671_12530 = state_10667__$1;(statearr_10671_12530[1] = 5);
} else
{var statearr_10672_12531 = state_10667__$1;(statearr_10672_12531[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10668 === 5))
{var inst_10651 = cljs.core.async.close_BANG_.call(null,tc);var inst_10652 = cljs.core.async.close_BANG_.call(null,fc);var state_10667__$1 = (function (){var statearr_10673 = state_10667;(statearr_10673[8] = inst_10651);
return statearr_10673;
})();var statearr_10674_12532 = state_10667__$1;(statearr_10674_12532[2] = inst_10652);
(statearr_10674_12532[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10668 === 6))
{var inst_10648 = (state_10667[7]);var inst_10654 = p.call(null,inst_10648);var state_10667__$1 = state_10667;if(cljs.core.truth_(inst_10654))
{var statearr_10675_12533 = state_10667__$1;(statearr_10675_12533[1] = 9);
} else
{var statearr_10676_12534 = state_10667__$1;(statearr_10676_12534[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10668 === 7))
{var inst_10663 = (state_10667[2]);var state_10667__$1 = state_10667;var statearr_10677_12535 = state_10667__$1;(statearr_10677_12535[2] = inst_10663);
(statearr_10677_12535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10668 === 8))
{var inst_10660 = (state_10667[2]);var state_10667__$1 = (function (){var statearr_10678 = state_10667;(statearr_10678[9] = inst_10660);
return statearr_10678;
})();var statearr_10679_12536 = state_10667__$1;(statearr_10679_12536[2] = null);
(statearr_10679_12536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10668 === 9))
{var state_10667__$1 = state_10667;var statearr_10680_12537 = state_10667__$1;(statearr_10680_12537[2] = tc);
(statearr_10680_12537[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10668 === 10))
{var state_10667__$1 = state_10667;var statearr_10681_12538 = state_10667__$1;(statearr_10681_12538[2] = fc);
(statearr_10681_12538[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10668 === 11))
{var inst_10648 = (state_10667[7]);var inst_10658 = (state_10667[2]);var state_10667__$1 = state_10667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10667__$1,8,inst_10658,inst_10648);
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
});})(c__7524__auto___12528,tc,fc))
;return ((function (switch__7454__auto__,c__7524__auto___12528,tc,fc){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_10685 = [null,null,null,null,null,null,null,null,null,null];(statearr_10685[0] = state_machine__7455__auto__);
(statearr_10685[1] = 1);
return statearr_10685;
});
var state_machine__7455__auto____1 = (function (state_10667){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10667);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10686){if((e10686 instanceof Object))
{var ex__7458__auto__ = e10686;var statearr_10687_12539 = state_10667;(statearr_10687_12539[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10667);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10686;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12540 = state_10667;
state_10667 = G__12540;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10667){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12528,tc,fc))
})();var state__7526__auto__ = (function (){var statearr_10688 = f__7525__auto__.call(null);(statearr_10688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12528);
return statearr_10688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12528,tc,fc))
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
return (function (state_10735){var state_val_10736 = (state_10735[1]);if((state_val_10736 === 7))
{var inst_10731 = (state_10735[2]);var state_10735__$1 = state_10735;var statearr_10737_12541 = state_10735__$1;(statearr_10737_12541[2] = inst_10731);
(statearr_10737_12541[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10736 === 6))
{var inst_10721 = (state_10735[7]);var inst_10724 = (state_10735[8]);var inst_10728 = f.call(null,inst_10721,inst_10724);var inst_10721__$1 = inst_10728;var state_10735__$1 = (function (){var statearr_10738 = state_10735;(statearr_10738[7] = inst_10721__$1);
return statearr_10738;
})();var statearr_10739_12542 = state_10735__$1;(statearr_10739_12542[2] = null);
(statearr_10739_12542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10736 === 5))
{var inst_10721 = (state_10735[7]);var state_10735__$1 = state_10735;var statearr_10740_12543 = state_10735__$1;(statearr_10740_12543[2] = inst_10721);
(statearr_10740_12543[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10736 === 4))
{var inst_10724 = (state_10735[8]);var inst_10724__$1 = (state_10735[2]);var inst_10725 = (inst_10724__$1 == null);var state_10735__$1 = (function (){var statearr_10741 = state_10735;(statearr_10741[8] = inst_10724__$1);
return statearr_10741;
})();if(cljs.core.truth_(inst_10725))
{var statearr_10742_12544 = state_10735__$1;(statearr_10742_12544[1] = 5);
} else
{var statearr_10743_12545 = state_10735__$1;(statearr_10743_12545[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10736 === 3))
{var inst_10733 = (state_10735[2]);var state_10735__$1 = state_10735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10735__$1,inst_10733);
} else
{if((state_val_10736 === 2))
{var state_10735__$1 = state_10735;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10735__$1,4,ch);
} else
{if((state_val_10736 === 1))
{var inst_10721 = init;var state_10735__$1 = (function (){var statearr_10744 = state_10735;(statearr_10744[7] = inst_10721);
return statearr_10744;
})();var statearr_10745_12546 = state_10735__$1;(statearr_10745_12546[2] = null);
(statearr_10745_12546[1] = 2);
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
var state_machine__7455__auto____0 = (function (){var statearr_10749 = [null,null,null,null,null,null,null,null,null];(statearr_10749[0] = state_machine__7455__auto__);
(statearr_10749[1] = 1);
return statearr_10749;
});
var state_machine__7455__auto____1 = (function (state_10735){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10735);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10750){if((e10750 instanceof Object))
{var ex__7458__auto__ = e10750;var statearr_10751_12547 = state_10735;(statearr_10751_12547[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10735);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10750;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12548 = state_10735;
state_10735 = G__12548;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10735){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__))
})();var state__7526__auto__ = (function (){var statearr_10752 = f__7525__auto__.call(null);(statearr_10752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_10752;
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
return (function (state_10814){var state_val_10815 = (state_10814[1]);if((state_val_10815 === 1))
{var inst_10794 = cljs.core.seq.call(null,coll);var inst_10795 = inst_10794;var state_10814__$1 = (function (){var statearr_10816 = state_10814;(statearr_10816[7] = inst_10795);
return statearr_10816;
})();var statearr_10817_12549 = state_10814__$1;(statearr_10817_12549[2] = null);
(statearr_10817_12549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10815 === 2))
{var inst_10795 = (state_10814[7]);var state_10814__$1 = state_10814;if(cljs.core.truth_(inst_10795))
{var statearr_10818_12550 = state_10814__$1;(statearr_10818_12550[1] = 4);
} else
{var statearr_10819_12551 = state_10814__$1;(statearr_10819_12551[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10815 === 3))
{var inst_10812 = (state_10814[2]);var state_10814__$1 = state_10814;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10814__$1,inst_10812);
} else
{if((state_val_10815 === 4))
{var inst_10795 = (state_10814[7]);var inst_10798 = cljs.core.first.call(null,inst_10795);var state_10814__$1 = state_10814;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10814__$1,7,ch,inst_10798);
} else
{if((state_val_10815 === 5))
{var state_10814__$1 = state_10814;if(cljs.core.truth_(close_QMARK_))
{var statearr_10820_12552 = state_10814__$1;(statearr_10820_12552[1] = 8);
} else
{var statearr_10821_12553 = state_10814__$1;(statearr_10821_12553[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10815 === 6))
{var inst_10810 = (state_10814[2]);var state_10814__$1 = state_10814;var statearr_10822_12554 = state_10814__$1;(statearr_10822_12554[2] = inst_10810);
(statearr_10822_12554[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10815 === 7))
{var inst_10795 = (state_10814[7]);var inst_10800 = (state_10814[2]);var inst_10801 = cljs.core.next.call(null,inst_10795);var inst_10795__$1 = inst_10801;var state_10814__$1 = (function (){var statearr_10823 = state_10814;(statearr_10823[7] = inst_10795__$1);
(statearr_10823[8] = inst_10800);
return statearr_10823;
})();var statearr_10824_12555 = state_10814__$1;(statearr_10824_12555[2] = null);
(statearr_10824_12555[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10815 === 8))
{var inst_10805 = cljs.core.async.close_BANG_.call(null,ch);var state_10814__$1 = state_10814;var statearr_10825_12556 = state_10814__$1;(statearr_10825_12556[2] = inst_10805);
(statearr_10825_12556[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10815 === 9))
{var state_10814__$1 = state_10814;var statearr_10826_12557 = state_10814__$1;(statearr_10826_12557[2] = null);
(statearr_10826_12557[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10815 === 10))
{var inst_10808 = (state_10814[2]);var state_10814__$1 = state_10814;var statearr_10827_12558 = state_10814__$1;(statearr_10827_12558[2] = inst_10808);
(statearr_10827_12558[1] = 6);
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
var state_machine__7455__auto____0 = (function (){var statearr_10831 = [null,null,null,null,null,null,null,null,null];(statearr_10831[0] = state_machine__7455__auto__);
(statearr_10831[1] = 1);
return statearr_10831;
});
var state_machine__7455__auto____1 = (function (state_10814){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_10814);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e10832){if((e10832 instanceof Object))
{var ex__7458__auto__ = e10832;var statearr_10833_12559 = state_10814;(statearr_10833_12559[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10814);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12560 = state_10814;
state_10814 = G__12560;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_10814){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_10814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__))
})();var state__7526__auto__ = (function (){var statearr_10834 = f__7525__auto__.call(null);(statearr_10834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_10834;
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
cljs.core.async.Mux = (function (){var obj10836 = {};return obj10836;
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
cljs.core.async.Mult = (function (){var obj10838 = {};return obj10838;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11062 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11062 = (function (cs,ch,mult,meta11063){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11063 = meta11063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11062.cljs$lang$type = true;
cljs.core.async.t11062.cljs$lang$ctorStr = "cljs.core.async/t11062";
cljs.core.async.t11062.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11062");
});})(cs))
;
cljs.core.async.t11062.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11062.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11062.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11062.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11062.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11064){var self__ = this;
var _11064__$1 = this;return self__.meta11063;
});})(cs))
;
cljs.core.async.t11062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11064,meta11063__$1){var self__ = this;
var _11064__$1 = this;return (new cljs.core.async.t11062(self__.cs,self__.ch,self__.mult,meta11063__$1));
});})(cs))
;
cljs.core.async.__GT_t11062 = ((function (cs){
return (function __GT_t11062(cs__$1,ch__$1,mult__$1,meta11063){return (new cljs.core.async.t11062(cs__$1,ch__$1,mult__$1,meta11063));
});})(cs))
;
}
return (new cljs.core.async.t11062(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7524__auto___12561 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12561,cs,m,dchan,dctr,done){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12561,cs,m,dchan,dctr,done){
return (function (state_11199){var state_val_11200 = (state_11199[1]);if((state_val_11200 === 32))
{var inst_11067 = (state_11199[7]);var inst_11143 = (state_11199[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11199,31,Object,null,30);var inst_11150 = cljs.core.async.put_BANG_.call(null,inst_11143,inst_11067,done);var state_11199__$1 = state_11199;var statearr_11201_12562 = state_11199__$1;(statearr_11201_12562[2] = inst_11150);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11199__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 1))
{var state_11199__$1 = state_11199;var statearr_11202_12563 = state_11199__$1;(statearr_11202_12563[2] = null);
(statearr_11202_12563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 33))
{var inst_11156 = (state_11199[9]);var inst_11158 = cljs.core.chunked_seq_QMARK_.call(null,inst_11156);var state_11199__$1 = state_11199;if(inst_11158)
{var statearr_11203_12564 = state_11199__$1;(statearr_11203_12564[1] = 36);
} else
{var statearr_11204_12565 = state_11199__$1;(statearr_11204_12565[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 2))
{var state_11199__$1 = state_11199;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11199__$1,4,ch);
} else
{if((state_val_11200 === 34))
{var state_11199__$1 = state_11199;var statearr_11205_12566 = state_11199__$1;(statearr_11205_12566[2] = null);
(statearr_11205_12566[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 3))
{var inst_11197 = (state_11199[2]);var state_11199__$1 = state_11199;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11199__$1,inst_11197);
} else
{if((state_val_11200 === 35))
{var inst_11181 = (state_11199[2]);var state_11199__$1 = state_11199;var statearr_11206_12567 = state_11199__$1;(statearr_11206_12567[2] = inst_11181);
(statearr_11206_12567[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 4))
{var inst_11067 = (state_11199[7]);var inst_11067__$1 = (state_11199[2]);var inst_11068 = (inst_11067__$1 == null);var state_11199__$1 = (function (){var statearr_11207 = state_11199;(statearr_11207[7] = inst_11067__$1);
return statearr_11207;
})();if(cljs.core.truth_(inst_11068))
{var statearr_11208_12568 = state_11199__$1;(statearr_11208_12568[1] = 5);
} else
{var statearr_11209_12569 = state_11199__$1;(statearr_11209_12569[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 36))
{var inst_11156 = (state_11199[9]);var inst_11160 = cljs.core.chunk_first.call(null,inst_11156);var inst_11161 = cljs.core.chunk_rest.call(null,inst_11156);var inst_11162 = cljs.core.count.call(null,inst_11160);var inst_11135 = inst_11161;var inst_11136 = inst_11160;var inst_11137 = inst_11162;var inst_11138 = 0;var state_11199__$1 = (function (){var statearr_11210 = state_11199;(statearr_11210[10] = inst_11137);
(statearr_11210[11] = inst_11138);
(statearr_11210[12] = inst_11136);
(statearr_11210[13] = inst_11135);
return statearr_11210;
})();var statearr_11211_12570 = state_11199__$1;(statearr_11211_12570[2] = null);
(statearr_11211_12570[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 5))
{var inst_11074 = cljs.core.deref.call(null,cs);var inst_11075 = cljs.core.seq.call(null,inst_11074);var inst_11076 = inst_11075;var inst_11077 = null;var inst_11078 = 0;var inst_11079 = 0;var state_11199__$1 = (function (){var statearr_11212 = state_11199;(statearr_11212[14] = inst_11076);
(statearr_11212[15] = inst_11077);
(statearr_11212[16] = inst_11079);
(statearr_11212[17] = inst_11078);
return statearr_11212;
})();var statearr_11213_12571 = state_11199__$1;(statearr_11213_12571[2] = null);
(statearr_11213_12571[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 37))
{var inst_11156 = (state_11199[9]);var inst_11165 = cljs.core.first.call(null,inst_11156);var state_11199__$1 = (function (){var statearr_11214 = state_11199;(statearr_11214[18] = inst_11165);
return statearr_11214;
})();var statearr_11215_12572 = state_11199__$1;(statearr_11215_12572[2] = null);
(statearr_11215_12572[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 6))
{var inst_11127 = (state_11199[19]);var inst_11126 = cljs.core.deref.call(null,cs);var inst_11127__$1 = cljs.core.keys.call(null,inst_11126);var inst_11128 = cljs.core.count.call(null,inst_11127__$1);var inst_11129 = cljs.core.reset_BANG_.call(null,dctr,inst_11128);var inst_11134 = cljs.core.seq.call(null,inst_11127__$1);var inst_11135 = inst_11134;var inst_11136 = null;var inst_11137 = 0;var inst_11138 = 0;var state_11199__$1 = (function (){var statearr_11216 = state_11199;(statearr_11216[10] = inst_11137);
(statearr_11216[11] = inst_11138);
(statearr_11216[12] = inst_11136);
(statearr_11216[13] = inst_11135);
(statearr_11216[19] = inst_11127__$1);
(statearr_11216[20] = inst_11129);
return statearr_11216;
})();var statearr_11217_12573 = state_11199__$1;(statearr_11217_12573[2] = null);
(statearr_11217_12573[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 38))
{var inst_11178 = (state_11199[2]);var state_11199__$1 = state_11199;var statearr_11218_12574 = state_11199__$1;(statearr_11218_12574[2] = inst_11178);
(statearr_11218_12574[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 7))
{var inst_11195 = (state_11199[2]);var state_11199__$1 = state_11199;var statearr_11219_12575 = state_11199__$1;(statearr_11219_12575[2] = inst_11195);
(statearr_11219_12575[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 39))
{var inst_11156 = (state_11199[9]);var inst_11174 = (state_11199[2]);var inst_11175 = cljs.core.next.call(null,inst_11156);var inst_11135 = inst_11175;var inst_11136 = null;var inst_11137 = 0;var inst_11138 = 0;var state_11199__$1 = (function (){var statearr_11220 = state_11199;(statearr_11220[21] = inst_11174);
(statearr_11220[10] = inst_11137);
(statearr_11220[11] = inst_11138);
(statearr_11220[12] = inst_11136);
(statearr_11220[13] = inst_11135);
return statearr_11220;
})();var statearr_11221_12576 = state_11199__$1;(statearr_11221_12576[2] = null);
(statearr_11221_12576[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 8))
{var inst_11079 = (state_11199[16]);var inst_11078 = (state_11199[17]);var inst_11081 = (inst_11079 < inst_11078);var inst_11082 = inst_11081;var state_11199__$1 = state_11199;if(cljs.core.truth_(inst_11082))
{var statearr_11222_12577 = state_11199__$1;(statearr_11222_12577[1] = 10);
} else
{var statearr_11223_12578 = state_11199__$1;(statearr_11223_12578[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 40))
{var inst_11165 = (state_11199[18]);var inst_11166 = (state_11199[2]);var inst_11167 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11168 = cljs.core.async.untap_STAR_.call(null,m,inst_11165);var state_11199__$1 = (function (){var statearr_11224 = state_11199;(statearr_11224[22] = inst_11167);
(statearr_11224[23] = inst_11166);
return statearr_11224;
})();var statearr_11225_12579 = state_11199__$1;(statearr_11225_12579[2] = inst_11168);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11199__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 9))
{var inst_11124 = (state_11199[2]);var state_11199__$1 = state_11199;var statearr_11226_12580 = state_11199__$1;(statearr_11226_12580[2] = inst_11124);
(statearr_11226_12580[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 41))
{var inst_11067 = (state_11199[7]);var inst_11165 = (state_11199[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11199,40,Object,null,39);var inst_11172 = cljs.core.async.put_BANG_.call(null,inst_11165,inst_11067,done);var state_11199__$1 = state_11199;var statearr_11227_12581 = state_11199__$1;(statearr_11227_12581[2] = inst_11172);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11199__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 10))
{var inst_11077 = (state_11199[15]);var inst_11079 = (state_11199[16]);var inst_11085 = cljs.core._nth.call(null,inst_11077,inst_11079);var inst_11086 = cljs.core.nth.call(null,inst_11085,0,null);var inst_11087 = cljs.core.nth.call(null,inst_11085,1,null);var state_11199__$1 = (function (){var statearr_11228 = state_11199;(statearr_11228[24] = inst_11086);
return statearr_11228;
})();if(cljs.core.truth_(inst_11087))
{var statearr_11229_12582 = state_11199__$1;(statearr_11229_12582[1] = 13);
} else
{var statearr_11230_12583 = state_11199__$1;(statearr_11230_12583[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 42))
{var state_11199__$1 = state_11199;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11199__$1,45,dchan);
} else
{if((state_val_11200 === 11))
{var inst_11096 = (state_11199[25]);var inst_11076 = (state_11199[14]);var inst_11096__$1 = cljs.core.seq.call(null,inst_11076);var state_11199__$1 = (function (){var statearr_11231 = state_11199;(statearr_11231[25] = inst_11096__$1);
return statearr_11231;
})();if(inst_11096__$1)
{var statearr_11232_12584 = state_11199__$1;(statearr_11232_12584[1] = 16);
} else
{var statearr_11233_12585 = state_11199__$1;(statearr_11233_12585[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 43))
{var state_11199__$1 = state_11199;var statearr_11234_12586 = state_11199__$1;(statearr_11234_12586[2] = null);
(statearr_11234_12586[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 12))
{var inst_11122 = (state_11199[2]);var state_11199__$1 = state_11199;var statearr_11235_12587 = state_11199__$1;(statearr_11235_12587[2] = inst_11122);
(statearr_11235_12587[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 44))
{var inst_11192 = (state_11199[2]);var state_11199__$1 = (function (){var statearr_11236 = state_11199;(statearr_11236[26] = inst_11192);
return statearr_11236;
})();var statearr_11237_12588 = state_11199__$1;(statearr_11237_12588[2] = null);
(statearr_11237_12588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 13))
{var inst_11086 = (state_11199[24]);var inst_11089 = cljs.core.async.close_BANG_.call(null,inst_11086);var state_11199__$1 = state_11199;var statearr_11238_12589 = state_11199__$1;(statearr_11238_12589[2] = inst_11089);
(statearr_11238_12589[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 45))
{var inst_11189 = (state_11199[2]);var state_11199__$1 = state_11199;var statearr_11242_12590 = state_11199__$1;(statearr_11242_12590[2] = inst_11189);
(statearr_11242_12590[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 14))
{var state_11199__$1 = state_11199;var statearr_11243_12591 = state_11199__$1;(statearr_11243_12591[2] = null);
(statearr_11243_12591[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 15))
{var inst_11076 = (state_11199[14]);var inst_11077 = (state_11199[15]);var inst_11079 = (state_11199[16]);var inst_11078 = (state_11199[17]);var inst_11092 = (state_11199[2]);var inst_11093 = (inst_11079 + 1);var tmp11239 = inst_11076;var tmp11240 = inst_11077;var tmp11241 = inst_11078;var inst_11076__$1 = tmp11239;var inst_11077__$1 = tmp11240;var inst_11078__$1 = tmp11241;var inst_11079__$1 = inst_11093;var state_11199__$1 = (function (){var statearr_11244 = state_11199;(statearr_11244[27] = inst_11092);
(statearr_11244[14] = inst_11076__$1);
(statearr_11244[15] = inst_11077__$1);
(statearr_11244[16] = inst_11079__$1);
(statearr_11244[17] = inst_11078__$1);
return statearr_11244;
})();var statearr_11245_12592 = state_11199__$1;(statearr_11245_12592[2] = null);
(statearr_11245_12592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 16))
{var inst_11096 = (state_11199[25]);var inst_11098 = cljs.core.chunked_seq_QMARK_.call(null,inst_11096);var state_11199__$1 = state_11199;if(inst_11098)
{var statearr_11246_12593 = state_11199__$1;(statearr_11246_12593[1] = 19);
} else
{var statearr_11247_12594 = state_11199__$1;(statearr_11247_12594[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 17))
{var state_11199__$1 = state_11199;var statearr_11248_12595 = state_11199__$1;(statearr_11248_12595[2] = null);
(statearr_11248_12595[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 18))
{var inst_11120 = (state_11199[2]);var state_11199__$1 = state_11199;var statearr_11249_12596 = state_11199__$1;(statearr_11249_12596[2] = inst_11120);
(statearr_11249_12596[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 19))
{var inst_11096 = (state_11199[25]);var inst_11100 = cljs.core.chunk_first.call(null,inst_11096);var inst_11101 = cljs.core.chunk_rest.call(null,inst_11096);var inst_11102 = cljs.core.count.call(null,inst_11100);var inst_11076 = inst_11101;var inst_11077 = inst_11100;var inst_11078 = inst_11102;var inst_11079 = 0;var state_11199__$1 = (function (){var statearr_11250 = state_11199;(statearr_11250[14] = inst_11076);
(statearr_11250[15] = inst_11077);
(statearr_11250[16] = inst_11079);
(statearr_11250[17] = inst_11078);
return statearr_11250;
})();var statearr_11251_12597 = state_11199__$1;(statearr_11251_12597[2] = null);
(statearr_11251_12597[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 20))
{var inst_11096 = (state_11199[25]);var inst_11106 = cljs.core.first.call(null,inst_11096);var inst_11107 = cljs.core.nth.call(null,inst_11106,0,null);var inst_11108 = cljs.core.nth.call(null,inst_11106,1,null);var state_11199__$1 = (function (){var statearr_11252 = state_11199;(statearr_11252[28] = inst_11107);
return statearr_11252;
})();if(cljs.core.truth_(inst_11108))
{var statearr_11253_12598 = state_11199__$1;(statearr_11253_12598[1] = 22);
} else
{var statearr_11254_12599 = state_11199__$1;(statearr_11254_12599[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 21))
{var inst_11117 = (state_11199[2]);var state_11199__$1 = state_11199;var statearr_11255_12600 = state_11199__$1;(statearr_11255_12600[2] = inst_11117);
(statearr_11255_12600[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 22))
{var inst_11107 = (state_11199[28]);var inst_11110 = cljs.core.async.close_BANG_.call(null,inst_11107);var state_11199__$1 = state_11199;var statearr_11256_12601 = state_11199__$1;(statearr_11256_12601[2] = inst_11110);
(statearr_11256_12601[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 23))
{var state_11199__$1 = state_11199;var statearr_11257_12602 = state_11199__$1;(statearr_11257_12602[2] = null);
(statearr_11257_12602[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 24))
{var inst_11096 = (state_11199[25]);var inst_11113 = (state_11199[2]);var inst_11114 = cljs.core.next.call(null,inst_11096);var inst_11076 = inst_11114;var inst_11077 = null;var inst_11078 = 0;var inst_11079 = 0;var state_11199__$1 = (function (){var statearr_11258 = state_11199;(statearr_11258[14] = inst_11076);
(statearr_11258[15] = inst_11077);
(statearr_11258[29] = inst_11113);
(statearr_11258[16] = inst_11079);
(statearr_11258[17] = inst_11078);
return statearr_11258;
})();var statearr_11259_12603 = state_11199__$1;(statearr_11259_12603[2] = null);
(statearr_11259_12603[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 25))
{var inst_11137 = (state_11199[10]);var inst_11138 = (state_11199[11]);var inst_11140 = (inst_11138 < inst_11137);var inst_11141 = inst_11140;var state_11199__$1 = state_11199;if(cljs.core.truth_(inst_11141))
{var statearr_11260_12604 = state_11199__$1;(statearr_11260_12604[1] = 27);
} else
{var statearr_11261_12605 = state_11199__$1;(statearr_11261_12605[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 26))
{var inst_11127 = (state_11199[19]);var inst_11185 = (state_11199[2]);var inst_11186 = cljs.core.seq.call(null,inst_11127);var state_11199__$1 = (function (){var statearr_11262 = state_11199;(statearr_11262[30] = inst_11185);
return statearr_11262;
})();if(inst_11186)
{var statearr_11263_12606 = state_11199__$1;(statearr_11263_12606[1] = 42);
} else
{var statearr_11264_12607 = state_11199__$1;(statearr_11264_12607[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 27))
{var inst_11138 = (state_11199[11]);var inst_11136 = (state_11199[12]);var inst_11143 = cljs.core._nth.call(null,inst_11136,inst_11138);var state_11199__$1 = (function (){var statearr_11265 = state_11199;(statearr_11265[8] = inst_11143);
return statearr_11265;
})();var statearr_11266_12608 = state_11199__$1;(statearr_11266_12608[2] = null);
(statearr_11266_12608[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 28))
{var inst_11135 = (state_11199[13]);var inst_11156 = (state_11199[9]);var inst_11156__$1 = cljs.core.seq.call(null,inst_11135);var state_11199__$1 = (function (){var statearr_11270 = state_11199;(statearr_11270[9] = inst_11156__$1);
return statearr_11270;
})();if(inst_11156__$1)
{var statearr_11271_12609 = state_11199__$1;(statearr_11271_12609[1] = 33);
} else
{var statearr_11272_12610 = state_11199__$1;(statearr_11272_12610[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 29))
{var inst_11183 = (state_11199[2]);var state_11199__$1 = state_11199;var statearr_11273_12611 = state_11199__$1;(statearr_11273_12611[2] = inst_11183);
(statearr_11273_12611[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 30))
{var inst_11137 = (state_11199[10]);var inst_11138 = (state_11199[11]);var inst_11136 = (state_11199[12]);var inst_11135 = (state_11199[13]);var inst_11152 = (state_11199[2]);var inst_11153 = (inst_11138 + 1);var tmp11267 = inst_11137;var tmp11268 = inst_11136;var tmp11269 = inst_11135;var inst_11135__$1 = tmp11269;var inst_11136__$1 = tmp11268;var inst_11137__$1 = tmp11267;var inst_11138__$1 = inst_11153;var state_11199__$1 = (function (){var statearr_11274 = state_11199;(statearr_11274[10] = inst_11137__$1);
(statearr_11274[11] = inst_11138__$1);
(statearr_11274[12] = inst_11136__$1);
(statearr_11274[13] = inst_11135__$1);
(statearr_11274[31] = inst_11152);
return statearr_11274;
})();var statearr_11275_12612 = state_11199__$1;(statearr_11275_12612[2] = null);
(statearr_11275_12612[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11200 === 31))
{var inst_11143 = (state_11199[8]);var inst_11144 = (state_11199[2]);var inst_11145 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11146 = cljs.core.async.untap_STAR_.call(null,m,inst_11143);var state_11199__$1 = (function (){var statearr_11276 = state_11199;(statearr_11276[32] = inst_11145);
(statearr_11276[33] = inst_11144);
return statearr_11276;
})();var statearr_11277_12613 = state_11199__$1;(statearr_11277_12613[2] = inst_11146);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11199__$1);
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
});})(c__7524__auto___12561,cs,m,dchan,dctr,done))
;return ((function (switch__7454__auto__,c__7524__auto___12561,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11281[0] = state_machine__7455__auto__);
(statearr_11281[1] = 1);
return statearr_11281;
});
var state_machine__7455__auto____1 = (function (state_11199){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11199);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11282){if((e11282 instanceof Object))
{var ex__7458__auto__ = e11282;var statearr_11283_12614 = state_11199;(statearr_11283_12614[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11199);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12615 = state_11199;
state_11199 = G__12615;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11199){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12561,cs,m,dchan,dctr,done))
})();var state__7526__auto__ = (function (){var statearr_11284 = f__7525__auto__.call(null);(statearr_11284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12561);
return statearr_11284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12561,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj11286 = {};return obj11286;
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
;var m = (function (){if(typeof cljs.core.async.t11396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11396 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11397){
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
this.meta11397 = meta11397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11396.cljs$lang$type = true;
cljs.core.async.t11396.cljs$lang$ctorStr = "cljs.core.async/t11396";
cljs.core.async.t11396.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11396");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11398){var self__ = this;
var _11398__$1 = this;return self__.meta11397;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11398,meta11397__$1){var self__ = this;
var _11398__$1 = this;return (new cljs.core.async.t11396(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11397__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11396 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11396(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11397){return (new cljs.core.async.t11396(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11397));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11396(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7524__auto___12616 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11463){var state_val_11464 = (state_11463[1]);if((state_val_11464 === 1))
{var inst_11402 = (state_11463[7]);var inst_11402__$1 = calc_state.call(null);var inst_11403 = cljs.core.seq_QMARK_.call(null,inst_11402__$1);var state_11463__$1 = (function (){var statearr_11465 = state_11463;(statearr_11465[7] = inst_11402__$1);
return statearr_11465;
})();if(inst_11403)
{var statearr_11466_12617 = state_11463__$1;(statearr_11466_12617[1] = 2);
} else
{var statearr_11467_12618 = state_11463__$1;(statearr_11467_12618[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 2))
{var inst_11402 = (state_11463[7]);var inst_11405 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11402);var state_11463__$1 = state_11463;var statearr_11468_12619 = state_11463__$1;(statearr_11468_12619[2] = inst_11405);
(statearr_11468_12619[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 3))
{var inst_11402 = (state_11463[7]);var state_11463__$1 = state_11463;var statearr_11469_12620 = state_11463__$1;(statearr_11469_12620[2] = inst_11402);
(statearr_11469_12620[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 4))
{var inst_11402 = (state_11463[7]);var inst_11408 = (state_11463[2]);var inst_11409 = cljs.core.get.call(null,inst_11408,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11410 = cljs.core.get.call(null,inst_11408,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11411 = cljs.core.get.call(null,inst_11408,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11412 = inst_11402;var state_11463__$1 = (function (){var statearr_11470 = state_11463;(statearr_11470[8] = inst_11412);
(statearr_11470[9] = inst_11411);
(statearr_11470[10] = inst_11410);
(statearr_11470[11] = inst_11409);
return statearr_11470;
})();var statearr_11471_12621 = state_11463__$1;(statearr_11471_12621[2] = null);
(statearr_11471_12621[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 5))
{var inst_11412 = (state_11463[8]);var inst_11415 = cljs.core.seq_QMARK_.call(null,inst_11412);var state_11463__$1 = state_11463;if(inst_11415)
{var statearr_11472_12622 = state_11463__$1;(statearr_11472_12622[1] = 7);
} else
{var statearr_11473_12623 = state_11463__$1;(statearr_11473_12623[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 6))
{var inst_11461 = (state_11463[2]);var state_11463__$1 = state_11463;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11463__$1,inst_11461);
} else
{if((state_val_11464 === 7))
{var inst_11412 = (state_11463[8]);var inst_11417 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11412);var state_11463__$1 = state_11463;var statearr_11474_12624 = state_11463__$1;(statearr_11474_12624[2] = inst_11417);
(statearr_11474_12624[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 8))
{var inst_11412 = (state_11463[8]);var state_11463__$1 = state_11463;var statearr_11475_12625 = state_11463__$1;(statearr_11475_12625[2] = inst_11412);
(statearr_11475_12625[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 9))
{var inst_11420 = (state_11463[12]);var inst_11420__$1 = (state_11463[2]);var inst_11421 = cljs.core.get.call(null,inst_11420__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11422 = cljs.core.get.call(null,inst_11420__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11423 = cljs.core.get.call(null,inst_11420__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11463__$1 = (function (){var statearr_11476 = state_11463;(statearr_11476[13] = inst_11422);
(statearr_11476[12] = inst_11420__$1);
(statearr_11476[14] = inst_11423);
return statearr_11476;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11463__$1,10,inst_11421);
} else
{if((state_val_11464 === 10))
{var inst_11428 = (state_11463[15]);var inst_11427 = (state_11463[16]);var inst_11426 = (state_11463[2]);var inst_11427__$1 = cljs.core.nth.call(null,inst_11426,0,null);var inst_11428__$1 = cljs.core.nth.call(null,inst_11426,1,null);var inst_11429 = (inst_11427__$1 == null);var inst_11430 = cljs.core._EQ_.call(null,inst_11428__$1,change);var inst_11431 = (inst_11429) || (inst_11430);var state_11463__$1 = (function (){var statearr_11477 = state_11463;(statearr_11477[15] = inst_11428__$1);
(statearr_11477[16] = inst_11427__$1);
return statearr_11477;
})();if(cljs.core.truth_(inst_11431))
{var statearr_11478_12626 = state_11463__$1;(statearr_11478_12626[1] = 11);
} else
{var statearr_11479_12627 = state_11463__$1;(statearr_11479_12627[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 11))
{var inst_11427 = (state_11463[16]);var inst_11433 = (inst_11427 == null);var state_11463__$1 = state_11463;if(cljs.core.truth_(inst_11433))
{var statearr_11480_12628 = state_11463__$1;(statearr_11480_12628[1] = 14);
} else
{var statearr_11481_12629 = state_11463__$1;(statearr_11481_12629[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 12))
{var inst_11428 = (state_11463[15]);var inst_11442 = (state_11463[17]);var inst_11423 = (state_11463[14]);var inst_11442__$1 = inst_11423.call(null,inst_11428);var state_11463__$1 = (function (){var statearr_11482 = state_11463;(statearr_11482[17] = inst_11442__$1);
return statearr_11482;
})();if(cljs.core.truth_(inst_11442__$1))
{var statearr_11483_12630 = state_11463__$1;(statearr_11483_12630[1] = 17);
} else
{var statearr_11484_12631 = state_11463__$1;(statearr_11484_12631[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 13))
{var inst_11459 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11485_12632 = state_11463__$1;(statearr_11485_12632[2] = inst_11459);
(statearr_11485_12632[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 14))
{var inst_11428 = (state_11463[15]);var inst_11435 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11428);var state_11463__$1 = state_11463;var statearr_11486_12633 = state_11463__$1;(statearr_11486_12633[2] = inst_11435);
(statearr_11486_12633[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 15))
{var state_11463__$1 = state_11463;var statearr_11487_12634 = state_11463__$1;(statearr_11487_12634[2] = null);
(statearr_11487_12634[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 16))
{var inst_11438 = (state_11463[2]);var inst_11439 = calc_state.call(null);var inst_11412 = inst_11439;var state_11463__$1 = (function (){var statearr_11488 = state_11463;(statearr_11488[8] = inst_11412);
(statearr_11488[18] = inst_11438);
return statearr_11488;
})();var statearr_11489_12635 = state_11463__$1;(statearr_11489_12635[2] = null);
(statearr_11489_12635[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 17))
{var inst_11442 = (state_11463[17]);var state_11463__$1 = state_11463;var statearr_11490_12636 = state_11463__$1;(statearr_11490_12636[2] = inst_11442);
(statearr_11490_12636[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 18))
{var inst_11428 = (state_11463[15]);var inst_11422 = (state_11463[13]);var inst_11423 = (state_11463[14]);var inst_11445 = cljs.core.empty_QMARK_.call(null,inst_11423);var inst_11446 = inst_11422.call(null,inst_11428);var inst_11447 = cljs.core.not.call(null,inst_11446);var inst_11448 = (inst_11445) && (inst_11447);var state_11463__$1 = state_11463;var statearr_11491_12637 = state_11463__$1;(statearr_11491_12637[2] = inst_11448);
(statearr_11491_12637[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 19))
{var inst_11450 = (state_11463[2]);var state_11463__$1 = state_11463;if(cljs.core.truth_(inst_11450))
{var statearr_11492_12638 = state_11463__$1;(statearr_11492_12638[1] = 20);
} else
{var statearr_11493_12639 = state_11463__$1;(statearr_11493_12639[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 20))
{var inst_11427 = (state_11463[16]);var state_11463__$1 = state_11463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11463__$1,23,out,inst_11427);
} else
{if((state_val_11464 === 21))
{var state_11463__$1 = state_11463;var statearr_11494_12640 = state_11463__$1;(statearr_11494_12640[2] = null);
(statearr_11494_12640[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 22))
{var inst_11420 = (state_11463[12]);var inst_11456 = (state_11463[2]);var inst_11412 = inst_11420;var state_11463__$1 = (function (){var statearr_11495 = state_11463;(statearr_11495[8] = inst_11412);
(statearr_11495[19] = inst_11456);
return statearr_11495;
})();var statearr_11496_12641 = state_11463__$1;(statearr_11496_12641[2] = null);
(statearr_11496_12641[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11464 === 23))
{var inst_11453 = (state_11463[2]);var state_11463__$1 = state_11463;var statearr_11497_12642 = state_11463__$1;(statearr_11497_12642[2] = inst_11453);
(statearr_11497_12642[1] = 22);
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
});})(c__7524__auto___12616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7454__auto__,c__7524__auto___12616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11501[0] = state_machine__7455__auto__);
(statearr_11501[1] = 1);
return statearr_11501;
});
var state_machine__7455__auto____1 = (function (state_11463){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11463);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11502){if((e11502 instanceof Object))
{var ex__7458__auto__ = e11502;var statearr_11503_12643 = state_11463;(statearr_11503_12643[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11463);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12644 = state_11463;
state_11463 = G__12644;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11463){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7526__auto__ = (function (){var statearr_11504 = f__7525__auto__.call(null);(statearr_11504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12616);
return statearr_11504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj11506 = {};return obj11506;
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
return (function (p1__11507_SHARP_){if(cljs.core.truth_(p1__11507_SHARP_.call(null,topic)))
{return p1__11507_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11507_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4884__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11632 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11632 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11633){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11633 = meta11633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11632.cljs$lang$type = true;
cljs.core.async.t11632.cljs$lang$ctorStr = "cljs.core.async/t11632";
cljs.core.async.t11632.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5451__auto__,writer__5452__auto__,opt__5453__auto__){return cljs.core._write.call(null,writer__5452__auto__,"cljs.core.async/t11632");
});})(mults,ensure_mult))
;
cljs.core.async.t11632.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11632.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11632.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11632.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11632.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11632.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11634){var self__ = this;
var _11634__$1 = this;return self__.meta11633;
});})(mults,ensure_mult))
;
cljs.core.async.t11632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11634,meta11633__$1){var self__ = this;
var _11634__$1 = this;return (new cljs.core.async.t11632(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11633__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11632 = ((function (mults,ensure_mult){
return (function __GT_t11632(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11633){return (new cljs.core.async.t11632(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11633));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11632(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7524__auto___12645 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12645,mults,ensure_mult,p){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12645,mults,ensure_mult,p){
return (function (state_11708){var state_val_11709 = (state_11708[1]);if((state_val_11709 === 1))
{var state_11708__$1 = state_11708;var statearr_11710_12646 = state_11708__$1;(statearr_11710_12646[2] = null);
(statearr_11710_12646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 2))
{var state_11708__$1 = state_11708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11708__$1,4,ch);
} else
{if((state_val_11709 === 3))
{var inst_11706 = (state_11708[2]);var state_11708__$1 = state_11708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11708__$1,inst_11706);
} else
{if((state_val_11709 === 4))
{var inst_11637 = (state_11708[7]);var inst_11637__$1 = (state_11708[2]);var inst_11638 = (inst_11637__$1 == null);var state_11708__$1 = (function (){var statearr_11711 = state_11708;(statearr_11711[7] = inst_11637__$1);
return statearr_11711;
})();if(cljs.core.truth_(inst_11638))
{var statearr_11712_12647 = state_11708__$1;(statearr_11712_12647[1] = 5);
} else
{var statearr_11713_12648 = state_11708__$1;(statearr_11713_12648[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 5))
{var inst_11644 = cljs.core.deref.call(null,mults);var inst_11645 = cljs.core.vals.call(null,inst_11644);var inst_11646 = cljs.core.seq.call(null,inst_11645);var inst_11647 = inst_11646;var inst_11648 = null;var inst_11649 = 0;var inst_11650 = 0;var state_11708__$1 = (function (){var statearr_11714 = state_11708;(statearr_11714[8] = inst_11650);
(statearr_11714[9] = inst_11648);
(statearr_11714[10] = inst_11647);
(statearr_11714[11] = inst_11649);
return statearr_11714;
})();var statearr_11715_12649 = state_11708__$1;(statearr_11715_12649[2] = null);
(statearr_11715_12649[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 6))
{var inst_11637 = (state_11708[7]);var inst_11687 = (state_11708[12]);var inst_11685 = (state_11708[13]);var inst_11685__$1 = topic_fn.call(null,inst_11637);var inst_11686 = cljs.core.deref.call(null,mults);var inst_11687__$1 = cljs.core.get.call(null,inst_11686,inst_11685__$1);var state_11708__$1 = (function (){var statearr_11716 = state_11708;(statearr_11716[12] = inst_11687__$1);
(statearr_11716[13] = inst_11685__$1);
return statearr_11716;
})();if(cljs.core.truth_(inst_11687__$1))
{var statearr_11717_12650 = state_11708__$1;(statearr_11717_12650[1] = 19);
} else
{var statearr_11718_12651 = state_11708__$1;(statearr_11718_12651[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 7))
{var inst_11704 = (state_11708[2]);var state_11708__$1 = state_11708;var statearr_11719_12652 = state_11708__$1;(statearr_11719_12652[2] = inst_11704);
(statearr_11719_12652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 8))
{var inst_11650 = (state_11708[8]);var inst_11649 = (state_11708[11]);var inst_11652 = (inst_11650 < inst_11649);var inst_11653 = inst_11652;var state_11708__$1 = state_11708;if(cljs.core.truth_(inst_11653))
{var statearr_11723_12653 = state_11708__$1;(statearr_11723_12653[1] = 10);
} else
{var statearr_11724_12654 = state_11708__$1;(statearr_11724_12654[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 9))
{var inst_11683 = (state_11708[2]);var state_11708__$1 = state_11708;var statearr_11725_12655 = state_11708__$1;(statearr_11725_12655[2] = inst_11683);
(statearr_11725_12655[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 10))
{var inst_11650 = (state_11708[8]);var inst_11648 = (state_11708[9]);var inst_11647 = (state_11708[10]);var inst_11649 = (state_11708[11]);var inst_11655 = cljs.core._nth.call(null,inst_11648,inst_11650);var inst_11656 = cljs.core.async.muxch_STAR_.call(null,inst_11655);var inst_11657 = cljs.core.async.close_BANG_.call(null,inst_11656);var inst_11658 = (inst_11650 + 1);var tmp11720 = inst_11648;var tmp11721 = inst_11647;var tmp11722 = inst_11649;var inst_11647__$1 = tmp11721;var inst_11648__$1 = tmp11720;var inst_11649__$1 = tmp11722;var inst_11650__$1 = inst_11658;var state_11708__$1 = (function (){var statearr_11726 = state_11708;(statearr_11726[14] = inst_11657);
(statearr_11726[8] = inst_11650__$1);
(statearr_11726[9] = inst_11648__$1);
(statearr_11726[10] = inst_11647__$1);
(statearr_11726[11] = inst_11649__$1);
return statearr_11726;
})();var statearr_11727_12656 = state_11708__$1;(statearr_11727_12656[2] = null);
(statearr_11727_12656[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 11))
{var inst_11661 = (state_11708[15]);var inst_11647 = (state_11708[10]);var inst_11661__$1 = cljs.core.seq.call(null,inst_11647);var state_11708__$1 = (function (){var statearr_11728 = state_11708;(statearr_11728[15] = inst_11661__$1);
return statearr_11728;
})();if(inst_11661__$1)
{var statearr_11729_12657 = state_11708__$1;(statearr_11729_12657[1] = 13);
} else
{var statearr_11730_12658 = state_11708__$1;(statearr_11730_12658[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 12))
{var inst_11681 = (state_11708[2]);var state_11708__$1 = state_11708;var statearr_11731_12659 = state_11708__$1;(statearr_11731_12659[2] = inst_11681);
(statearr_11731_12659[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 13))
{var inst_11661 = (state_11708[15]);var inst_11663 = cljs.core.chunked_seq_QMARK_.call(null,inst_11661);var state_11708__$1 = state_11708;if(inst_11663)
{var statearr_11732_12660 = state_11708__$1;(statearr_11732_12660[1] = 16);
} else
{var statearr_11733_12661 = state_11708__$1;(statearr_11733_12661[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 14))
{var state_11708__$1 = state_11708;var statearr_11734_12662 = state_11708__$1;(statearr_11734_12662[2] = null);
(statearr_11734_12662[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 15))
{var inst_11679 = (state_11708[2]);var state_11708__$1 = state_11708;var statearr_11735_12663 = state_11708__$1;(statearr_11735_12663[2] = inst_11679);
(statearr_11735_12663[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 16))
{var inst_11661 = (state_11708[15]);var inst_11665 = cljs.core.chunk_first.call(null,inst_11661);var inst_11666 = cljs.core.chunk_rest.call(null,inst_11661);var inst_11667 = cljs.core.count.call(null,inst_11665);var inst_11647 = inst_11666;var inst_11648 = inst_11665;var inst_11649 = inst_11667;var inst_11650 = 0;var state_11708__$1 = (function (){var statearr_11736 = state_11708;(statearr_11736[8] = inst_11650);
(statearr_11736[9] = inst_11648);
(statearr_11736[10] = inst_11647);
(statearr_11736[11] = inst_11649);
return statearr_11736;
})();var statearr_11737_12664 = state_11708__$1;(statearr_11737_12664[2] = null);
(statearr_11737_12664[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 17))
{var inst_11661 = (state_11708[15]);var inst_11670 = cljs.core.first.call(null,inst_11661);var inst_11671 = cljs.core.async.muxch_STAR_.call(null,inst_11670);var inst_11672 = cljs.core.async.close_BANG_.call(null,inst_11671);var inst_11673 = cljs.core.next.call(null,inst_11661);var inst_11647 = inst_11673;var inst_11648 = null;var inst_11649 = 0;var inst_11650 = 0;var state_11708__$1 = (function (){var statearr_11738 = state_11708;(statearr_11738[8] = inst_11650);
(statearr_11738[9] = inst_11648);
(statearr_11738[10] = inst_11647);
(statearr_11738[11] = inst_11649);
(statearr_11738[16] = inst_11672);
return statearr_11738;
})();var statearr_11739_12665 = state_11708__$1;(statearr_11739_12665[2] = null);
(statearr_11739_12665[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 18))
{var inst_11676 = (state_11708[2]);var state_11708__$1 = state_11708;var statearr_11740_12666 = state_11708__$1;(statearr_11740_12666[2] = inst_11676);
(statearr_11740_12666[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 19))
{var state_11708__$1 = state_11708;var statearr_11741_12667 = state_11708__$1;(statearr_11741_12667[2] = null);
(statearr_11741_12667[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 20))
{var state_11708__$1 = state_11708;var statearr_11742_12668 = state_11708__$1;(statearr_11742_12668[2] = null);
(statearr_11742_12668[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 21))
{var inst_11701 = (state_11708[2]);var state_11708__$1 = (function (){var statearr_11743 = state_11708;(statearr_11743[17] = inst_11701);
return statearr_11743;
})();var statearr_11744_12669 = state_11708__$1;(statearr_11744_12669[2] = null);
(statearr_11744_12669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 22))
{var inst_11698 = (state_11708[2]);var state_11708__$1 = state_11708;var statearr_11745_12670 = state_11708__$1;(statearr_11745_12670[2] = inst_11698);
(statearr_11745_12670[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 23))
{var inst_11685 = (state_11708[13]);var inst_11689 = (state_11708[2]);var inst_11690 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11685);var state_11708__$1 = (function (){var statearr_11746 = state_11708;(statearr_11746[18] = inst_11689);
return statearr_11746;
})();var statearr_11747_12671 = state_11708__$1;(statearr_11747_12671[2] = inst_11690);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11708__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11709 === 24))
{var inst_11637 = (state_11708[7]);var inst_11687 = (state_11708[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11708,23,Object,null,22);var inst_11694 = cljs.core.async.muxch_STAR_.call(null,inst_11687);var state_11708__$1 = state_11708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11708__$1,25,inst_11694,inst_11637);
} else
{if((state_val_11709 === 25))
{var inst_11696 = (state_11708[2]);var state_11708__$1 = state_11708;var statearr_11748_12672 = state_11708__$1;(statearr_11748_12672[2] = inst_11696);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11708__$1);
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
});})(c__7524__auto___12645,mults,ensure_mult,p))
;return ((function (switch__7454__auto__,c__7524__auto___12645,mults,ensure_mult,p){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11752[0] = state_machine__7455__auto__);
(statearr_11752[1] = 1);
return statearr_11752;
});
var state_machine__7455__auto____1 = (function (state_11708){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11708);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11753){if((e11753 instanceof Object))
{var ex__7458__auto__ = e11753;var statearr_11754_12673 = state_11708;(statearr_11754_12673[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12674 = state_11708;
state_11708 = G__12674;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11708){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12645,mults,ensure_mult,p))
})();var state__7526__auto__ = (function (){var statearr_11755 = f__7525__auto__.call(null);(statearr_11755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12645);
return statearr_11755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12645,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__7524__auto___12675 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12675,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12675,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11862){var state_val_11863 = (state_11862[1]);if((state_val_11863 === 1))
{var state_11862__$1 = state_11862;var statearr_11864_12676 = state_11862__$1;(statearr_11864_12676[2] = null);
(statearr_11864_12676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 2))
{var inst_11825 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11826 = 0;var state_11862__$1 = (function (){var statearr_11865 = state_11862;(statearr_11865[7] = inst_11826);
(statearr_11865[8] = inst_11825);
return statearr_11865;
})();var statearr_11866_12677 = state_11862__$1;(statearr_11866_12677[2] = null);
(statearr_11866_12677[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 3))
{var inst_11860 = (state_11862[2]);var state_11862__$1 = state_11862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11862__$1,inst_11860);
} else
{if((state_val_11863 === 4))
{var inst_11826 = (state_11862[7]);var inst_11828 = (inst_11826 < cnt);var state_11862__$1 = state_11862;if(cljs.core.truth_(inst_11828))
{var statearr_11867_12678 = state_11862__$1;(statearr_11867_12678[1] = 6);
} else
{var statearr_11868_12679 = state_11862__$1;(statearr_11868_12679[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 5))
{var inst_11846 = (state_11862[2]);var state_11862__$1 = (function (){var statearr_11869 = state_11862;(statearr_11869[9] = inst_11846);
return statearr_11869;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11862__$1,12,dchan);
} else
{if((state_val_11863 === 6))
{var state_11862__$1 = state_11862;var statearr_11870_12680 = state_11862__$1;(statearr_11870_12680[2] = null);
(statearr_11870_12680[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 7))
{var state_11862__$1 = state_11862;var statearr_11871_12681 = state_11862__$1;(statearr_11871_12681[2] = null);
(statearr_11871_12681[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 8))
{var inst_11844 = (state_11862[2]);var state_11862__$1 = state_11862;var statearr_11872_12682 = state_11862__$1;(statearr_11872_12682[2] = inst_11844);
(statearr_11872_12682[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 9))
{var inst_11826 = (state_11862[7]);var inst_11839 = (state_11862[2]);var inst_11840 = (inst_11826 + 1);var inst_11826__$1 = inst_11840;var state_11862__$1 = (function (){var statearr_11873 = state_11862;(statearr_11873[7] = inst_11826__$1);
(statearr_11873[10] = inst_11839);
return statearr_11873;
})();var statearr_11874_12683 = state_11862__$1;(statearr_11874_12683[2] = null);
(statearr_11874_12683[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 10))
{var inst_11830 = (state_11862[2]);var inst_11831 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11862__$1 = (function (){var statearr_11875 = state_11862;(statearr_11875[11] = inst_11830);
return statearr_11875;
})();var statearr_11876_12684 = state_11862__$1;(statearr_11876_12684[2] = inst_11831);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11862__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 11))
{var inst_11826 = (state_11862[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11862,10,Object,null,9);var inst_11835 = chs__$1.call(null,inst_11826);var inst_11836 = done.call(null,inst_11826);var inst_11837 = cljs.core.async.take_BANG_.call(null,inst_11835,inst_11836);var state_11862__$1 = state_11862;var statearr_11877_12685 = state_11862__$1;(statearr_11877_12685[2] = inst_11837);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11862__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 12))
{var inst_11848 = (state_11862[12]);var inst_11848__$1 = (state_11862[2]);var inst_11849 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11848__$1);var state_11862__$1 = (function (){var statearr_11878 = state_11862;(statearr_11878[12] = inst_11848__$1);
return statearr_11878;
})();if(cljs.core.truth_(inst_11849))
{var statearr_11879_12686 = state_11862__$1;(statearr_11879_12686[1] = 13);
} else
{var statearr_11880_12687 = state_11862__$1;(statearr_11880_12687[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 13))
{var inst_11851 = cljs.core.async.close_BANG_.call(null,out);var state_11862__$1 = state_11862;var statearr_11881_12688 = state_11862__$1;(statearr_11881_12688[2] = inst_11851);
(statearr_11881_12688[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 14))
{var inst_11848 = (state_11862[12]);var inst_11853 = cljs.core.apply.call(null,f,inst_11848);var state_11862__$1 = state_11862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11862__$1,16,out,inst_11853);
} else
{if((state_val_11863 === 15))
{var inst_11858 = (state_11862[2]);var state_11862__$1 = state_11862;var statearr_11882_12689 = state_11862__$1;(statearr_11882_12689[2] = inst_11858);
(statearr_11882_12689[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11863 === 16))
{var inst_11855 = (state_11862[2]);var state_11862__$1 = (function (){var statearr_11883 = state_11862;(statearr_11883[13] = inst_11855);
return statearr_11883;
})();var statearr_11884_12690 = state_11862__$1;(statearr_11884_12690[2] = null);
(statearr_11884_12690[1] = 2);
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
});})(c__7524__auto___12675,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7454__auto__,c__7524__auto___12675,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11888[0] = state_machine__7455__auto__);
(statearr_11888[1] = 1);
return statearr_11888;
});
var state_machine__7455__auto____1 = (function (state_11862){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11862);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11889){if((e11889 instanceof Object))
{var ex__7458__auto__ = e11889;var statearr_11890_12691 = state_11862;(statearr_11890_12691[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11862);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12692 = state_11862;
state_11862 = G__12692;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11862){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12675,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7526__auto__ = (function (){var statearr_11891 = f__7525__auto__.call(null);(statearr_11891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12675);
return statearr_11891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12675,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12693 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12693,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12693,out){
return (function (state_11975){var state_val_11976 = (state_11975[1]);if((state_val_11976 === 1))
{var inst_11946 = cljs.core.vec.call(null,chs);var inst_11947 = inst_11946;var state_11975__$1 = (function (){var statearr_11977 = state_11975;(statearr_11977[7] = inst_11947);
return statearr_11977;
})();var statearr_11978_12694 = state_11975__$1;(statearr_11978_12694[2] = null);
(statearr_11978_12694[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11976 === 2))
{var inst_11947 = (state_11975[7]);var inst_11949 = cljs.core.count.call(null,inst_11947);var inst_11950 = (inst_11949 > 0);var state_11975__$1 = state_11975;if(cljs.core.truth_(inst_11950))
{var statearr_11979_12695 = state_11975__$1;(statearr_11979_12695[1] = 4);
} else
{var statearr_11980_12696 = state_11975__$1;(statearr_11980_12696[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11976 === 3))
{var inst_11973 = (state_11975[2]);var state_11975__$1 = state_11975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11975__$1,inst_11973);
} else
{if((state_val_11976 === 4))
{var inst_11947 = (state_11975[7]);var state_11975__$1 = state_11975;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11975__$1,7,inst_11947);
} else
{if((state_val_11976 === 5))
{var inst_11969 = cljs.core.async.close_BANG_.call(null,out);var state_11975__$1 = state_11975;var statearr_11981_12697 = state_11975__$1;(statearr_11981_12697[2] = inst_11969);
(statearr_11981_12697[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11976 === 6))
{var inst_11971 = (state_11975[2]);var state_11975__$1 = state_11975;var statearr_11982_12698 = state_11975__$1;(statearr_11982_12698[2] = inst_11971);
(statearr_11982_12698[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11976 === 7))
{var inst_11955 = (state_11975[8]);var inst_11954 = (state_11975[9]);var inst_11954__$1 = (state_11975[2]);var inst_11955__$1 = cljs.core.nth.call(null,inst_11954__$1,0,null);var inst_11956 = cljs.core.nth.call(null,inst_11954__$1,1,null);var inst_11957 = (inst_11955__$1 == null);var state_11975__$1 = (function (){var statearr_11983 = state_11975;(statearr_11983[10] = inst_11956);
(statearr_11983[8] = inst_11955__$1);
(statearr_11983[9] = inst_11954__$1);
return statearr_11983;
})();if(cljs.core.truth_(inst_11957))
{var statearr_11984_12699 = state_11975__$1;(statearr_11984_12699[1] = 8);
} else
{var statearr_11985_12700 = state_11975__$1;(statearr_11985_12700[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11976 === 8))
{var inst_11947 = (state_11975[7]);var inst_11956 = (state_11975[10]);var inst_11955 = (state_11975[8]);var inst_11954 = (state_11975[9]);var inst_11959 = (function (){var c = inst_11956;var v = inst_11955;var vec__11952 = inst_11954;var cs = inst_11947;return ((function (c,v,vec__11952,cs,inst_11947,inst_11956,inst_11955,inst_11954,state_val_11976,c__7524__auto___12693,out){
return (function (p1__11892_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11892_SHARP_);
});
;})(c,v,vec__11952,cs,inst_11947,inst_11956,inst_11955,inst_11954,state_val_11976,c__7524__auto___12693,out))
})();var inst_11960 = cljs.core.filterv.call(null,inst_11959,inst_11947);var inst_11947__$1 = inst_11960;var state_11975__$1 = (function (){var statearr_11986 = state_11975;(statearr_11986[7] = inst_11947__$1);
return statearr_11986;
})();var statearr_11987_12701 = state_11975__$1;(statearr_11987_12701[2] = null);
(statearr_11987_12701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11976 === 9))
{var inst_11955 = (state_11975[8]);var state_11975__$1 = state_11975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11975__$1,11,out,inst_11955);
} else
{if((state_val_11976 === 10))
{var inst_11967 = (state_11975[2]);var state_11975__$1 = state_11975;var statearr_11989_12702 = state_11975__$1;(statearr_11989_12702[2] = inst_11967);
(statearr_11989_12702[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11976 === 11))
{var inst_11947 = (state_11975[7]);var inst_11964 = (state_11975[2]);var tmp11988 = inst_11947;var inst_11947__$1 = tmp11988;var state_11975__$1 = (function (){var statearr_11990 = state_11975;(statearr_11990[7] = inst_11947__$1);
(statearr_11990[11] = inst_11964);
return statearr_11990;
})();var statearr_11991_12703 = state_11975__$1;(statearr_11991_12703[2] = null);
(statearr_11991_12703[1] = 2);
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
});})(c__7524__auto___12693,out))
;return ((function (switch__7454__auto__,c__7524__auto___12693,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_11995 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11995[0] = state_machine__7455__auto__);
(statearr_11995[1] = 1);
return statearr_11995;
});
var state_machine__7455__auto____1 = (function (state_11975){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_11975);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e11996){if((e11996 instanceof Object))
{var ex__7458__auto__ = e11996;var statearr_11997_12704 = state_11975;(statearr_11997_12704[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11975);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12705 = state_11975;
state_11975 = G__12705;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_11975){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_11975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12693,out))
})();var state__7526__auto__ = (function (){var statearr_11998 = f__7525__auto__.call(null);(statearr_11998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12693);
return statearr_11998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12693,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12706 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12706,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12706,out){
return (function (state_12068){var state_val_12069 = (state_12068[1]);if((state_val_12069 === 1))
{var inst_12045 = 0;var state_12068__$1 = (function (){var statearr_12070 = state_12068;(statearr_12070[7] = inst_12045);
return statearr_12070;
})();var statearr_12071_12707 = state_12068__$1;(statearr_12071_12707[2] = null);
(statearr_12071_12707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 2))
{var inst_12045 = (state_12068[7]);var inst_12047 = (inst_12045 < n);var state_12068__$1 = state_12068;if(cljs.core.truth_(inst_12047))
{var statearr_12072_12708 = state_12068__$1;(statearr_12072_12708[1] = 4);
} else
{var statearr_12073_12709 = state_12068__$1;(statearr_12073_12709[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 3))
{var inst_12065 = (state_12068[2]);var inst_12066 = cljs.core.async.close_BANG_.call(null,out);var state_12068__$1 = (function (){var statearr_12074 = state_12068;(statearr_12074[8] = inst_12065);
return statearr_12074;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12068__$1,inst_12066);
} else
{if((state_val_12069 === 4))
{var state_12068__$1 = state_12068;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12068__$1,7,ch);
} else
{if((state_val_12069 === 5))
{var state_12068__$1 = state_12068;var statearr_12075_12710 = state_12068__$1;(statearr_12075_12710[2] = null);
(statearr_12075_12710[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 6))
{var inst_12063 = (state_12068[2]);var state_12068__$1 = state_12068;var statearr_12076_12711 = state_12068__$1;(statearr_12076_12711[2] = inst_12063);
(statearr_12076_12711[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 7))
{var inst_12050 = (state_12068[9]);var inst_12050__$1 = (state_12068[2]);var inst_12051 = (inst_12050__$1 == null);var inst_12052 = cljs.core.not.call(null,inst_12051);var state_12068__$1 = (function (){var statearr_12077 = state_12068;(statearr_12077[9] = inst_12050__$1);
return statearr_12077;
})();if(inst_12052)
{var statearr_12078_12712 = state_12068__$1;(statearr_12078_12712[1] = 8);
} else
{var statearr_12079_12713 = state_12068__$1;(statearr_12079_12713[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 8))
{var inst_12050 = (state_12068[9]);var state_12068__$1 = state_12068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12068__$1,11,out,inst_12050);
} else
{if((state_val_12069 === 9))
{var state_12068__$1 = state_12068;var statearr_12080_12714 = state_12068__$1;(statearr_12080_12714[2] = null);
(statearr_12080_12714[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 10))
{var inst_12060 = (state_12068[2]);var state_12068__$1 = state_12068;var statearr_12081_12715 = state_12068__$1;(statearr_12081_12715[2] = inst_12060);
(statearr_12081_12715[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12069 === 11))
{var inst_12045 = (state_12068[7]);var inst_12055 = (state_12068[2]);var inst_12056 = (inst_12045 + 1);var inst_12045__$1 = inst_12056;var state_12068__$1 = (function (){var statearr_12082 = state_12068;(statearr_12082[7] = inst_12045__$1);
(statearr_12082[10] = inst_12055);
return statearr_12082;
})();var statearr_12083_12716 = state_12068__$1;(statearr_12083_12716[2] = null);
(statearr_12083_12716[1] = 2);
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
});})(c__7524__auto___12706,out))
;return ((function (switch__7454__auto__,c__7524__auto___12706,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12087 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12087[0] = state_machine__7455__auto__);
(statearr_12087[1] = 1);
return statearr_12087;
});
var state_machine__7455__auto____1 = (function (state_12068){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12068);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12088){if((e12088 instanceof Object))
{var ex__7458__auto__ = e12088;var statearr_12089_12717 = state_12068;(statearr_12089_12717[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12068);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12718 = state_12068;
state_12068 = G__12718;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12068){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12706,out))
})();var state__7526__auto__ = (function (){var statearr_12090 = f__7525__auto__.call(null);(statearr_12090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12706);
return statearr_12090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12706,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12719 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12719,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12719,out){
return (function (state_12162){var state_val_12163 = (state_12162[1]);if((state_val_12163 === 1))
{var inst_12139 = null;var state_12162__$1 = (function (){var statearr_12164 = state_12162;(statearr_12164[7] = inst_12139);
return statearr_12164;
})();var statearr_12165_12720 = state_12162__$1;(statearr_12165_12720[2] = null);
(statearr_12165_12720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12163 === 2))
{var state_12162__$1 = state_12162;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12162__$1,4,ch);
} else
{if((state_val_12163 === 3))
{var inst_12159 = (state_12162[2]);var inst_12160 = cljs.core.async.close_BANG_.call(null,out);var state_12162__$1 = (function (){var statearr_12166 = state_12162;(statearr_12166[8] = inst_12159);
return statearr_12166;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12162__$1,inst_12160);
} else
{if((state_val_12163 === 4))
{var inst_12142 = (state_12162[9]);var inst_12142__$1 = (state_12162[2]);var inst_12143 = (inst_12142__$1 == null);var inst_12144 = cljs.core.not.call(null,inst_12143);var state_12162__$1 = (function (){var statearr_12167 = state_12162;(statearr_12167[9] = inst_12142__$1);
return statearr_12167;
})();if(inst_12144)
{var statearr_12168_12721 = state_12162__$1;(statearr_12168_12721[1] = 5);
} else
{var statearr_12169_12722 = state_12162__$1;(statearr_12169_12722[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12163 === 5))
{var inst_12142 = (state_12162[9]);var inst_12139 = (state_12162[7]);var inst_12146 = cljs.core._EQ_.call(null,inst_12142,inst_12139);var state_12162__$1 = state_12162;if(inst_12146)
{var statearr_12170_12723 = state_12162__$1;(statearr_12170_12723[1] = 8);
} else
{var statearr_12171_12724 = state_12162__$1;(statearr_12171_12724[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12163 === 6))
{var state_12162__$1 = state_12162;var statearr_12173_12725 = state_12162__$1;(statearr_12173_12725[2] = null);
(statearr_12173_12725[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12163 === 7))
{var inst_12157 = (state_12162[2]);var state_12162__$1 = state_12162;var statearr_12174_12726 = state_12162__$1;(statearr_12174_12726[2] = inst_12157);
(statearr_12174_12726[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12163 === 8))
{var inst_12139 = (state_12162[7]);var tmp12172 = inst_12139;var inst_12139__$1 = tmp12172;var state_12162__$1 = (function (){var statearr_12175 = state_12162;(statearr_12175[7] = inst_12139__$1);
return statearr_12175;
})();var statearr_12176_12727 = state_12162__$1;(statearr_12176_12727[2] = null);
(statearr_12176_12727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12163 === 9))
{var inst_12142 = (state_12162[9]);var state_12162__$1 = state_12162;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12162__$1,11,out,inst_12142);
} else
{if((state_val_12163 === 10))
{var inst_12154 = (state_12162[2]);var state_12162__$1 = state_12162;var statearr_12177_12728 = state_12162__$1;(statearr_12177_12728[2] = inst_12154);
(statearr_12177_12728[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12163 === 11))
{var inst_12142 = (state_12162[9]);var inst_12151 = (state_12162[2]);var inst_12139 = inst_12142;var state_12162__$1 = (function (){var statearr_12178 = state_12162;(statearr_12178[7] = inst_12139);
(statearr_12178[10] = inst_12151);
return statearr_12178;
})();var statearr_12179_12729 = state_12162__$1;(statearr_12179_12729[2] = null);
(statearr_12179_12729[1] = 2);
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
});})(c__7524__auto___12719,out))
;return ((function (switch__7454__auto__,c__7524__auto___12719,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12183 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12183[0] = state_machine__7455__auto__);
(statearr_12183[1] = 1);
return statearr_12183;
});
var state_machine__7455__auto____1 = (function (state_12162){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12162);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12184){if((e12184 instanceof Object))
{var ex__7458__auto__ = e12184;var statearr_12185_12730 = state_12162;(statearr_12185_12730[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12162);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12731 = state_12162;
state_12162 = G__12731;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12162){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12719,out))
})();var state__7526__auto__ = (function (){var statearr_12186 = f__7525__auto__.call(null);(statearr_12186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12719);
return statearr_12186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12719,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12732 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12732,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12732,out){
return (function (state_12291){var state_val_12292 = (state_12291[1]);if((state_val_12292 === 1))
{var inst_12254 = (new Array(n));var inst_12255 = inst_12254;var inst_12256 = 0;var state_12291__$1 = (function (){var statearr_12293 = state_12291;(statearr_12293[7] = inst_12256);
(statearr_12293[8] = inst_12255);
return statearr_12293;
})();var statearr_12294_12733 = state_12291__$1;(statearr_12294_12733[2] = null);
(statearr_12294_12733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12292 === 2))
{var state_12291__$1 = state_12291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12291__$1,4,ch);
} else
{if((state_val_12292 === 3))
{var inst_12289 = (state_12291[2]);var state_12291__$1 = state_12291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12291__$1,inst_12289);
} else
{if((state_val_12292 === 4))
{var inst_12259 = (state_12291[9]);var inst_12259__$1 = (state_12291[2]);var inst_12260 = (inst_12259__$1 == null);var inst_12261 = cljs.core.not.call(null,inst_12260);var state_12291__$1 = (function (){var statearr_12295 = state_12291;(statearr_12295[9] = inst_12259__$1);
return statearr_12295;
})();if(inst_12261)
{var statearr_12296_12734 = state_12291__$1;(statearr_12296_12734[1] = 5);
} else
{var statearr_12297_12735 = state_12291__$1;(statearr_12297_12735[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12292 === 5))
{var inst_12264 = (state_12291[10]);var inst_12259 = (state_12291[9]);var inst_12256 = (state_12291[7]);var inst_12255 = (state_12291[8]);var inst_12263 = (inst_12255[inst_12256] = inst_12259);var inst_12264__$1 = (inst_12256 + 1);var inst_12265 = (inst_12264__$1 < n);var state_12291__$1 = (function (){var statearr_12298 = state_12291;(statearr_12298[10] = inst_12264__$1);
(statearr_12298[11] = inst_12263);
return statearr_12298;
})();if(cljs.core.truth_(inst_12265))
{var statearr_12299_12736 = state_12291__$1;(statearr_12299_12736[1] = 8);
} else
{var statearr_12300_12737 = state_12291__$1;(statearr_12300_12737[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12292 === 6))
{var inst_12256 = (state_12291[7]);var inst_12277 = (inst_12256 > 0);var state_12291__$1 = state_12291;if(cljs.core.truth_(inst_12277))
{var statearr_12302_12738 = state_12291__$1;(statearr_12302_12738[1] = 12);
} else
{var statearr_12303_12739 = state_12291__$1;(statearr_12303_12739[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12292 === 7))
{var inst_12287 = (state_12291[2]);var state_12291__$1 = state_12291;var statearr_12304_12740 = state_12291__$1;(statearr_12304_12740[2] = inst_12287);
(statearr_12304_12740[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12292 === 8))
{var inst_12264 = (state_12291[10]);var inst_12255 = (state_12291[8]);var tmp12301 = inst_12255;var inst_12255__$1 = tmp12301;var inst_12256 = inst_12264;var state_12291__$1 = (function (){var statearr_12305 = state_12291;(statearr_12305[7] = inst_12256);
(statearr_12305[8] = inst_12255__$1);
return statearr_12305;
})();var statearr_12306_12741 = state_12291__$1;(statearr_12306_12741[2] = null);
(statearr_12306_12741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12292 === 9))
{var inst_12255 = (state_12291[8]);var inst_12269 = cljs.core.vec.call(null,inst_12255);var state_12291__$1 = state_12291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12291__$1,11,out,inst_12269);
} else
{if((state_val_12292 === 10))
{var inst_12275 = (state_12291[2]);var state_12291__$1 = state_12291;var statearr_12307_12742 = state_12291__$1;(statearr_12307_12742[2] = inst_12275);
(statearr_12307_12742[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12292 === 11))
{var inst_12271 = (state_12291[2]);var inst_12272 = (new Array(n));var inst_12255 = inst_12272;var inst_12256 = 0;var state_12291__$1 = (function (){var statearr_12308 = state_12291;(statearr_12308[12] = inst_12271);
(statearr_12308[7] = inst_12256);
(statearr_12308[8] = inst_12255);
return statearr_12308;
})();var statearr_12309_12743 = state_12291__$1;(statearr_12309_12743[2] = null);
(statearr_12309_12743[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12292 === 12))
{var inst_12255 = (state_12291[8]);var inst_12279 = cljs.core.vec.call(null,inst_12255);var state_12291__$1 = state_12291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12291__$1,15,out,inst_12279);
} else
{if((state_val_12292 === 13))
{var state_12291__$1 = state_12291;var statearr_12310_12744 = state_12291__$1;(statearr_12310_12744[2] = null);
(statearr_12310_12744[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12292 === 14))
{var inst_12284 = (state_12291[2]);var inst_12285 = cljs.core.async.close_BANG_.call(null,out);var state_12291__$1 = (function (){var statearr_12311 = state_12291;(statearr_12311[13] = inst_12284);
return statearr_12311;
})();var statearr_12312_12745 = state_12291__$1;(statearr_12312_12745[2] = inst_12285);
(statearr_12312_12745[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12292 === 15))
{var inst_12281 = (state_12291[2]);var state_12291__$1 = state_12291;var statearr_12313_12746 = state_12291__$1;(statearr_12313_12746[2] = inst_12281);
(statearr_12313_12746[1] = 14);
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
});})(c__7524__auto___12732,out))
;return ((function (switch__7454__auto__,c__7524__auto___12732,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12317[0] = state_machine__7455__auto__);
(statearr_12317[1] = 1);
return statearr_12317;
});
var state_machine__7455__auto____1 = (function (state_12291){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12291);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12318){if((e12318 instanceof Object))
{var ex__7458__auto__ = e12318;var statearr_12319_12747 = state_12291;(statearr_12319_12747[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12291);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12318;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12748 = state_12291;
state_12291 = G__12748;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12291){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12732,out))
})();var state__7526__auto__ = (function (){var statearr_12320 = f__7525__auto__.call(null);(statearr_12320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12732);
return statearr_12320;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12732,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7524__auto___12749 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7524__auto___12749,out){
return (function (){var f__7525__auto__ = (function (){var switch__7454__auto__ = ((function (c__7524__auto___12749,out){
return (function (state_12433){var state_val_12434 = (state_12433[1]);if((state_val_12434 === 1))
{var inst_12392 = [];var inst_12393 = inst_12392;var inst_12394 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12433__$1 = (function (){var statearr_12435 = state_12433;(statearr_12435[7] = inst_12394);
(statearr_12435[8] = inst_12393);
return statearr_12435;
})();var statearr_12436_12750 = state_12433__$1;(statearr_12436_12750[2] = null);
(statearr_12436_12750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 2))
{var state_12433__$1 = state_12433;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12433__$1,4,ch);
} else
{if((state_val_12434 === 3))
{var inst_12431 = (state_12433[2]);var state_12433__$1 = state_12433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12433__$1,inst_12431);
} else
{if((state_val_12434 === 4))
{var inst_12397 = (state_12433[9]);var inst_12397__$1 = (state_12433[2]);var inst_12398 = (inst_12397__$1 == null);var inst_12399 = cljs.core.not.call(null,inst_12398);var state_12433__$1 = (function (){var statearr_12437 = state_12433;(statearr_12437[9] = inst_12397__$1);
return statearr_12437;
})();if(inst_12399)
{var statearr_12438_12751 = state_12433__$1;(statearr_12438_12751[1] = 5);
} else
{var statearr_12439_12752 = state_12433__$1;(statearr_12439_12752[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 5))
{var inst_12397 = (state_12433[9]);var inst_12394 = (state_12433[7]);var inst_12401 = (state_12433[10]);var inst_12401__$1 = f.call(null,inst_12397);var inst_12402 = cljs.core._EQ_.call(null,inst_12401__$1,inst_12394);var inst_12403 = cljs.core.keyword_identical_QMARK_.call(null,inst_12394,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12404 = (inst_12402) || (inst_12403);var state_12433__$1 = (function (){var statearr_12440 = state_12433;(statearr_12440[10] = inst_12401__$1);
return statearr_12440;
})();if(cljs.core.truth_(inst_12404))
{var statearr_12441_12753 = state_12433__$1;(statearr_12441_12753[1] = 8);
} else
{var statearr_12442_12754 = state_12433__$1;(statearr_12442_12754[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 6))
{var inst_12393 = (state_12433[8]);var inst_12418 = inst_12393.length;var inst_12419 = (inst_12418 > 0);var state_12433__$1 = state_12433;if(cljs.core.truth_(inst_12419))
{var statearr_12444_12755 = state_12433__$1;(statearr_12444_12755[1] = 12);
} else
{var statearr_12445_12756 = state_12433__$1;(statearr_12445_12756[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 7))
{var inst_12429 = (state_12433[2]);var state_12433__$1 = state_12433;var statearr_12446_12757 = state_12433__$1;(statearr_12446_12757[2] = inst_12429);
(statearr_12446_12757[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 8))
{var inst_12397 = (state_12433[9]);var inst_12393 = (state_12433[8]);var inst_12401 = (state_12433[10]);var inst_12406 = inst_12393.push(inst_12397);var tmp12443 = inst_12393;var inst_12393__$1 = tmp12443;var inst_12394 = inst_12401;var state_12433__$1 = (function (){var statearr_12447 = state_12433;(statearr_12447[11] = inst_12406);
(statearr_12447[7] = inst_12394);
(statearr_12447[8] = inst_12393__$1);
return statearr_12447;
})();var statearr_12448_12758 = state_12433__$1;(statearr_12448_12758[2] = null);
(statearr_12448_12758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 9))
{var inst_12393 = (state_12433[8]);var inst_12409 = cljs.core.vec.call(null,inst_12393);var state_12433__$1 = state_12433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12433__$1,11,out,inst_12409);
} else
{if((state_val_12434 === 10))
{var inst_12416 = (state_12433[2]);var state_12433__$1 = state_12433;var statearr_12449_12759 = state_12433__$1;(statearr_12449_12759[2] = inst_12416);
(statearr_12449_12759[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 11))
{var inst_12397 = (state_12433[9]);var inst_12401 = (state_12433[10]);var inst_12411 = (state_12433[2]);var inst_12412 = [];var inst_12413 = inst_12412.push(inst_12397);var inst_12393 = inst_12412;var inst_12394 = inst_12401;var state_12433__$1 = (function (){var statearr_12450 = state_12433;(statearr_12450[7] = inst_12394);
(statearr_12450[12] = inst_12413);
(statearr_12450[8] = inst_12393);
(statearr_12450[13] = inst_12411);
return statearr_12450;
})();var statearr_12451_12760 = state_12433__$1;(statearr_12451_12760[2] = null);
(statearr_12451_12760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 12))
{var inst_12393 = (state_12433[8]);var inst_12421 = cljs.core.vec.call(null,inst_12393);var state_12433__$1 = state_12433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12433__$1,15,out,inst_12421);
} else
{if((state_val_12434 === 13))
{var state_12433__$1 = state_12433;var statearr_12452_12761 = state_12433__$1;(statearr_12452_12761[2] = null);
(statearr_12452_12761[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 14))
{var inst_12426 = (state_12433[2]);var inst_12427 = cljs.core.async.close_BANG_.call(null,out);var state_12433__$1 = (function (){var statearr_12453 = state_12433;(statearr_12453[14] = inst_12426);
return statearr_12453;
})();var statearr_12454_12762 = state_12433__$1;(statearr_12454_12762[2] = inst_12427);
(statearr_12454_12762[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 15))
{var inst_12423 = (state_12433[2]);var state_12433__$1 = state_12433;var statearr_12455_12763 = state_12433__$1;(statearr_12455_12763[2] = inst_12423);
(statearr_12455_12763[1] = 14);
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
});})(c__7524__auto___12749,out))
;return ((function (switch__7454__auto__,c__7524__auto___12749,out){
return (function() {
var state_machine__7455__auto__ = null;
var state_machine__7455__auto____0 = (function (){var statearr_12459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12459[0] = state_machine__7455__auto__);
(statearr_12459[1] = 1);
return statearr_12459;
});
var state_machine__7455__auto____1 = (function (state_12433){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_12433);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e12460){if((e12460 instanceof Object))
{var ex__7458__auto__ = e12460;var statearr_12461_12764 = state_12433;(statearr_12461_12764[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12433);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12765 = state_12433;
state_12433 = G__12765;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_12433){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_12433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto___12749,out))
})();var state__7526__auto__ = (function (){var statearr_12462 = f__7525__auto__.call(null);(statearr_12462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto___12749);
return statearr_12462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7526__auto__);
});})(c__7524__auto___12749,out))
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
lt.plugins.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__14023_SHARP_,p2__14022_SHARP_){return p2__14022_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__14025_SHARP_,p2__14024_SHARP_){return p2__14024_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (p1__14027_SHARP_,p2__14026_SHARP_){return p2__14026_SHARP_.pick.call(null);
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (p1__14029_SHARP_,p2__14028_SHARP_){return p2__14028_SHARP_.pick.call(null);
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__14031_SHARP_,p2__14030_SHARP_){return p2__14030_SHARP_.close.call(null);
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
{return cljs.core.clj__GT_js.call(null,(function (p1__14033_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__14033_SHARP_));return cljs.core.assoc.call(null,p1__14033_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"text","text",1017460895),lt.plugins.autocompleter.core.distinct_completions.call(null,cljs.core.filter.call(null,(function (p1__14032_SHARP_){return (new cljs.core.Keyword(null,"displayText","displayText",2728236161).cljs$core$IFn$_invoke$arity$1(p1__14032_SHARP_).length < 1000);
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
return (function (state_14116){var state_val_14117 = (state_14116[1]);if((state_val_14117 === 1))
{var inst_14086 = cljs.core.conj.call(null,channels,t);var inst_14087 = cljs.core.PersistentVector.EMPTY;var inst_14088 = inst_14086;var state_14116__$1 = (function (){var statearr_14118 = state_14116;(statearr_14118[7] = inst_14088);
(statearr_14118[8] = inst_14087);
return statearr_14118;
})();var statearr_14119_14139 = state_14116__$1;(statearr_14119_14139[2] = null);
(statearr_14119_14139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14117 === 2))
{var inst_14088 = (state_14116[7]);var inst_14090 = cljs.core.count.call(null,inst_14088);var inst_14091 = cljs.core._EQ_.call(null,1,inst_14090);var state_14116__$1 = state_14116;if(inst_14091)
{var statearr_14120_14140 = state_14116__$1;(statearr_14120_14140[1] = 4);
} else
{var statearr_14121_14141 = state_14116__$1;(statearr_14121_14141[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14117 === 3))
{var inst_14114 = (state_14116[2]);var state_14116__$1 = state_14116;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14116__$1,inst_14114);
} else
{if((state_val_14117 === 4))
{var inst_14087 = (state_14116[8]);var inst_14093 = lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"show-hint-results","show-hint-results",3654108914),inst_14087);var state_14116__$1 = state_14116;var statearr_14122_14142 = state_14116__$1;(statearr_14122_14142[2] = inst_14093);
(statearr_14122_14142[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14117 === 5))
{var inst_14088 = (state_14116[7]);var state_14116__$1 = state_14116;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14116__$1,7,inst_14088);
} else
{if((state_val_14117 === 6))
{var inst_14112 = (state_14116[2]);var state_14116__$1 = state_14116;var statearr_14123_14143 = state_14116__$1;(statearr_14123_14143[2] = inst_14112);
(statearr_14123_14143[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14117 === 7))
{var inst_14099 = (state_14116[9]);var inst_14097 = (state_14116[2]);var inst_14098 = cljs.core.nth.call(null,inst_14097,0,null);var inst_14099__$1 = cljs.core.nth.call(null,inst_14097,1,null);var inst_14100 = (inst_14099__$1 === t);var state_14116__$1 = (function (){var statearr_14124 = state_14116;(statearr_14124[9] = inst_14099__$1);
(statearr_14124[10] = inst_14098);
return statearr_14124;
})();if(cljs.core.truth_(inst_14100))
{var statearr_14125_14144 = state_14116__$1;(statearr_14125_14144[1] = 8);
} else
{var statearr_14126_14145 = state_14116__$1;(statearr_14126_14145[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14117 === 8))
{var inst_14087 = (state_14116[8]);var inst_14102 = lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"show-hint-results","show-hint-results",3654108914),inst_14087);var state_14116__$1 = state_14116;var statearr_14127_14146 = state_14116__$1;(statearr_14127_14146[2] = inst_14102);
(statearr_14127_14146[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14117 === 9))
{var inst_14088 = (state_14116[7]);var inst_14087 = (state_14116[8]);var inst_14099 = (state_14116[9]);var inst_14098 = (state_14116[10]);var inst_14104 = cljs.core.into.call(null,inst_14087,inst_14098);var inst_14105 = [inst_14099];var inst_14106 = cljs.core.PersistentHashSet.fromArray.call(null,inst_14105,true);var inst_14107 = cljs.core.remove.call(null,inst_14106,inst_14088);var inst_14087__$1 = inst_14104;var inst_14088__$1 = inst_14107;var state_14116__$1 = (function (){var statearr_14128 = state_14116;(statearr_14128[7] = inst_14088__$1);
(statearr_14128[8] = inst_14087__$1);
return statearr_14128;
})();var statearr_14129_14147 = state_14116__$1;(statearr_14129_14147[2] = null);
(statearr_14129_14147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14117 === 10))
{var inst_14110 = (state_14116[2]);var state_14116__$1 = state_14116;var statearr_14130_14148 = state_14116__$1;(statearr_14130_14148[2] = inst_14110);
(statearr_14130_14148[1] = 6);
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
var state_machine__7455__auto____0 = (function (){var statearr_14134 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14134[0] = state_machine__7455__auto__);
(statearr_14134[1] = 1);
return statearr_14134;
});
var state_machine__7455__auto____1 = (function (state_14116){while(true){
var ret_value__7456__auto__ = (function (){try{while(true){
var result__7457__auto__ = switch__7454__auto__.call(null,state_14116);if(cljs.core.keyword_identical_QMARK_.call(null,result__7457__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7457__auto__;
}
break;
}
}catch (e14135){if((e14135 instanceof Object))
{var ex__7458__auto__ = e14135;var statearr_14136_14149 = state_14116;(statearr_14136_14149[5] = ex__7458__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14116);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7456__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14150 = state_14116;
state_14116 = G__14150;
continue;
}
} else
{return ret_value__7456__auto__;
}
break;
}
});
state_machine__7455__auto__ = function(state_14116){
switch(arguments.length){
case 0:
return state_machine__7455__auto____0.call(this);
case 1:
return state_machine__7455__auto____1.call(this,state_14116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7455__auto____0;
state_machine__7455__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7455__auto____1;
return state_machine__7455__auto__;
})()
;})(switch__7454__auto__,c__7524__auto__,t))
})();var state__7526__auto__ = (function (){var statearr_14137 = f__7525__auto__.call(null);(statearr_14137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7524__auto__);
return statearr_14137;
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
return (function (p1__14138_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[p1__14138_SHARP_,p1__14138_SHARP_,((function (res,from,to,sym){
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
lt.plugins.autocompleter.async_dummy.background_worker = lt.objs.thread.thread_STAR_.call(null,(function tfun14166(){var orig__9921__auto__ = argsArray(arguments);var msg__9922__auto__ = orig__9921__auto__.shift();var args__9923__auto__ = orig__9921__auto__.map(cljs.reader.read_string);var raise = ((function (orig__9921__auto__,msg__9922__auto__,args__9923__auto__){
return (function (obj__9924__auto__,k__9925__auto__,v__9926__auto__){return _send(obj__9924__auto__,k__9925__auto__,cljs.core.pr_str.call(null,v__9926__auto__),"clj");
});})(orig__9921__auto__,msg__9922__auto__,args__9923__auto__))
;args__9923__auto__.unshift(msg__9922__auto__.obj);
return ((function (orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise){
return (function (obj_id,token){return setTimeout(((function (orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise){
return (function (){var all_hints = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["map","map-indexed","map-reduce","max","min"], null);var starts_with = ((function (all_hints,orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise){
return (function (p1__14163_SHARP_,p2__14164_SHARP_){return cljs.core._EQ_.call(null,0,p1__14163_SHARP_.indexOf(p2__14164_SHARP_));
});})(all_hints,orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise))
;var sym = new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token);return _send(obj_id,new cljs.core.Keyword(null,"async-hint-results","async-hint-results",1351910867),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sym","sym",1014018617),sym,new cljs.core.Keyword(null,"list","list",1017226256),cljs.core.filter.call(null,((function (all_hints,starts_with,sym,orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise){
return (function (p1__14165_SHARP_){return starts_with.call(null,p1__14165_SHARP_,sym);
});})(all_hints,starts_with,sym,orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise))
,all_hints),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null)], null)));
});})(orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise))
,(100 + cljs.core.rand_int.call(null,500)));
});})(orig__9921__auto__,msg__9922__auto__,args__9923__auto__,raise))
.apply(null,args__9923__auto__);
}));
lt.plugins.autocompleter.async_dummy.__GT_hints = (function __GT_hints(res_obj){var map__14169 = cljs.core.js__GT_clj.call(null,res_obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var map__14169__$1 = ((cljs.core.seq_QMARK_.call(null,map__14169))?cljs.core.apply.call(null,cljs.core.hash_map,map__14169):map__14169);var res = map__14169__$1;var to = cljs.core.get.call(null,map__14169__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__14169__$1,new cljs.core.Keyword(null,"from","from",1017056028));var sym = cljs.core.get.call(null,map__14169__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));return cljs.core.map.call(null,((function (map__14169,map__14169__$1,res,to,from,sym){
return (function (p1__14167_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[p1__14167_SHARP_,p1__14167_SHARP_,((function (map__14169,map__14169__$1,res,to,from,sym){
return (function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": sym}));
});})(map__14169,map__14169__$1,res,to,from,sym))
,from,to]);
});})(map__14169,map__14169__$1,res,to,from,sym))
,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(res));
});
lt.plugins.autocompleter.async_dummy.__BEH__async_hint_results = (function __BEH__async_hint_results(ed,res){var temp__4092__auto__ = new cljs.core.Keyword(null,"async-dummy-channel","async-dummy-channel",2471598783).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4092__auto__))
{var ch = temp__4092__auto__;return cljs.core.async.put_BANG_.call(null,ch,lt.plugins.autocompleter.async_dummy.__GT_hints.call(null,res));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.async-dummy","async-hint-results","lt.plugins.autocompleter.async-dummy/async-hint-results",3853075167),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.async_dummy.__BEH__async_hint_results,new cljs.core.Keyword(null,"desc","desc",1016984067),"Async dummy: Hint results",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-hint-results","async-hint-results",1351910867),null], null), null));
lt.plugins.autocompleter.async_dummy.__BEH__async_hints = (function __BEH__async_hints(ed,channels){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var token = cljs.core.assoc.call(null,lt.plugins.autocompleter.core.get_token.call(null,ed),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos));var ch = cljs.core.async.chan.call(null);if(lt.plugins.autocompleter.core.should_hint_QMARK_.call(null,ed))
{lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-channel","async-dummy-channel",2471598783)], null),ch);
lt.plugins.autocompleter.async_dummy.background_worker.call(null,ed,token);
return cljs.core.conj.call(null,channels,ch);
} else
{return channels;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.autocompleter.async-dummy","async-hints","lt.plugins.autocompleter.async-dummy/async-hints",1880154373),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.autocompleter.async_dummy.__BEH__async_hints,new cljs.core.Keyword(null,"desc","desc",1016984067),"Autocompleter: Async dummy hints",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),null], null), null));
}

//# sourceMappingURL=autocompleter_compiled.js.map