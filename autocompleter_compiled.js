if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj13086 = {};return obj13086;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__4885__auto__ = port;if(and__4885__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__4885__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__5524__auto__ = (((port == null))?null:port);return (function (){var or__4897__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj13088 = {};return obj13088;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn0_handler){if((function (){var and__4885__auto__ = port;if(and__4885__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__4885__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn0_handler);
} else
{var x__5524__auto__ = (((port == null))?null:port);return (function (){var or__4897__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn0_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj13090 = {};return obj13090;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__4885__auto__ = chan;if(and__4885__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__4885__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__5524__auto__ = (((chan == null))?null:chan);return (function (){var or__4897__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj13092 = {};return obj13092;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__4885__auto__ = h;if(and__4885__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__4885__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__5524__auto__ = (((h == null))?null:h);return (function (){var or__4897__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__4885__auto__ = h;if(and__4885__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__4885__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__5524__auto__ = (((h == null))?null:h);return (function (){var or__4897__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj13094 = {};return obj13094;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__4885__auto__ = b;if(and__4885__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__4885__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__5524__auto__ = (((b == null))?null:b);return (function (){var or__4897__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__4885__auto__ = b;if(and__4885__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__4885__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__5524__auto__ = (((b == null))?null:b);return (function (){var or__4897__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function add_BANG_(b,itm){if((function (){var and__4885__auto__ = b;if(and__4885__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2;
} else
{return and__4885__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG_$arity$2(b,itm);
} else
{var x__5524__auto__ = (((b == null))?null:b);return (function (){var or__4897__auto__ = (cljs.core.async.impl.protocols.add_BANG_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.impl.protocols.add_BANG_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj13096 = {};return obj13096;
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
var G__13051 = (cnt + 1);
cnt = G__13051;
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
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async.impl.buffers/RingBuffer");
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
var this$ = this;var n__5745__auto__ = self__.length;var x = 0;while(true){
if((x < n__5745__auto__))
{var v_13052 = this$.pop();if(keep_QMARK_.call(null,v_13052))
{this$.unshift(v_13052);
} else
{}
{
var G__13053 = (x + 1);
x = G__13053;
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
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
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
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
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
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
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
var count_13082 = 0;while(true){
var m_13083 = cljs.core.async.impl.dispatch.tasks.pop();if((m_13083 == null))
{} else
{m_13083.call(null);
if((count_13082 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__13084 = (count_13082 + 1);
count_13082 = G__13084;
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
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__4885__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__4885__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__4885__auto__;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t13057 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t13057 = (function (val,box,meta13058){
this.val = val;
this.box = box;
this.meta13058 = meta13058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t13057.cljs$lang$type = true;
cljs.core.async.impl.channels.t13057.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t13057";
cljs.core.async.impl.channels.t13057.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async.impl.channels/t13057");
});
cljs.core.async.impl.channels.t13057.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t13057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13059){var self__ = this;
var _13059__$1 = this;return self__.meta13058;
});
cljs.core.async.impl.channels.t13057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13059,meta13058__$1){var self__ = this;
var _13059__$1 = this;return (new cljs.core.async.impl.channels.t13057(self__.val,self__.box,meta13058__$1));
});
cljs.core.async.impl.channels.__GT_t13057 = (function __GT_t13057(val__$1,box__$1,meta13058){return (new cljs.core.async.impl.channels.t13057(val__$1,box__$1,meta13058));
});
}
return (new cljs.core.async.impl.channels.t13057(val,box,null));
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
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5467__auto__,writer__5468__auto__,opts__5469__auto__){return cljs.core._write.call(null,writer__5468__auto__,"cljs.core.async.impl.channels/PutBox");
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
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
while(true){
var taker_13070 = self__.takes.pop();if((taker_13070 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_13070))
{var take_cb_13071 = cljs.core.async.impl.protocols.commit.call(null,taker_13070);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_13071,taker_13070,this$__$1){
return (function (){return take_cb_13071.call(null,null);
});})(take_cb_13071,taker_13070,this$__$1))
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
var G__13117 = (level + 1);
level = G__13117;
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
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async.impl.timers/SkipListNode");
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_13118 = 0;while(true){
if((i_13118 < arr.length))
{(arr[i_13118] = null);
{
var G__13119 = (i_13118 + 1);
i_13118 = G__13119;
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
var G__13120 = x_SINGLEQUOTE_;
x__$1 = G__13120;
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
var G__13121 = x__$1;
var G__13122 = k;
var G__13123 = (level - 1);
var G__13124 = update;
x = G__13121;
k = G__13122;
level = G__13123;
update = G__13124;
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
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async.impl.timers/SkipList");
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
{var i_13125 = (self__.level + 1);while(true){
if((i_13125 <= (new_level + 1)))
{(update[i_13125] = self__.header);
{
var G__13126 = (i_13125 + 1);
i_13125 = G__13126;
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
{var i_13127 = 0;while(true){
if((i_13127 <= self__.level))
{var links_13128 = (update[i_13127]).forward;if(((links_13128[i_13127]) === x__$1))
{(links_13128[i_13127] = (x__$1.forward[i_13127]));
{
var G__13129 = (i_13127 + 1);
i_13127 = G__13129;
continue;
}
} else
{{
var G__13130 = (i_13127 + 1);
i_13127 = G__13130;
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
var G__13131 = x_SINGLEQUOTE_;
x__$1 = G__13131;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__13132 = nx;
var G__13133 = (level__$1 - 1);
x = G__13132;
level__$1 = G__13133;
continue;
}
} else
{{
var G__13134 = x;
var G__13135 = (level__$1 - 1);
x = G__13134;
level__$1 = G__13135;
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
var G__13136 = x_SINGLEQUOTE_;
x__$1 = G__13136;
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
var G__13137 = nx;
var G__13138 = (level__$1 - 1);
x = G__13137;
level__$1 = G__13138;
continue;
}
} else
{{
var G__13139 = x;
var G__13140 = (level__$1 - 1);
x = G__13139;
level__$1 = G__13140;
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
cljs.core.async.impl.timers.timeout = (function timeout(msecs){var timeout__$1 = ((new Date()).valueOf() + msecs);var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);var or__4897__auto__ = (cljs.core.truth_((function (){var and__4885__auto__ = me;if(cljs.core.truth_(and__4885__auto__))
{return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else
{return and__4885__auto__;
}
})())?me.val:null);if(cljs.core.truth_(or__4897__auto__))
{return or__4897__auto__;
} else
{var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);
cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__4897__auto__,timeout__$1,me){
return (function (){cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);
return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__4897__auto__,timeout__$1,me))
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t12981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t12981 = (function (f,fn_handler,meta12982){
this.f = f;
this.fn_handler = fn_handler;
this.meta12982 = meta12982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t12981.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t12981.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t12981";
cljs.core.async.impl.ioc_helpers.t12981.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async.impl.ioc-helpers/t12981");
});
cljs.core.async.impl.ioc_helpers.t12981.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t12981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t12981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t12981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12983){var self__ = this;
var _12983__$1 = this;return self__.meta12982;
});
cljs.core.async.impl.ioc_helpers.t12981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12983,meta12982__$1){var self__ = this;
var _12983__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t12981(self__.f,self__.fn_handler,meta12982__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t12981 = (function __GT_t12981(f__$1,fn_handler__$1,meta12982){return (new cljs.core.async.impl.ioc_helpers.t12981(f__$1,fn_handler__$1,meta12982));
});
}
return (new cljs.core.async.impl.ioc_helpers.t12981(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e12985){if((e12985 instanceof Object))
{var ex = e12985;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12985;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_12988_13031 = state;(statearr_12988_13031[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_12988_13031[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_12989_13032 = state;(statearr_12989_13032[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_12989_13032[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (){var statearr_12992_13033 = state;(statearr_12992_13033[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_12992_13033[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_12993_13034 = state;(statearr_12993_13034[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_12993_13034[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12994){var map__12999 = p__12994;var map__12999__$1 = ((cljs.core.seq_QMARK_.call(null,map__12999))?cljs.core.apply.call(null,cljs.core.hash_map,map__12999):map__12999);var opts = map__12999__$1;var statearr_13000_13035 = state;(statearr_13000_13035[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__12999,map__12999__$1,opts){
return (function (val){var statearr_13001_13036 = state;(statearr_13001_13036[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12999,map__12999__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_13002_13037 = state;(statearr_13002_13037[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12994 = null;if (arguments.length > 3) {
  p__12994 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12994);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13038){
var state = cljs.core.first(arglist__13038);
arglist__13038 = cljs.core.next(arglist__13038);
var cont_block = cljs.core.first(arglist__13038);
arglist__13038 = cljs.core.next(arglist__13038);
var ports = cljs.core.first(arglist__13038);
var p__12994 = cljs.core.rest(arglist__13038);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12994);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5478__auto__){var self__ = this;
var this__5478__auto____$1 = this;var h__5308__auto__ = self__.__hash;if(!((h__5308__auto__ == null)))
{return h__5308__auto__;
} else
{var h__5308__auto____$1 = cljs.core.hash_imap.call(null,this__5478__auto____$1);self__.__hash = h__5308__auto____$1;
return h__5308__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5483__auto__,k__5484__auto__){var self__ = this;
var this__5483__auto____$1 = this;return cljs.core._lookup.call(null,this__5483__auto____$1,k__5484__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5485__auto__,k13004,else__5486__auto__){var self__ = this;
var this__5485__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k13004,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13004,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13004,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13004,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k13004,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k13004,else__5486__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5490__auto__,k__5491__auto__,G__13003){var self__ = this;
var this__5490__auto____$1 = this;var pred__13006 = cljs.core.keyword_identical_QMARK_;var expr__13007 = k__5491__auto__;if(cljs.core.truth_(pred__13006.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__13007)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__13003,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13006.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__13007)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__13003,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13006.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__13007)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__13003,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13006.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__13007)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__13003,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__13006.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__13007)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__13003,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5491__auto__,G__13003),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5497__auto__,writer__5498__auto__,opts__5499__auto__){var self__ = this;
var this__5497__auto____$1 = this;var pr_pair__5500__auto__ = ((function (this__5497__auto____$1){
return (function (keyval__5501__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5498__auto__,cljs.core.pr_writer,""," ","",opts__5499__auto__,keyval__5501__auto__);
});})(this__5497__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5498__auto__,pr_pair__5500__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__5499__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5488__auto__,entry__5489__auto__){var self__ = this;
var this__5488__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5489__auto__))
{return cljs.core._assoc.call(null,this__5488__auto____$1,cljs.core._nth.call(null,entry__5489__auto__,0),cljs.core._nth.call(null,entry__5489__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5488__auto____$1,entry__5489__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5495__auto__){var self__ = this;
var this__5495__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5487__auto__){var self__ = this;
var this__5487__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5479__auto__,other__5480__auto__){var self__ = this;
var this__5479__auto____$1 = this;if(cljs.core.truth_((function (){var and__4885__auto__ = other__5480__auto__;if(cljs.core.truth_(and__4885__auto__))
{return ((this__5479__auto____$1.constructor === other__5480__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5479__auto____$1,other__5480__auto__));
} else
{return and__4885__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5482__auto__,G__13003){var self__ = this;
var this__5482__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__13003,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5477__auto__){var self__ = this;
var this__5477__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5481__auto__){var self__ = this;
var this__5481__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5492__auto__,k__5493__auto__){var self__ = this;
var this__5492__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__5493__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5492__auto____$1),self__.__meta),k__5493__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5493__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__5517__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__5517__auto__,writer__5518__auto__){return cljs.core._write.call(null,writer__5518__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__13005){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__13005),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__13005),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__13005),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__13005),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__13005),null,cljs.core.dissoc.call(null,G__13005,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_13010 = state;(statearr_13010[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_13010;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__4885__auto__ = exception;if(cljs.core.truth_(and__4885__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__4885__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__4885__auto__ = exception;if(cljs.core.truth_(and__4885__auto__))
{var and__4885__auto____$1 = catch_block;if(cljs.core.truth_(and__4885__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__4885__auto____$1;
}
} else
{return and__4885__auto__;
}
})()))
{var statearr_13016 = state;(statearr_13016[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_13016[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_13016[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_13016[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_13016;
} else
{if(cljs.core.truth_((function (){var and__4885__auto__ = exception;if(cljs.core.truth_(and__4885__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4885__auto__;
}
})()))
{var statearr_13017_13039 = state;(statearr_13017_13039[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__13040 = state;
state = G__13040;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__4885__auto__ = exception;if(cljs.core.truth_(and__4885__auto__))
{var and__4885__auto____$1 = cljs.core.not.call(null,catch_block);if(and__4885__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4885__auto____$1;
}
} else
{return and__4885__auto__;
}
})()))
{var statearr_13018 = state;(statearr_13018[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_13018[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_13018;
} else
{if(cljs.core.truth_((function (){var and__4885__auto__ = cljs.core.not.call(null,exception);if(and__4885__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4885__auto__;
}
})()))
{var statearr_13019 = state;(statearr_13019[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_13019[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_13019;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_13020 = state;(statearr_13020[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_13020[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_13020;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10417 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10417 = (function (f,fn_handler,meta10418){
this.f = f;
this.fn_handler = fn_handler;
this.meta10418 = meta10418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10417.cljs$lang$type = true;
cljs.core.async.t10417.cljs$lang$ctorStr = "cljs.core.async/t10417";
cljs.core.async.t10417.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async/t10417");
});
cljs.core.async.t10417.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10419){var self__ = this;
var _10419__$1 = this;return self__.meta10418;
});
cljs.core.async.t10417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10419,meta10418__$1){var self__ = this;
var _10419__$1 = this;return (new cljs.core.async.t10417(self__.f,self__.fn_handler,meta10418__$1));
});
cljs.core.async.__GT_t10417 = (function __GT_t10417(f__$1,fn_handler__$1,meta10418){return (new cljs.core.async.t10417(f__$1,fn_handler__$1,meta10418));
});
}
return (new cljs.core.async.t10417(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10421 = buff;if(G__10421)
{var bit__5547__auto__ = null;if(cljs.core.truth_((function (){var or__4897__auto__ = bit__5547__auto__;if(cljs.core.truth_(or__4897__auto__))
{return or__4897__auto__;
} else
{return G__10421.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10421.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10421);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10421);
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
{var val_12685 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12685);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12685,ret){
return (function (){return fn1.call(null,val_12685);
});})(val_12685,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__4885__auto__ = ret;if(cljs.core.truth_(and__4885__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__4885__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5745__auto___12686 = n;var x_12687 = 0;while(true){
if((x_12687 < n__5745__auto___12686))
{(a[x_12687] = 0);
{
var G__12688 = (x_12687 + 1);
x_12687 = G__12688;
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
var G__12689 = (i + 1);
i = G__12689;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10425 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10425 = (function (flag,alt_flag,meta10426){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10426 = meta10426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10425.cljs$lang$type = true;
cljs.core.async.t10425.cljs$lang$ctorStr = "cljs.core.async/t10425";
cljs.core.async.t10425.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async/t10425");
});})(flag))
;
cljs.core.async.t10425.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10427){var self__ = this;
var _10427__$1 = this;return self__.meta10426;
});})(flag))
;
cljs.core.async.t10425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10427,meta10426__$1){var self__ = this;
var _10427__$1 = this;return (new cljs.core.async.t10425(self__.flag,self__.alt_flag,meta10426__$1));
});})(flag))
;
cljs.core.async.__GT_t10425 = ((function (flag){
return (function __GT_t10425(flag__$1,alt_flag__$1,meta10426){return (new cljs.core.async.t10425(flag__$1,alt_flag__$1,meta10426));
});})(flag))
;
}
return (new cljs.core.async.t10425(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10431 = (function (cb,flag,alt_handler,meta10432){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10432 = meta10432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10431.cljs$lang$type = true;
cljs.core.async.t10431.cljs$lang$ctorStr = "cljs.core.async/t10431";
cljs.core.async.t10431.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async/t10431");
});
cljs.core.async.t10431.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10433){var self__ = this;
var _10433__$1 = this;return self__.meta10432;
});
cljs.core.async.t10431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10433,meta10432__$1){var self__ = this;
var _10433__$1 = this;return (new cljs.core.async.t10431(self__.cb,self__.flag,self__.alt_handler,meta10432__$1));
});
cljs.core.async.__GT_t10431 = (function __GT_t10431(cb__$1,flag__$1,alt_handler__$1,meta10432){return (new cljs.core.async.t10431(cb__$1,flag__$1,alt_handler__$1,meta10432));
});
}
return (new cljs.core.async.t10431(cb,flag,alt_handler,null));
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
return (function (p1__10434_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10434_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4897__auto__ = wport;if(cljs.core.truth_(or__4897__auto__))
{return or__4897__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12690 = (i + 1);
i = G__12690;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__4897__auto__ = ret;if(cljs.core.truth_(or__4897__auto__))
{return or__4897__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4885__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__4885__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__4885__auto__;
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
var alts_BANG___delegate = function (ports,p__10435){var map__10437 = p__10435;var map__10437__$1 = ((cljs.core.seq_QMARK_.call(null,map__10437))?cljs.core.apply.call(null,cljs.core.hash_map,map__10437):map__10437);var opts = map__10437__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10435 = null;if (arguments.length > 1) {
  p__10435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10435);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12691){
var ports = cljs.core.first(arglist__12691);
var p__10435 = cljs.core.rest(arglist__12691);
return alts_BANG___delegate(ports,p__10435);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10445 = (function (ch,f,map_LT_,meta10446){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10446 = meta10446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10445.cljs$lang$type = true;
cljs.core.async.t10445.cljs$lang$ctorStr = "cljs.core.async/t10445";
cljs.core.async.t10445.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async/t10445");
});
cljs.core.async.t10445.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10445.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10448 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10448 = (function (fn1,_,meta10446,ch,f,map_LT_,meta10449){
this.fn1 = fn1;
this._ = _;
this.meta10446 = meta10446;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10449 = meta10449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10448.cljs$lang$type = true;
cljs.core.async.t10448.cljs$lang$ctorStr = "cljs.core.async/t10448";
cljs.core.async.t10448.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async/t10448");
});})(___$1))
;
cljs.core.async.t10448.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10448.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10448.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10448.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10438_SHARP_){return f1.call(null,(((p1__10438_SHARP_ == null))?null:self__.f.call(null,p1__10438_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10450){var self__ = this;
var _10450__$1 = this;return self__.meta10449;
});})(___$1))
;
cljs.core.async.t10448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10450,meta10449__$1){var self__ = this;
var _10450__$1 = this;return (new cljs.core.async.t10448(self__.fn1,self__._,self__.meta10446,self__.ch,self__.f,self__.map_LT_,meta10449__$1));
});})(___$1))
;
cljs.core.async.__GT_t10448 = ((function (___$1){
return (function __GT_t10448(fn1__$1,___$2,meta10446__$1,ch__$2,f__$2,map_LT___$2,meta10449){return (new cljs.core.async.t10448(fn1__$1,___$2,meta10446__$1,ch__$2,f__$2,map_LT___$2,meta10449));
});})(___$1))
;
}
return (new cljs.core.async.t10448(fn1,___$1,self__.meta10446,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4885__auto__ = ret;if(cljs.core.truth_(and__4885__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__4885__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10445.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10447){var self__ = this;
var _10447__$1 = this;return self__.meta10446;
});
cljs.core.async.t10445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10447,meta10446__$1){var self__ = this;
var _10447__$1 = this;return (new cljs.core.async.t10445(self__.ch,self__.f,self__.map_LT_,meta10446__$1));
});
cljs.core.async.__GT_t10445 = (function __GT_t10445(ch__$1,f__$1,map_LT___$1,meta10446){return (new cljs.core.async.t10445(ch__$1,f__$1,map_LT___$1,meta10446));
});
}
return (new cljs.core.async.t10445(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10454 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10454 = (function (ch,f,map_GT_,meta10455){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10455 = meta10455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10454.cljs$lang$type = true;
cljs.core.async.t10454.cljs$lang$ctorStr = "cljs.core.async/t10454";
cljs.core.async.t10454.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async/t10454");
});
cljs.core.async.t10454.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10454.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10454.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10456){var self__ = this;
var _10456__$1 = this;return self__.meta10455;
});
cljs.core.async.t10454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10456,meta10455__$1){var self__ = this;
var _10456__$1 = this;return (new cljs.core.async.t10454(self__.ch,self__.f,self__.map_GT_,meta10455__$1));
});
cljs.core.async.__GT_t10454 = (function __GT_t10454(ch__$1,f__$1,map_GT___$1,meta10455){return (new cljs.core.async.t10454(ch__$1,f__$1,map_GT___$1,meta10455));
});
}
return (new cljs.core.async.t10454(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10460 = (function (ch,p,filter_GT_,meta10461){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10461 = meta10461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10460.cljs$lang$type = true;
cljs.core.async.t10460.cljs$lang$ctorStr = "cljs.core.async/t10460";
cljs.core.async.t10460.cljs$lang$ctorPrWriter = (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async/t10460");
});
cljs.core.async.t10460.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10460.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10460.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10462){var self__ = this;
var _10462__$1 = this;return self__.meta10461;
});
cljs.core.async.t10460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10462,meta10461__$1){var self__ = this;
var _10462__$1 = this;return (new cljs.core.async.t10460(self__.ch,self__.p,self__.filter_GT_,meta10461__$1));
});
cljs.core.async.__GT_t10460 = (function __GT_t10460(ch__$1,p__$1,filter_GT___$1,meta10461){return (new cljs.core.async.t10460(ch__$1,p__$1,filter_GT___$1,meta10461));
});
}
return (new cljs.core.async.t10460(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7537__auto___12692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12692,out){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12692,out){
return (function (state_10524){var state_val_10525 = (state_10524[1]);if((state_val_10525 === 1))
{var state_10524__$1 = state_10524;var statearr_10526_12693 = state_10524__$1;(statearr_10526_12693[2] = null);
(statearr_10526_12693[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10525 === 2))
{var state_10524__$1 = state_10524;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10524__$1,4,ch);
} else
{if((state_val_10525 === 3))
{var inst_10522 = (state_10524[2]);var state_10524__$1 = state_10524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10524__$1,inst_10522);
} else
{if((state_val_10525 === 4))
{var inst_10506 = (state_10524[7]);var inst_10506__$1 = (state_10524[2]);var inst_10507 = (inst_10506__$1 == null);var state_10524__$1 = (function (){var statearr_10527 = state_10524;(statearr_10527[7] = inst_10506__$1);
return statearr_10527;
})();if(cljs.core.truth_(inst_10507))
{var statearr_10528_12694 = state_10524__$1;(statearr_10528_12694[1] = 5);
} else
{var statearr_10529_12695 = state_10524__$1;(statearr_10529_12695[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10525 === 5))
{var inst_10509 = cljs.core.async.close_BANG_.call(null,out);var state_10524__$1 = state_10524;var statearr_10530_12696 = state_10524__$1;(statearr_10530_12696[2] = inst_10509);
(statearr_10530_12696[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10525 === 6))
{var inst_10506 = (state_10524[7]);var inst_10511 = p.call(null,inst_10506);var state_10524__$1 = state_10524;if(cljs.core.truth_(inst_10511))
{var statearr_10531_12697 = state_10524__$1;(statearr_10531_12697[1] = 8);
} else
{var statearr_10532_12698 = state_10524__$1;(statearr_10532_12698[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10525 === 7))
{var inst_10520 = (state_10524[2]);var state_10524__$1 = state_10524;var statearr_10533_12699 = state_10524__$1;(statearr_10533_12699[2] = inst_10520);
(statearr_10533_12699[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10525 === 8))
{var inst_10506 = (state_10524[7]);var state_10524__$1 = state_10524;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10524__$1,11,out,inst_10506);
} else
{if((state_val_10525 === 9))
{var state_10524__$1 = state_10524;var statearr_10534_12700 = state_10524__$1;(statearr_10534_12700[2] = null);
(statearr_10534_12700[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10525 === 10))
{var inst_10517 = (state_10524[2]);var state_10524__$1 = (function (){var statearr_10535 = state_10524;(statearr_10535[8] = inst_10517);
return statearr_10535;
})();var statearr_10536_12701 = state_10524__$1;(statearr_10536_12701[2] = null);
(statearr_10536_12701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10525 === 11))
{var inst_10514 = (state_10524[2]);var state_10524__$1 = state_10524;var statearr_10537_12702 = state_10524__$1;(statearr_10537_12702[2] = inst_10514);
(statearr_10537_12702[1] = 10);
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
});})(c__7537__auto___12692,out))
;return ((function (switch__7467__auto__,c__7537__auto___12692,out){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_10541 = [null,null,null,null,null,null,null,null,null];(statearr_10541[0] = state_machine__7468__auto__);
(statearr_10541[1] = 1);
return statearr_10541;
});
var state_machine__7468__auto____1 = (function (state_10524){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_10524);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e10542){if((e10542 instanceof Object))
{var ex__7471__auto__ = e10542;var statearr_10543_12703 = state_10524;(statearr_10543_12703[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10524);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12704 = state_10524;
state_10524 = G__12704;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_10524){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_10524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12692,out))
})();var state__7539__auto__ = (function (){var statearr_10544 = f__7538__auto__.call(null);(statearr_10544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12692);
return statearr_10544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12692,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7537__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto__){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto__){
return (function (state_10696){var state_val_10697 = (state_10696[1]);if((state_val_10697 === 1))
{var state_10696__$1 = state_10696;var statearr_10698_12705 = state_10696__$1;(statearr_10698_12705[2] = null);
(statearr_10698_12705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 2))
{var state_10696__$1 = state_10696;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10696__$1,4,in$);
} else
{if((state_val_10697 === 3))
{var inst_10694 = (state_10696[2]);var state_10696__$1 = state_10696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10696__$1,inst_10694);
} else
{if((state_val_10697 === 4))
{var inst_10642 = (state_10696[7]);var inst_10642__$1 = (state_10696[2]);var inst_10643 = (inst_10642__$1 == null);var state_10696__$1 = (function (){var statearr_10699 = state_10696;(statearr_10699[7] = inst_10642__$1);
return statearr_10699;
})();if(cljs.core.truth_(inst_10643))
{var statearr_10700_12706 = state_10696__$1;(statearr_10700_12706[1] = 5);
} else
{var statearr_10701_12707 = state_10696__$1;(statearr_10701_12707[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 5))
{var inst_10645 = cljs.core.async.close_BANG_.call(null,out);var state_10696__$1 = state_10696;var statearr_10702_12708 = state_10696__$1;(statearr_10702_12708[2] = inst_10645);
(statearr_10702_12708[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 6))
{var inst_10642 = (state_10696[7]);var inst_10647 = f.call(null,inst_10642);var inst_10652 = cljs.core.seq.call(null,inst_10647);var inst_10653 = inst_10652;var inst_10654 = null;var inst_10655 = 0;var inst_10656 = 0;var state_10696__$1 = (function (){var statearr_10703 = state_10696;(statearr_10703[8] = inst_10653);
(statearr_10703[9] = inst_10654);
(statearr_10703[10] = inst_10655);
(statearr_10703[11] = inst_10656);
return statearr_10703;
})();var statearr_10704_12709 = state_10696__$1;(statearr_10704_12709[2] = null);
(statearr_10704_12709[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 7))
{var inst_10692 = (state_10696[2]);var state_10696__$1 = state_10696;var statearr_10705_12710 = state_10696__$1;(statearr_10705_12710[2] = inst_10692);
(statearr_10705_12710[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 8))
{var inst_10655 = (state_10696[10]);var inst_10656 = (state_10696[11]);var inst_10658 = (inst_10656 < inst_10655);var inst_10659 = inst_10658;var state_10696__$1 = state_10696;if(cljs.core.truth_(inst_10659))
{var statearr_10706_12711 = state_10696__$1;(statearr_10706_12711[1] = 10);
} else
{var statearr_10707_12712 = state_10696__$1;(statearr_10707_12712[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 9))
{var inst_10689 = (state_10696[2]);var state_10696__$1 = (function (){var statearr_10708 = state_10696;(statearr_10708[12] = inst_10689);
return statearr_10708;
})();var statearr_10709_12713 = state_10696__$1;(statearr_10709_12713[2] = null);
(statearr_10709_12713[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 10))
{var inst_10654 = (state_10696[9]);var inst_10656 = (state_10696[11]);var inst_10661 = cljs.core._nth.call(null,inst_10654,inst_10656);var state_10696__$1 = state_10696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10696__$1,13,out,inst_10661);
} else
{if((state_val_10697 === 11))
{var inst_10667 = (state_10696[13]);var inst_10653 = (state_10696[8]);var inst_10667__$1 = cljs.core.seq.call(null,inst_10653);var state_10696__$1 = (function (){var statearr_10713 = state_10696;(statearr_10713[13] = inst_10667__$1);
return statearr_10713;
})();if(inst_10667__$1)
{var statearr_10714_12714 = state_10696__$1;(statearr_10714_12714[1] = 14);
} else
{var statearr_10715_12715 = state_10696__$1;(statearr_10715_12715[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 12))
{var inst_10687 = (state_10696[2]);var state_10696__$1 = state_10696;var statearr_10716_12716 = state_10696__$1;(statearr_10716_12716[2] = inst_10687);
(statearr_10716_12716[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 13))
{var inst_10653 = (state_10696[8]);var inst_10654 = (state_10696[9]);var inst_10655 = (state_10696[10]);var inst_10656 = (state_10696[11]);var inst_10663 = (state_10696[2]);var inst_10664 = (inst_10656 + 1);var tmp10710 = inst_10653;var tmp10711 = inst_10654;var tmp10712 = inst_10655;var inst_10653__$1 = tmp10710;var inst_10654__$1 = tmp10711;var inst_10655__$1 = tmp10712;var inst_10656__$1 = inst_10664;var state_10696__$1 = (function (){var statearr_10717 = state_10696;(statearr_10717[8] = inst_10653__$1);
(statearr_10717[14] = inst_10663);
(statearr_10717[9] = inst_10654__$1);
(statearr_10717[10] = inst_10655__$1);
(statearr_10717[11] = inst_10656__$1);
return statearr_10717;
})();var statearr_10718_12717 = state_10696__$1;(statearr_10718_12717[2] = null);
(statearr_10718_12717[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 14))
{var inst_10667 = (state_10696[13]);var inst_10669 = cljs.core.chunked_seq_QMARK_.call(null,inst_10667);var state_10696__$1 = state_10696;if(inst_10669)
{var statearr_10719_12718 = state_10696__$1;(statearr_10719_12718[1] = 17);
} else
{var statearr_10720_12719 = state_10696__$1;(statearr_10720_12719[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 15))
{var state_10696__$1 = state_10696;var statearr_10721_12720 = state_10696__$1;(statearr_10721_12720[2] = null);
(statearr_10721_12720[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 16))
{var inst_10685 = (state_10696[2]);var state_10696__$1 = state_10696;var statearr_10722_12721 = state_10696__$1;(statearr_10722_12721[2] = inst_10685);
(statearr_10722_12721[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 17))
{var inst_10667 = (state_10696[13]);var inst_10671 = cljs.core.chunk_first.call(null,inst_10667);var inst_10672 = cljs.core.chunk_rest.call(null,inst_10667);var inst_10673 = cljs.core.count.call(null,inst_10671);var inst_10653 = inst_10672;var inst_10654 = inst_10671;var inst_10655 = inst_10673;var inst_10656 = 0;var state_10696__$1 = (function (){var statearr_10723 = state_10696;(statearr_10723[8] = inst_10653);
(statearr_10723[9] = inst_10654);
(statearr_10723[10] = inst_10655);
(statearr_10723[11] = inst_10656);
return statearr_10723;
})();var statearr_10724_12722 = state_10696__$1;(statearr_10724_12722[2] = null);
(statearr_10724_12722[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 18))
{var inst_10667 = (state_10696[13]);var inst_10676 = cljs.core.first.call(null,inst_10667);var state_10696__$1 = state_10696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10696__$1,20,out,inst_10676);
} else
{if((state_val_10697 === 19))
{var inst_10682 = (state_10696[2]);var state_10696__$1 = state_10696;var statearr_10725_12723 = state_10696__$1;(statearr_10725_12723[2] = inst_10682);
(statearr_10725_12723[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10697 === 20))
{var inst_10667 = (state_10696[13]);var inst_10678 = (state_10696[2]);var inst_10679 = cljs.core.next.call(null,inst_10667);var inst_10653 = inst_10679;var inst_10654 = null;var inst_10655 = 0;var inst_10656 = 0;var state_10696__$1 = (function (){var statearr_10726 = state_10696;(statearr_10726[15] = inst_10678);
(statearr_10726[8] = inst_10653);
(statearr_10726[9] = inst_10654);
(statearr_10726[10] = inst_10655);
(statearr_10726[11] = inst_10656);
return statearr_10726;
})();var statearr_10727_12724 = state_10696__$1;(statearr_10727_12724[2] = null);
(statearr_10727_12724[1] = 8);
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
});})(c__7537__auto__))
;return ((function (switch__7467__auto__,c__7537__auto__){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_10731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10731[0] = state_machine__7468__auto__);
(statearr_10731[1] = 1);
return statearr_10731;
});
var state_machine__7468__auto____1 = (function (state_10696){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_10696);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e10732){if((e10732 instanceof Object))
{var ex__7471__auto__ = e10732;var statearr_10733_12725 = state_10696;(statearr_10733_12725[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10696);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12726 = state_10696;
state_10696 = G__12726;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_10696){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_10696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto__))
})();var state__7539__auto__ = (function (){var statearr_10734 = f__7538__auto__.call(null);(statearr_10734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto__);
return statearr_10734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto__))
);
return c__7537__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__7537__auto___12727 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12727){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12727){
return (function (state_10794){var state_val_10795 = (state_10794[1]);if((state_val_10795 === 1))
{var state_10794__$1 = state_10794;var statearr_10796_12728 = state_10794__$1;(statearr_10796_12728[2] = null);
(statearr_10796_12728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10795 === 2))
{var state_10794__$1 = state_10794;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10794__$1,4,from);
} else
{if((state_val_10795 === 3))
{var inst_10792 = (state_10794[2]);var state_10794__$1 = state_10794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10794__$1,inst_10792);
} else
{if((state_val_10795 === 4))
{var inst_10777 = (state_10794[7]);var inst_10777__$1 = (state_10794[2]);var inst_10778 = (inst_10777__$1 == null);var state_10794__$1 = (function (){var statearr_10797 = state_10794;(statearr_10797[7] = inst_10777__$1);
return statearr_10797;
})();if(cljs.core.truth_(inst_10778))
{var statearr_10798_12729 = state_10794__$1;(statearr_10798_12729[1] = 5);
} else
{var statearr_10799_12730 = state_10794__$1;(statearr_10799_12730[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10795 === 5))
{var state_10794__$1 = state_10794;if(cljs.core.truth_(close_QMARK_))
{var statearr_10800_12731 = state_10794__$1;(statearr_10800_12731[1] = 8);
} else
{var statearr_10801_12732 = state_10794__$1;(statearr_10801_12732[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10795 === 6))
{var inst_10777 = (state_10794[7]);var state_10794__$1 = state_10794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10794__$1,11,to,inst_10777);
} else
{if((state_val_10795 === 7))
{var inst_10790 = (state_10794[2]);var state_10794__$1 = state_10794;var statearr_10802_12733 = state_10794__$1;(statearr_10802_12733[2] = inst_10790);
(statearr_10802_12733[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10795 === 8))
{var inst_10781 = cljs.core.async.close_BANG_.call(null,to);var state_10794__$1 = state_10794;var statearr_10803_12734 = state_10794__$1;(statearr_10803_12734[2] = inst_10781);
(statearr_10803_12734[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10795 === 9))
{var state_10794__$1 = state_10794;var statearr_10804_12735 = state_10794__$1;(statearr_10804_12735[2] = null);
(statearr_10804_12735[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10795 === 10))
{var inst_10784 = (state_10794[2]);var state_10794__$1 = state_10794;var statearr_10805_12736 = state_10794__$1;(statearr_10805_12736[2] = inst_10784);
(statearr_10805_12736[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10795 === 11))
{var inst_10787 = (state_10794[2]);var state_10794__$1 = (function (){var statearr_10806 = state_10794;(statearr_10806[8] = inst_10787);
return statearr_10806;
})();var statearr_10807_12737 = state_10794__$1;(statearr_10807_12737[2] = null);
(statearr_10807_12737[1] = 2);
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
});})(c__7537__auto___12727))
;return ((function (switch__7467__auto__,c__7537__auto___12727){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_10811 = [null,null,null,null,null,null,null,null,null];(statearr_10811[0] = state_machine__7468__auto__);
(statearr_10811[1] = 1);
return statearr_10811;
});
var state_machine__7468__auto____1 = (function (state_10794){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_10794);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e10812){if((e10812 instanceof Object))
{var ex__7471__auto__ = e10812;var statearr_10813_12738 = state_10794;(statearr_10813_12738[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10794);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10812;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12739 = state_10794;
state_10794 = G__12739;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_10794){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_10794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12727))
})();var state__7539__auto__ = (function (){var statearr_10814 = f__7538__auto__.call(null);(statearr_10814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12727);
return statearr_10814;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12727))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7537__auto___12740 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12740,tc,fc){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12740,tc,fc){
return (function (state_10879){var state_val_10880 = (state_10879[1]);if((state_val_10880 === 1))
{var state_10879__$1 = state_10879;var statearr_10881_12741 = state_10879__$1;(statearr_10881_12741[2] = null);
(statearr_10881_12741[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 2))
{var state_10879__$1 = state_10879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10879__$1,4,ch);
} else
{if((state_val_10880 === 3))
{var inst_10877 = (state_10879[2]);var state_10879__$1 = state_10879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10879__$1,inst_10877);
} else
{if((state_val_10880 === 4))
{var inst_10860 = (state_10879[7]);var inst_10860__$1 = (state_10879[2]);var inst_10861 = (inst_10860__$1 == null);var state_10879__$1 = (function (){var statearr_10882 = state_10879;(statearr_10882[7] = inst_10860__$1);
return statearr_10882;
})();if(cljs.core.truth_(inst_10861))
{var statearr_10883_12742 = state_10879__$1;(statearr_10883_12742[1] = 5);
} else
{var statearr_10884_12743 = state_10879__$1;(statearr_10884_12743[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 5))
{var inst_10863 = cljs.core.async.close_BANG_.call(null,tc);var inst_10864 = cljs.core.async.close_BANG_.call(null,fc);var state_10879__$1 = (function (){var statearr_10885 = state_10879;(statearr_10885[8] = inst_10863);
return statearr_10885;
})();var statearr_10886_12744 = state_10879__$1;(statearr_10886_12744[2] = inst_10864);
(statearr_10886_12744[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 6))
{var inst_10860 = (state_10879[7]);var inst_10866 = p.call(null,inst_10860);var state_10879__$1 = state_10879;if(cljs.core.truth_(inst_10866))
{var statearr_10887_12745 = state_10879__$1;(statearr_10887_12745[1] = 9);
} else
{var statearr_10888_12746 = state_10879__$1;(statearr_10888_12746[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 7))
{var inst_10875 = (state_10879[2]);var state_10879__$1 = state_10879;var statearr_10889_12747 = state_10879__$1;(statearr_10889_12747[2] = inst_10875);
(statearr_10889_12747[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 8))
{var inst_10872 = (state_10879[2]);var state_10879__$1 = (function (){var statearr_10890 = state_10879;(statearr_10890[9] = inst_10872);
return statearr_10890;
})();var statearr_10891_12748 = state_10879__$1;(statearr_10891_12748[2] = null);
(statearr_10891_12748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 9))
{var state_10879__$1 = state_10879;var statearr_10892_12749 = state_10879__$1;(statearr_10892_12749[2] = tc);
(statearr_10892_12749[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 10))
{var state_10879__$1 = state_10879;var statearr_10893_12750 = state_10879__$1;(statearr_10893_12750[2] = fc);
(statearr_10893_12750[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10880 === 11))
{var inst_10860 = (state_10879[7]);var inst_10870 = (state_10879[2]);var state_10879__$1 = state_10879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10879__$1,8,inst_10870,inst_10860);
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
});})(c__7537__auto___12740,tc,fc))
;return ((function (switch__7467__auto__,c__7537__auto___12740,tc,fc){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_10897 = [null,null,null,null,null,null,null,null,null,null];(statearr_10897[0] = state_machine__7468__auto__);
(statearr_10897[1] = 1);
return statearr_10897;
});
var state_machine__7468__auto____1 = (function (state_10879){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_10879);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e10898){if((e10898 instanceof Object))
{var ex__7471__auto__ = e10898;var statearr_10899_12751 = state_10879;(statearr_10899_12751[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10879);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12752 = state_10879;
state_10879 = G__12752;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_10879){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_10879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12740,tc,fc))
})();var state__7539__auto__ = (function (){var statearr_10900 = f__7538__auto__.call(null);(statearr_10900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12740);
return statearr_10900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12740,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7537__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto__){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto__){
return (function (state_10947){var state_val_10948 = (state_10947[1]);if((state_val_10948 === 7))
{var inst_10943 = (state_10947[2]);var state_10947__$1 = state_10947;var statearr_10949_12753 = state_10947__$1;(statearr_10949_12753[2] = inst_10943);
(statearr_10949_12753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10948 === 6))
{var inst_10933 = (state_10947[7]);var inst_10936 = (state_10947[8]);var inst_10940 = f.call(null,inst_10933,inst_10936);var inst_10933__$1 = inst_10940;var state_10947__$1 = (function (){var statearr_10950 = state_10947;(statearr_10950[7] = inst_10933__$1);
return statearr_10950;
})();var statearr_10951_12754 = state_10947__$1;(statearr_10951_12754[2] = null);
(statearr_10951_12754[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10948 === 5))
{var inst_10933 = (state_10947[7]);var state_10947__$1 = state_10947;var statearr_10952_12755 = state_10947__$1;(statearr_10952_12755[2] = inst_10933);
(statearr_10952_12755[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10948 === 4))
{var inst_10936 = (state_10947[8]);var inst_10936__$1 = (state_10947[2]);var inst_10937 = (inst_10936__$1 == null);var state_10947__$1 = (function (){var statearr_10953 = state_10947;(statearr_10953[8] = inst_10936__$1);
return statearr_10953;
})();if(cljs.core.truth_(inst_10937))
{var statearr_10954_12756 = state_10947__$1;(statearr_10954_12756[1] = 5);
} else
{var statearr_10955_12757 = state_10947__$1;(statearr_10955_12757[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10948 === 3))
{var inst_10945 = (state_10947[2]);var state_10947__$1 = state_10947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10947__$1,inst_10945);
} else
{if((state_val_10948 === 2))
{var state_10947__$1 = state_10947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10947__$1,4,ch);
} else
{if((state_val_10948 === 1))
{var inst_10933 = init;var state_10947__$1 = (function (){var statearr_10956 = state_10947;(statearr_10956[7] = inst_10933);
return statearr_10956;
})();var statearr_10957_12758 = state_10947__$1;(statearr_10957_12758[2] = null);
(statearr_10957_12758[1] = 2);
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
});})(c__7537__auto__))
;return ((function (switch__7467__auto__,c__7537__auto__){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_10961 = [null,null,null,null,null,null,null,null,null];(statearr_10961[0] = state_machine__7468__auto__);
(statearr_10961[1] = 1);
return statearr_10961;
});
var state_machine__7468__auto____1 = (function (state_10947){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_10947);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e10962){if((e10962 instanceof Object))
{var ex__7471__auto__ = e10962;var statearr_10963_12759 = state_10947;(statearr_10963_12759[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12760 = state_10947;
state_10947 = G__12760;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_10947){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_10947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto__))
})();var state__7539__auto__ = (function (){var statearr_10964 = f__7538__auto__.call(null);(statearr_10964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto__);
return statearr_10964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto__))
);
return c__7537__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7537__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto__){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto__){
return (function (state_11026){var state_val_11027 = (state_11026[1]);if((state_val_11027 === 1))
{var inst_11006 = cljs.core.seq.call(null,coll);var inst_11007 = inst_11006;var state_11026__$1 = (function (){var statearr_11028 = state_11026;(statearr_11028[7] = inst_11007);
return statearr_11028;
})();var statearr_11029_12761 = state_11026__$1;(statearr_11029_12761[2] = null);
(statearr_11029_12761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11027 === 2))
{var inst_11007 = (state_11026[7]);var state_11026__$1 = state_11026;if(cljs.core.truth_(inst_11007))
{var statearr_11030_12762 = state_11026__$1;(statearr_11030_12762[1] = 4);
} else
{var statearr_11031_12763 = state_11026__$1;(statearr_11031_12763[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11027 === 3))
{var inst_11024 = (state_11026[2]);var state_11026__$1 = state_11026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11026__$1,inst_11024);
} else
{if((state_val_11027 === 4))
{var inst_11007 = (state_11026[7]);var inst_11010 = cljs.core.first.call(null,inst_11007);var state_11026__$1 = state_11026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11026__$1,7,ch,inst_11010);
} else
{if((state_val_11027 === 5))
{var state_11026__$1 = state_11026;if(cljs.core.truth_(close_QMARK_))
{var statearr_11032_12764 = state_11026__$1;(statearr_11032_12764[1] = 8);
} else
{var statearr_11033_12765 = state_11026__$1;(statearr_11033_12765[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11027 === 6))
{var inst_11022 = (state_11026[2]);var state_11026__$1 = state_11026;var statearr_11034_12766 = state_11026__$1;(statearr_11034_12766[2] = inst_11022);
(statearr_11034_12766[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11027 === 7))
{var inst_11007 = (state_11026[7]);var inst_11012 = (state_11026[2]);var inst_11013 = cljs.core.next.call(null,inst_11007);var inst_11007__$1 = inst_11013;var state_11026__$1 = (function (){var statearr_11035 = state_11026;(statearr_11035[7] = inst_11007__$1);
(statearr_11035[8] = inst_11012);
return statearr_11035;
})();var statearr_11036_12767 = state_11026__$1;(statearr_11036_12767[2] = null);
(statearr_11036_12767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11027 === 8))
{var inst_11017 = cljs.core.async.close_BANG_.call(null,ch);var state_11026__$1 = state_11026;var statearr_11037_12768 = state_11026__$1;(statearr_11037_12768[2] = inst_11017);
(statearr_11037_12768[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11027 === 9))
{var state_11026__$1 = state_11026;var statearr_11038_12769 = state_11026__$1;(statearr_11038_12769[2] = null);
(statearr_11038_12769[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11027 === 10))
{var inst_11020 = (state_11026[2]);var state_11026__$1 = state_11026;var statearr_11039_12770 = state_11026__$1;(statearr_11039_12770[2] = inst_11020);
(statearr_11039_12770[1] = 6);
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
});})(c__7537__auto__))
;return ((function (switch__7467__auto__,c__7537__auto__){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_11043 = [null,null,null,null,null,null,null,null,null];(statearr_11043[0] = state_machine__7468__auto__);
(statearr_11043[1] = 1);
return statearr_11043;
});
var state_machine__7468__auto____1 = (function (state_11026){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_11026);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e11044){if((e11044 instanceof Object))
{var ex__7471__auto__ = e11044;var statearr_11045_12771 = state_11026;(statearr_11045_12771[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11026);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12772 = state_11026;
state_11026 = G__12772;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_11026){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_11026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto__))
})();var state__7539__auto__ = (function (){var statearr_11046 = f__7538__auto__.call(null);(statearr_11046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto__);
return statearr_11046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto__))
);
return c__7537__auto__;
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
cljs.core.async.Mux = (function (){var obj11048 = {};return obj11048;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4885__auto__ = _;if(and__4885__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4885__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5524__auto__ = (((_ == null))?null:_);return (function (){var or__4897__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11050 = {};return obj11050;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4885__auto__ = m;if(and__4885__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4885__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5524__auto__ = (((m == null))?null:m);return (function (){var or__4897__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4885__auto__ = m;if(and__4885__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4885__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5524__auto__ = (((m == null))?null:m);return (function (){var or__4897__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4885__auto__ = m;if(and__4885__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4885__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5524__auto__ = (((m == null))?null:m);return (function (){var or__4897__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11274 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11274 = (function (cs,ch,mult,meta11275){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11275 = meta11275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11274.cljs$lang$type = true;
cljs.core.async.t11274.cljs$lang$ctorStr = "cljs.core.async/t11274";
cljs.core.async.t11274.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async/t11274");
});})(cs))
;
cljs.core.async.t11274.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11274.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11274.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11274.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11274.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11276){var self__ = this;
var _11276__$1 = this;return self__.meta11275;
});})(cs))
;
cljs.core.async.t11274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11276,meta11275__$1){var self__ = this;
var _11276__$1 = this;return (new cljs.core.async.t11274(self__.cs,self__.ch,self__.mult,meta11275__$1));
});})(cs))
;
cljs.core.async.__GT_t11274 = ((function (cs){
return (function __GT_t11274(cs__$1,ch__$1,mult__$1,meta11275){return (new cljs.core.async.t11274(cs__$1,ch__$1,mult__$1,meta11275));
});})(cs))
;
}
return (new cljs.core.async.t11274(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7537__auto___12773 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12773,cs,m,dchan,dctr,done){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12773,cs,m,dchan,dctr,done){
return (function (state_11411){var state_val_11412 = (state_11411[1]);if((state_val_11412 === 32))
{var inst_11279 = (state_11411[7]);var inst_11355 = (state_11411[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11411,31,Object,null,30);var inst_11362 = cljs.core.async.put_BANG_.call(null,inst_11355,inst_11279,done);var state_11411__$1 = state_11411;var statearr_11413_12774 = state_11411__$1;(statearr_11413_12774[2] = inst_11362);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11411__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 1))
{var state_11411__$1 = state_11411;var statearr_11414_12775 = state_11411__$1;(statearr_11414_12775[2] = null);
(statearr_11414_12775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 33))
{var inst_11368 = (state_11411[9]);var inst_11370 = cljs.core.chunked_seq_QMARK_.call(null,inst_11368);var state_11411__$1 = state_11411;if(inst_11370)
{var statearr_11415_12776 = state_11411__$1;(statearr_11415_12776[1] = 36);
} else
{var statearr_11416_12777 = state_11411__$1;(statearr_11416_12777[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 2))
{var state_11411__$1 = state_11411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11411__$1,4,ch);
} else
{if((state_val_11412 === 34))
{var state_11411__$1 = state_11411;var statearr_11417_12778 = state_11411__$1;(statearr_11417_12778[2] = null);
(statearr_11417_12778[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 3))
{var inst_11409 = (state_11411[2]);var state_11411__$1 = state_11411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11411__$1,inst_11409);
} else
{if((state_val_11412 === 35))
{var inst_11393 = (state_11411[2]);var state_11411__$1 = state_11411;var statearr_11418_12779 = state_11411__$1;(statearr_11418_12779[2] = inst_11393);
(statearr_11418_12779[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 4))
{var inst_11279 = (state_11411[7]);var inst_11279__$1 = (state_11411[2]);var inst_11280 = (inst_11279__$1 == null);var state_11411__$1 = (function (){var statearr_11419 = state_11411;(statearr_11419[7] = inst_11279__$1);
return statearr_11419;
})();if(cljs.core.truth_(inst_11280))
{var statearr_11420_12780 = state_11411__$1;(statearr_11420_12780[1] = 5);
} else
{var statearr_11421_12781 = state_11411__$1;(statearr_11421_12781[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 36))
{var inst_11368 = (state_11411[9]);var inst_11372 = cljs.core.chunk_first.call(null,inst_11368);var inst_11373 = cljs.core.chunk_rest.call(null,inst_11368);var inst_11374 = cljs.core.count.call(null,inst_11372);var inst_11347 = inst_11373;var inst_11348 = inst_11372;var inst_11349 = inst_11374;var inst_11350 = 0;var state_11411__$1 = (function (){var statearr_11422 = state_11411;(statearr_11422[10] = inst_11350);
(statearr_11422[11] = inst_11347);
(statearr_11422[12] = inst_11348);
(statearr_11422[13] = inst_11349);
return statearr_11422;
})();var statearr_11423_12782 = state_11411__$1;(statearr_11423_12782[2] = null);
(statearr_11423_12782[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 5))
{var inst_11286 = cljs.core.deref.call(null,cs);var inst_11287 = cljs.core.seq.call(null,inst_11286);var inst_11288 = inst_11287;var inst_11289 = null;var inst_11290 = 0;var inst_11291 = 0;var state_11411__$1 = (function (){var statearr_11424 = state_11411;(statearr_11424[14] = inst_11291);
(statearr_11424[15] = inst_11290);
(statearr_11424[16] = inst_11289);
(statearr_11424[17] = inst_11288);
return statearr_11424;
})();var statearr_11425_12783 = state_11411__$1;(statearr_11425_12783[2] = null);
(statearr_11425_12783[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 37))
{var inst_11368 = (state_11411[9]);var inst_11377 = cljs.core.first.call(null,inst_11368);var state_11411__$1 = (function (){var statearr_11426 = state_11411;(statearr_11426[18] = inst_11377);
return statearr_11426;
})();var statearr_11427_12784 = state_11411__$1;(statearr_11427_12784[2] = null);
(statearr_11427_12784[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 6))
{var inst_11339 = (state_11411[19]);var inst_11338 = cljs.core.deref.call(null,cs);var inst_11339__$1 = cljs.core.keys.call(null,inst_11338);var inst_11340 = cljs.core.count.call(null,inst_11339__$1);var inst_11341 = cljs.core.reset_BANG_.call(null,dctr,inst_11340);var inst_11346 = cljs.core.seq.call(null,inst_11339__$1);var inst_11347 = inst_11346;var inst_11348 = null;var inst_11349 = 0;var inst_11350 = 0;var state_11411__$1 = (function (){var statearr_11428 = state_11411;(statearr_11428[20] = inst_11341);
(statearr_11428[10] = inst_11350);
(statearr_11428[19] = inst_11339__$1);
(statearr_11428[11] = inst_11347);
(statearr_11428[12] = inst_11348);
(statearr_11428[13] = inst_11349);
return statearr_11428;
})();var statearr_11429_12785 = state_11411__$1;(statearr_11429_12785[2] = null);
(statearr_11429_12785[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 38))
{var inst_11390 = (state_11411[2]);var state_11411__$1 = state_11411;var statearr_11430_12786 = state_11411__$1;(statearr_11430_12786[2] = inst_11390);
(statearr_11430_12786[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 7))
{var inst_11407 = (state_11411[2]);var state_11411__$1 = state_11411;var statearr_11431_12787 = state_11411__$1;(statearr_11431_12787[2] = inst_11407);
(statearr_11431_12787[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 39))
{var inst_11368 = (state_11411[9]);var inst_11386 = (state_11411[2]);var inst_11387 = cljs.core.next.call(null,inst_11368);var inst_11347 = inst_11387;var inst_11348 = null;var inst_11349 = 0;var inst_11350 = 0;var state_11411__$1 = (function (){var statearr_11432 = state_11411;(statearr_11432[21] = inst_11386);
(statearr_11432[10] = inst_11350);
(statearr_11432[11] = inst_11347);
(statearr_11432[12] = inst_11348);
(statearr_11432[13] = inst_11349);
return statearr_11432;
})();var statearr_11433_12788 = state_11411__$1;(statearr_11433_12788[2] = null);
(statearr_11433_12788[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 8))
{var inst_11291 = (state_11411[14]);var inst_11290 = (state_11411[15]);var inst_11293 = (inst_11291 < inst_11290);var inst_11294 = inst_11293;var state_11411__$1 = state_11411;if(cljs.core.truth_(inst_11294))
{var statearr_11434_12789 = state_11411__$1;(statearr_11434_12789[1] = 10);
} else
{var statearr_11435_12790 = state_11411__$1;(statearr_11435_12790[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 40))
{var inst_11377 = (state_11411[18]);var inst_11378 = (state_11411[2]);var inst_11379 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11380 = cljs.core.async.untap_STAR_.call(null,m,inst_11377);var state_11411__$1 = (function (){var statearr_11436 = state_11411;(statearr_11436[22] = inst_11379);
(statearr_11436[23] = inst_11378);
return statearr_11436;
})();var statearr_11437_12791 = state_11411__$1;(statearr_11437_12791[2] = inst_11380);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11411__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 9))
{var inst_11336 = (state_11411[2]);var state_11411__$1 = state_11411;var statearr_11438_12792 = state_11411__$1;(statearr_11438_12792[2] = inst_11336);
(statearr_11438_12792[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 41))
{var inst_11377 = (state_11411[18]);var inst_11279 = (state_11411[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11411,40,Object,null,39);var inst_11384 = cljs.core.async.put_BANG_.call(null,inst_11377,inst_11279,done);var state_11411__$1 = state_11411;var statearr_11439_12793 = state_11411__$1;(statearr_11439_12793[2] = inst_11384);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11411__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 10))
{var inst_11291 = (state_11411[14]);var inst_11289 = (state_11411[16]);var inst_11297 = cljs.core._nth.call(null,inst_11289,inst_11291);var inst_11298 = cljs.core.nth.call(null,inst_11297,0,null);var inst_11299 = cljs.core.nth.call(null,inst_11297,1,null);var state_11411__$1 = (function (){var statearr_11440 = state_11411;(statearr_11440[24] = inst_11298);
return statearr_11440;
})();if(cljs.core.truth_(inst_11299))
{var statearr_11441_12794 = state_11411__$1;(statearr_11441_12794[1] = 13);
} else
{var statearr_11442_12795 = state_11411__$1;(statearr_11442_12795[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 42))
{var state_11411__$1 = state_11411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11411__$1,45,dchan);
} else
{if((state_val_11412 === 11))
{var inst_11308 = (state_11411[25]);var inst_11288 = (state_11411[17]);var inst_11308__$1 = cljs.core.seq.call(null,inst_11288);var state_11411__$1 = (function (){var statearr_11443 = state_11411;(statearr_11443[25] = inst_11308__$1);
return statearr_11443;
})();if(inst_11308__$1)
{var statearr_11444_12796 = state_11411__$1;(statearr_11444_12796[1] = 16);
} else
{var statearr_11445_12797 = state_11411__$1;(statearr_11445_12797[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 43))
{var state_11411__$1 = state_11411;var statearr_11446_12798 = state_11411__$1;(statearr_11446_12798[2] = null);
(statearr_11446_12798[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 12))
{var inst_11334 = (state_11411[2]);var state_11411__$1 = state_11411;var statearr_11447_12799 = state_11411__$1;(statearr_11447_12799[2] = inst_11334);
(statearr_11447_12799[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 44))
{var inst_11404 = (state_11411[2]);var state_11411__$1 = (function (){var statearr_11448 = state_11411;(statearr_11448[26] = inst_11404);
return statearr_11448;
})();var statearr_11449_12800 = state_11411__$1;(statearr_11449_12800[2] = null);
(statearr_11449_12800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 13))
{var inst_11298 = (state_11411[24]);var inst_11301 = cljs.core.async.close_BANG_.call(null,inst_11298);var state_11411__$1 = state_11411;var statearr_11450_12801 = state_11411__$1;(statearr_11450_12801[2] = inst_11301);
(statearr_11450_12801[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 45))
{var inst_11401 = (state_11411[2]);var state_11411__$1 = state_11411;var statearr_11454_12802 = state_11411__$1;(statearr_11454_12802[2] = inst_11401);
(statearr_11454_12802[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 14))
{var state_11411__$1 = state_11411;var statearr_11455_12803 = state_11411__$1;(statearr_11455_12803[2] = null);
(statearr_11455_12803[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 15))
{var inst_11291 = (state_11411[14]);var inst_11290 = (state_11411[15]);var inst_11289 = (state_11411[16]);var inst_11288 = (state_11411[17]);var inst_11304 = (state_11411[2]);var inst_11305 = (inst_11291 + 1);var tmp11451 = inst_11290;var tmp11452 = inst_11289;var tmp11453 = inst_11288;var inst_11288__$1 = tmp11453;var inst_11289__$1 = tmp11452;var inst_11290__$1 = tmp11451;var inst_11291__$1 = inst_11305;var state_11411__$1 = (function (){var statearr_11456 = state_11411;(statearr_11456[14] = inst_11291__$1);
(statearr_11456[15] = inst_11290__$1);
(statearr_11456[16] = inst_11289__$1);
(statearr_11456[17] = inst_11288__$1);
(statearr_11456[27] = inst_11304);
return statearr_11456;
})();var statearr_11457_12804 = state_11411__$1;(statearr_11457_12804[2] = null);
(statearr_11457_12804[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 16))
{var inst_11308 = (state_11411[25]);var inst_11310 = cljs.core.chunked_seq_QMARK_.call(null,inst_11308);var state_11411__$1 = state_11411;if(inst_11310)
{var statearr_11458_12805 = state_11411__$1;(statearr_11458_12805[1] = 19);
} else
{var statearr_11459_12806 = state_11411__$1;(statearr_11459_12806[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 17))
{var state_11411__$1 = state_11411;var statearr_11460_12807 = state_11411__$1;(statearr_11460_12807[2] = null);
(statearr_11460_12807[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 18))
{var inst_11332 = (state_11411[2]);var state_11411__$1 = state_11411;var statearr_11461_12808 = state_11411__$1;(statearr_11461_12808[2] = inst_11332);
(statearr_11461_12808[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 19))
{var inst_11308 = (state_11411[25]);var inst_11312 = cljs.core.chunk_first.call(null,inst_11308);var inst_11313 = cljs.core.chunk_rest.call(null,inst_11308);var inst_11314 = cljs.core.count.call(null,inst_11312);var inst_11288 = inst_11313;var inst_11289 = inst_11312;var inst_11290 = inst_11314;var inst_11291 = 0;var state_11411__$1 = (function (){var statearr_11462 = state_11411;(statearr_11462[14] = inst_11291);
(statearr_11462[15] = inst_11290);
(statearr_11462[16] = inst_11289);
(statearr_11462[17] = inst_11288);
return statearr_11462;
})();var statearr_11463_12809 = state_11411__$1;(statearr_11463_12809[2] = null);
(statearr_11463_12809[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 20))
{var inst_11308 = (state_11411[25]);var inst_11318 = cljs.core.first.call(null,inst_11308);var inst_11319 = cljs.core.nth.call(null,inst_11318,0,null);var inst_11320 = cljs.core.nth.call(null,inst_11318,1,null);var state_11411__$1 = (function (){var statearr_11464 = state_11411;(statearr_11464[28] = inst_11319);
return statearr_11464;
})();if(cljs.core.truth_(inst_11320))
{var statearr_11465_12810 = state_11411__$1;(statearr_11465_12810[1] = 22);
} else
{var statearr_11466_12811 = state_11411__$1;(statearr_11466_12811[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 21))
{var inst_11329 = (state_11411[2]);var state_11411__$1 = state_11411;var statearr_11467_12812 = state_11411__$1;(statearr_11467_12812[2] = inst_11329);
(statearr_11467_12812[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 22))
{var inst_11319 = (state_11411[28]);var inst_11322 = cljs.core.async.close_BANG_.call(null,inst_11319);var state_11411__$1 = state_11411;var statearr_11468_12813 = state_11411__$1;(statearr_11468_12813[2] = inst_11322);
(statearr_11468_12813[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 23))
{var state_11411__$1 = state_11411;var statearr_11469_12814 = state_11411__$1;(statearr_11469_12814[2] = null);
(statearr_11469_12814[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 24))
{var inst_11308 = (state_11411[25]);var inst_11325 = (state_11411[2]);var inst_11326 = cljs.core.next.call(null,inst_11308);var inst_11288 = inst_11326;var inst_11289 = null;var inst_11290 = 0;var inst_11291 = 0;var state_11411__$1 = (function (){var statearr_11470 = state_11411;(statearr_11470[14] = inst_11291);
(statearr_11470[15] = inst_11290);
(statearr_11470[29] = inst_11325);
(statearr_11470[16] = inst_11289);
(statearr_11470[17] = inst_11288);
return statearr_11470;
})();var statearr_11471_12815 = state_11411__$1;(statearr_11471_12815[2] = null);
(statearr_11471_12815[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 25))
{var inst_11350 = (state_11411[10]);var inst_11349 = (state_11411[13]);var inst_11352 = (inst_11350 < inst_11349);var inst_11353 = inst_11352;var state_11411__$1 = state_11411;if(cljs.core.truth_(inst_11353))
{var statearr_11472_12816 = state_11411__$1;(statearr_11472_12816[1] = 27);
} else
{var statearr_11473_12817 = state_11411__$1;(statearr_11473_12817[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 26))
{var inst_11339 = (state_11411[19]);var inst_11397 = (state_11411[2]);var inst_11398 = cljs.core.seq.call(null,inst_11339);var state_11411__$1 = (function (){var statearr_11474 = state_11411;(statearr_11474[30] = inst_11397);
return statearr_11474;
})();if(inst_11398)
{var statearr_11475_12818 = state_11411__$1;(statearr_11475_12818[1] = 42);
} else
{var statearr_11476_12819 = state_11411__$1;(statearr_11476_12819[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 27))
{var inst_11350 = (state_11411[10]);var inst_11348 = (state_11411[12]);var inst_11355 = cljs.core._nth.call(null,inst_11348,inst_11350);var state_11411__$1 = (function (){var statearr_11477 = state_11411;(statearr_11477[8] = inst_11355);
return statearr_11477;
})();var statearr_11478_12820 = state_11411__$1;(statearr_11478_12820[2] = null);
(statearr_11478_12820[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 28))
{var inst_11368 = (state_11411[9]);var inst_11347 = (state_11411[11]);var inst_11368__$1 = cljs.core.seq.call(null,inst_11347);var state_11411__$1 = (function (){var statearr_11482 = state_11411;(statearr_11482[9] = inst_11368__$1);
return statearr_11482;
})();if(inst_11368__$1)
{var statearr_11483_12821 = state_11411__$1;(statearr_11483_12821[1] = 33);
} else
{var statearr_11484_12822 = state_11411__$1;(statearr_11484_12822[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 29))
{var inst_11395 = (state_11411[2]);var state_11411__$1 = state_11411;var statearr_11485_12823 = state_11411__$1;(statearr_11485_12823[2] = inst_11395);
(statearr_11485_12823[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 30))
{var inst_11350 = (state_11411[10]);var inst_11347 = (state_11411[11]);var inst_11348 = (state_11411[12]);var inst_11349 = (state_11411[13]);var inst_11364 = (state_11411[2]);var inst_11365 = (inst_11350 + 1);var tmp11479 = inst_11347;var tmp11480 = inst_11348;var tmp11481 = inst_11349;var inst_11347__$1 = tmp11479;var inst_11348__$1 = tmp11480;var inst_11349__$1 = tmp11481;var inst_11350__$1 = inst_11365;var state_11411__$1 = (function (){var statearr_11486 = state_11411;(statearr_11486[10] = inst_11350__$1);
(statearr_11486[31] = inst_11364);
(statearr_11486[11] = inst_11347__$1);
(statearr_11486[12] = inst_11348__$1);
(statearr_11486[13] = inst_11349__$1);
return statearr_11486;
})();var statearr_11487_12824 = state_11411__$1;(statearr_11487_12824[2] = null);
(statearr_11487_12824[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11412 === 31))
{var inst_11355 = (state_11411[8]);var inst_11356 = (state_11411[2]);var inst_11357 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11358 = cljs.core.async.untap_STAR_.call(null,m,inst_11355);var state_11411__$1 = (function (){var statearr_11488 = state_11411;(statearr_11488[32] = inst_11357);
(statearr_11488[33] = inst_11356);
return statearr_11488;
})();var statearr_11489_12825 = state_11411__$1;(statearr_11489_12825[2] = inst_11358);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11411__$1);
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
});})(c__7537__auto___12773,cs,m,dchan,dctr,done))
;return ((function (switch__7467__auto__,c__7537__auto___12773,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_11493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11493[0] = state_machine__7468__auto__);
(statearr_11493[1] = 1);
return statearr_11493;
});
var state_machine__7468__auto____1 = (function (state_11411){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_11411);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e11494){if((e11494 instanceof Object))
{var ex__7471__auto__ = e11494;var statearr_11495_12826 = state_11411;(statearr_11495_12826[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11411);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12827 = state_11411;
state_11411 = G__12827;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_11411){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_11411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12773,cs,m,dchan,dctr,done))
})();var state__7539__auto__ = (function (){var statearr_11496 = f__7538__auto__.call(null);(statearr_11496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12773);
return statearr_11496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12773,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj11498 = {};return obj11498;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4885__auto__ = m;if(and__4885__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4885__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5524__auto__ = (((m == null))?null:m);return (function (){var or__4897__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4885__auto__ = m;if(and__4885__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4885__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5524__auto__ = (((m == null))?null:m);return (function (){var or__4897__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4885__auto__ = m;if(and__4885__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4885__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5524__auto__ = (((m == null))?null:m);return (function (){var or__4897__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4885__auto__ = m;if(and__4885__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4885__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5524__auto__ = (((m == null))?null:m);return (function (){var or__4897__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4885__auto__ = m;if(and__4885__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4885__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5524__auto__ = (((m == null))?null:m);return (function (){var or__4897__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t11608 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11608 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11609){
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
this.meta11609 = meta11609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11608.cljs$lang$type = true;
cljs.core.async.t11608.cljs$lang$ctorStr = "cljs.core.async/t11608";
cljs.core.async.t11608.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async/t11608");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11608.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11608.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11608.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11608.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11608.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11608.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11608.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11610){var self__ = this;
var _11610__$1 = this;return self__.meta11609;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11610,meta11609__$1){var self__ = this;
var _11610__$1 = this;return (new cljs.core.async.t11608(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11609__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11608 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11608(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11609){return (new cljs.core.async.t11608(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11609));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11608(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7537__auto___12828 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11675){var state_val_11676 = (state_11675[1]);if((state_val_11676 === 1))
{var inst_11614 = (state_11675[7]);var inst_11614__$1 = calc_state.call(null);var inst_11615 = cljs.core.seq_QMARK_.call(null,inst_11614__$1);var state_11675__$1 = (function (){var statearr_11677 = state_11675;(statearr_11677[7] = inst_11614__$1);
return statearr_11677;
})();if(inst_11615)
{var statearr_11678_12829 = state_11675__$1;(statearr_11678_12829[1] = 2);
} else
{var statearr_11679_12830 = state_11675__$1;(statearr_11679_12830[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 2))
{var inst_11614 = (state_11675[7]);var inst_11617 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11614);var state_11675__$1 = state_11675;var statearr_11680_12831 = state_11675__$1;(statearr_11680_12831[2] = inst_11617);
(statearr_11680_12831[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 3))
{var inst_11614 = (state_11675[7]);var state_11675__$1 = state_11675;var statearr_11681_12832 = state_11675__$1;(statearr_11681_12832[2] = inst_11614);
(statearr_11681_12832[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 4))
{var inst_11614 = (state_11675[7]);var inst_11620 = (state_11675[2]);var inst_11621 = cljs.core.get.call(null,inst_11620,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11622 = cljs.core.get.call(null,inst_11620,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11623 = cljs.core.get.call(null,inst_11620,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11624 = inst_11614;var state_11675__$1 = (function (){var statearr_11682 = state_11675;(statearr_11682[8] = inst_11621);
(statearr_11682[9] = inst_11622);
(statearr_11682[10] = inst_11623);
(statearr_11682[11] = inst_11624);
return statearr_11682;
})();var statearr_11683_12833 = state_11675__$1;(statearr_11683_12833[2] = null);
(statearr_11683_12833[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 5))
{var inst_11624 = (state_11675[11]);var inst_11627 = cljs.core.seq_QMARK_.call(null,inst_11624);var state_11675__$1 = state_11675;if(inst_11627)
{var statearr_11684_12834 = state_11675__$1;(statearr_11684_12834[1] = 7);
} else
{var statearr_11685_12835 = state_11675__$1;(statearr_11685_12835[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 6))
{var inst_11673 = (state_11675[2]);var state_11675__$1 = state_11675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11675__$1,inst_11673);
} else
{if((state_val_11676 === 7))
{var inst_11624 = (state_11675[11]);var inst_11629 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11624);var state_11675__$1 = state_11675;var statearr_11686_12836 = state_11675__$1;(statearr_11686_12836[2] = inst_11629);
(statearr_11686_12836[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 8))
{var inst_11624 = (state_11675[11]);var state_11675__$1 = state_11675;var statearr_11687_12837 = state_11675__$1;(statearr_11687_12837[2] = inst_11624);
(statearr_11687_12837[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 9))
{var inst_11632 = (state_11675[12]);var inst_11632__$1 = (state_11675[2]);var inst_11633 = cljs.core.get.call(null,inst_11632__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11634 = cljs.core.get.call(null,inst_11632__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11635 = cljs.core.get.call(null,inst_11632__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11675__$1 = (function (){var statearr_11688 = state_11675;(statearr_11688[12] = inst_11632__$1);
(statearr_11688[13] = inst_11634);
(statearr_11688[14] = inst_11635);
return statearr_11688;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11675__$1,10,inst_11633);
} else
{if((state_val_11676 === 10))
{var inst_11639 = (state_11675[15]);var inst_11640 = (state_11675[16]);var inst_11638 = (state_11675[2]);var inst_11639__$1 = cljs.core.nth.call(null,inst_11638,0,null);var inst_11640__$1 = cljs.core.nth.call(null,inst_11638,1,null);var inst_11641 = (inst_11639__$1 == null);var inst_11642 = cljs.core._EQ_.call(null,inst_11640__$1,change);var inst_11643 = (inst_11641) || (inst_11642);var state_11675__$1 = (function (){var statearr_11689 = state_11675;(statearr_11689[15] = inst_11639__$1);
(statearr_11689[16] = inst_11640__$1);
return statearr_11689;
})();if(cljs.core.truth_(inst_11643))
{var statearr_11690_12838 = state_11675__$1;(statearr_11690_12838[1] = 11);
} else
{var statearr_11691_12839 = state_11675__$1;(statearr_11691_12839[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 11))
{var inst_11639 = (state_11675[15]);var inst_11645 = (inst_11639 == null);var state_11675__$1 = state_11675;if(cljs.core.truth_(inst_11645))
{var statearr_11692_12840 = state_11675__$1;(statearr_11692_12840[1] = 14);
} else
{var statearr_11693_12841 = state_11675__$1;(statearr_11693_12841[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 12))
{var inst_11654 = (state_11675[17]);var inst_11640 = (state_11675[16]);var inst_11635 = (state_11675[14]);var inst_11654__$1 = inst_11635.call(null,inst_11640);var state_11675__$1 = (function (){var statearr_11694 = state_11675;(statearr_11694[17] = inst_11654__$1);
return statearr_11694;
})();if(cljs.core.truth_(inst_11654__$1))
{var statearr_11695_12842 = state_11675__$1;(statearr_11695_12842[1] = 17);
} else
{var statearr_11696_12843 = state_11675__$1;(statearr_11696_12843[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 13))
{var inst_11671 = (state_11675[2]);var state_11675__$1 = state_11675;var statearr_11697_12844 = state_11675__$1;(statearr_11697_12844[2] = inst_11671);
(statearr_11697_12844[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 14))
{var inst_11640 = (state_11675[16]);var inst_11647 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11640);var state_11675__$1 = state_11675;var statearr_11698_12845 = state_11675__$1;(statearr_11698_12845[2] = inst_11647);
(statearr_11698_12845[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 15))
{var state_11675__$1 = state_11675;var statearr_11699_12846 = state_11675__$1;(statearr_11699_12846[2] = null);
(statearr_11699_12846[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 16))
{var inst_11650 = (state_11675[2]);var inst_11651 = calc_state.call(null);var inst_11624 = inst_11651;var state_11675__$1 = (function (){var statearr_11700 = state_11675;(statearr_11700[18] = inst_11650);
(statearr_11700[11] = inst_11624);
return statearr_11700;
})();var statearr_11701_12847 = state_11675__$1;(statearr_11701_12847[2] = null);
(statearr_11701_12847[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 17))
{var inst_11654 = (state_11675[17]);var state_11675__$1 = state_11675;var statearr_11702_12848 = state_11675__$1;(statearr_11702_12848[2] = inst_11654);
(statearr_11702_12848[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 18))
{var inst_11634 = (state_11675[13]);var inst_11640 = (state_11675[16]);var inst_11635 = (state_11675[14]);var inst_11657 = cljs.core.empty_QMARK_.call(null,inst_11635);var inst_11658 = inst_11634.call(null,inst_11640);var inst_11659 = cljs.core.not.call(null,inst_11658);var inst_11660 = (inst_11657) && (inst_11659);var state_11675__$1 = state_11675;var statearr_11703_12849 = state_11675__$1;(statearr_11703_12849[2] = inst_11660);
(statearr_11703_12849[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 19))
{var inst_11662 = (state_11675[2]);var state_11675__$1 = state_11675;if(cljs.core.truth_(inst_11662))
{var statearr_11704_12850 = state_11675__$1;(statearr_11704_12850[1] = 20);
} else
{var statearr_11705_12851 = state_11675__$1;(statearr_11705_12851[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 20))
{var inst_11639 = (state_11675[15]);var state_11675__$1 = state_11675;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11675__$1,23,out,inst_11639);
} else
{if((state_val_11676 === 21))
{var state_11675__$1 = state_11675;var statearr_11706_12852 = state_11675__$1;(statearr_11706_12852[2] = null);
(statearr_11706_12852[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 22))
{var inst_11632 = (state_11675[12]);var inst_11668 = (state_11675[2]);var inst_11624 = inst_11632;var state_11675__$1 = (function (){var statearr_11707 = state_11675;(statearr_11707[11] = inst_11624);
(statearr_11707[19] = inst_11668);
return statearr_11707;
})();var statearr_11708_12853 = state_11675__$1;(statearr_11708_12853[2] = null);
(statearr_11708_12853[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11676 === 23))
{var inst_11665 = (state_11675[2]);var state_11675__$1 = state_11675;var statearr_11709_12854 = state_11675__$1;(statearr_11709_12854[2] = inst_11665);
(statearr_11709_12854[1] = 22);
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
});})(c__7537__auto___12828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7467__auto__,c__7537__auto___12828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_11713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11713[0] = state_machine__7468__auto__);
(statearr_11713[1] = 1);
return statearr_11713;
});
var state_machine__7468__auto____1 = (function (state_11675){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_11675);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e11714){if((e11714 instanceof Object))
{var ex__7471__auto__ = e11714;var statearr_11715_12855 = state_11675;(statearr_11715_12855[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11675);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12856 = state_11675;
state_11675 = G__12856;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_11675){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_11675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7539__auto__ = (function (){var statearr_11716 = f__7538__auto__.call(null);(statearr_11716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12828);
return statearr_11716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12828,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj11718 = {};return obj11718;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4885__auto__ = p;if(and__4885__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4885__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5524__auto__ = (((p == null))?null:p);return (function (){var or__4897__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4885__auto__ = p;if(and__4885__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5524__auto__ = (((p == null))?null:p);return (function (){var or__4897__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4885__auto__ = p;if(and__4885__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5524__auto__ = (((p == null))?null:p);return (function (){var or__4897__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4885__auto__ = p;if(and__4885__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5524__auto__ = (((p == null))?null:p);return (function (){var or__4897__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5524__auto__)]);if(or__4897__auto__)
{return or__4897__auto__;
} else
{var or__4897__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4897__auto____$1)
{return or__4897__auto____$1;
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
return (function (topic){var or__4897__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__4897__auto__))
{return or__4897__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4897__auto__,mults){
return (function (p1__11719_SHARP_){if(cljs.core.truth_(p1__11719_SHARP_.call(null,topic)))
{return p1__11719_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11719_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4897__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11844 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11844 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11845){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11845 = meta11845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11844.cljs$lang$type = true;
cljs.core.async.t11844.cljs$lang$ctorStr = "cljs.core.async/t11844";
cljs.core.async.t11844.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5464__auto__,writer__5465__auto__,opt__5466__auto__){return cljs.core._write.call(null,writer__5465__auto__,"cljs.core.async/t11844");
});})(mults,ensure_mult))
;
cljs.core.async.t11844.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11844.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11844.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11844.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11846){var self__ = this;
var _11846__$1 = this;return self__.meta11845;
});})(mults,ensure_mult))
;
cljs.core.async.t11844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11846,meta11845__$1){var self__ = this;
var _11846__$1 = this;return (new cljs.core.async.t11844(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11845__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11844 = ((function (mults,ensure_mult){
return (function __GT_t11844(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11845){return (new cljs.core.async.t11844(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11845));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11844(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7537__auto___12857 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12857,mults,ensure_mult,p){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12857,mults,ensure_mult,p){
return (function (state_11920){var state_val_11921 = (state_11920[1]);if((state_val_11921 === 1))
{var state_11920__$1 = state_11920;var statearr_11922_12858 = state_11920__$1;(statearr_11922_12858[2] = null);
(statearr_11922_12858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 2))
{var state_11920__$1 = state_11920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11920__$1,4,ch);
} else
{if((state_val_11921 === 3))
{var inst_11918 = (state_11920[2]);var state_11920__$1 = state_11920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11920__$1,inst_11918);
} else
{if((state_val_11921 === 4))
{var inst_11849 = (state_11920[7]);var inst_11849__$1 = (state_11920[2]);var inst_11850 = (inst_11849__$1 == null);var state_11920__$1 = (function (){var statearr_11923 = state_11920;(statearr_11923[7] = inst_11849__$1);
return statearr_11923;
})();if(cljs.core.truth_(inst_11850))
{var statearr_11924_12859 = state_11920__$1;(statearr_11924_12859[1] = 5);
} else
{var statearr_11925_12860 = state_11920__$1;(statearr_11925_12860[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 5))
{var inst_11856 = cljs.core.deref.call(null,mults);var inst_11857 = cljs.core.vals.call(null,inst_11856);var inst_11858 = cljs.core.seq.call(null,inst_11857);var inst_11859 = inst_11858;var inst_11860 = null;var inst_11861 = 0;var inst_11862 = 0;var state_11920__$1 = (function (){var statearr_11926 = state_11920;(statearr_11926[8] = inst_11862);
(statearr_11926[9] = inst_11861);
(statearr_11926[10] = inst_11860);
(statearr_11926[11] = inst_11859);
return statearr_11926;
})();var statearr_11927_12861 = state_11920__$1;(statearr_11927_12861[2] = null);
(statearr_11927_12861[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 6))
{var inst_11897 = (state_11920[12]);var inst_11899 = (state_11920[13]);var inst_11849 = (state_11920[7]);var inst_11897__$1 = topic_fn.call(null,inst_11849);var inst_11898 = cljs.core.deref.call(null,mults);var inst_11899__$1 = cljs.core.get.call(null,inst_11898,inst_11897__$1);var state_11920__$1 = (function (){var statearr_11928 = state_11920;(statearr_11928[12] = inst_11897__$1);
(statearr_11928[13] = inst_11899__$1);
return statearr_11928;
})();if(cljs.core.truth_(inst_11899__$1))
{var statearr_11929_12862 = state_11920__$1;(statearr_11929_12862[1] = 19);
} else
{var statearr_11930_12863 = state_11920__$1;(statearr_11930_12863[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 7))
{var inst_11916 = (state_11920[2]);var state_11920__$1 = state_11920;var statearr_11931_12864 = state_11920__$1;(statearr_11931_12864[2] = inst_11916);
(statearr_11931_12864[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 8))
{var inst_11862 = (state_11920[8]);var inst_11861 = (state_11920[9]);var inst_11864 = (inst_11862 < inst_11861);var inst_11865 = inst_11864;var state_11920__$1 = state_11920;if(cljs.core.truth_(inst_11865))
{var statearr_11935_12865 = state_11920__$1;(statearr_11935_12865[1] = 10);
} else
{var statearr_11936_12866 = state_11920__$1;(statearr_11936_12866[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 9))
{var inst_11895 = (state_11920[2]);var state_11920__$1 = state_11920;var statearr_11937_12867 = state_11920__$1;(statearr_11937_12867[2] = inst_11895);
(statearr_11937_12867[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 10))
{var inst_11862 = (state_11920[8]);var inst_11861 = (state_11920[9]);var inst_11860 = (state_11920[10]);var inst_11859 = (state_11920[11]);var inst_11867 = cljs.core._nth.call(null,inst_11860,inst_11862);var inst_11868 = cljs.core.async.muxch_STAR_.call(null,inst_11867);var inst_11869 = cljs.core.async.close_BANG_.call(null,inst_11868);var inst_11870 = (inst_11862 + 1);var tmp11932 = inst_11861;var tmp11933 = inst_11860;var tmp11934 = inst_11859;var inst_11859__$1 = tmp11934;var inst_11860__$1 = tmp11933;var inst_11861__$1 = tmp11932;var inst_11862__$1 = inst_11870;var state_11920__$1 = (function (){var statearr_11938 = state_11920;(statearr_11938[14] = inst_11869);
(statearr_11938[8] = inst_11862__$1);
(statearr_11938[9] = inst_11861__$1);
(statearr_11938[10] = inst_11860__$1);
(statearr_11938[11] = inst_11859__$1);
return statearr_11938;
})();var statearr_11939_12868 = state_11920__$1;(statearr_11939_12868[2] = null);
(statearr_11939_12868[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 11))
{var inst_11859 = (state_11920[11]);var inst_11873 = (state_11920[15]);var inst_11873__$1 = cljs.core.seq.call(null,inst_11859);var state_11920__$1 = (function (){var statearr_11940 = state_11920;(statearr_11940[15] = inst_11873__$1);
return statearr_11940;
})();if(inst_11873__$1)
{var statearr_11941_12869 = state_11920__$1;(statearr_11941_12869[1] = 13);
} else
{var statearr_11942_12870 = state_11920__$1;(statearr_11942_12870[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 12))
{var inst_11893 = (state_11920[2]);var state_11920__$1 = state_11920;var statearr_11943_12871 = state_11920__$1;(statearr_11943_12871[2] = inst_11893);
(statearr_11943_12871[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 13))
{var inst_11873 = (state_11920[15]);var inst_11875 = cljs.core.chunked_seq_QMARK_.call(null,inst_11873);var state_11920__$1 = state_11920;if(inst_11875)
{var statearr_11944_12872 = state_11920__$1;(statearr_11944_12872[1] = 16);
} else
{var statearr_11945_12873 = state_11920__$1;(statearr_11945_12873[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 14))
{var state_11920__$1 = state_11920;var statearr_11946_12874 = state_11920__$1;(statearr_11946_12874[2] = null);
(statearr_11946_12874[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 15))
{var inst_11891 = (state_11920[2]);var state_11920__$1 = state_11920;var statearr_11947_12875 = state_11920__$1;(statearr_11947_12875[2] = inst_11891);
(statearr_11947_12875[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 16))
{var inst_11873 = (state_11920[15]);var inst_11877 = cljs.core.chunk_first.call(null,inst_11873);var inst_11878 = cljs.core.chunk_rest.call(null,inst_11873);var inst_11879 = cljs.core.count.call(null,inst_11877);var inst_11859 = inst_11878;var inst_11860 = inst_11877;var inst_11861 = inst_11879;var inst_11862 = 0;var state_11920__$1 = (function (){var statearr_11948 = state_11920;(statearr_11948[8] = inst_11862);
(statearr_11948[9] = inst_11861);
(statearr_11948[10] = inst_11860);
(statearr_11948[11] = inst_11859);
return statearr_11948;
})();var statearr_11949_12876 = state_11920__$1;(statearr_11949_12876[2] = null);
(statearr_11949_12876[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 17))
{var inst_11873 = (state_11920[15]);var inst_11882 = cljs.core.first.call(null,inst_11873);var inst_11883 = cljs.core.async.muxch_STAR_.call(null,inst_11882);var inst_11884 = cljs.core.async.close_BANG_.call(null,inst_11883);var inst_11885 = cljs.core.next.call(null,inst_11873);var inst_11859 = inst_11885;var inst_11860 = null;var inst_11861 = 0;var inst_11862 = 0;var state_11920__$1 = (function (){var statearr_11950 = state_11920;(statearr_11950[8] = inst_11862);
(statearr_11950[9] = inst_11861);
(statearr_11950[10] = inst_11860);
(statearr_11950[16] = inst_11884);
(statearr_11950[11] = inst_11859);
return statearr_11950;
})();var statearr_11951_12877 = state_11920__$1;(statearr_11951_12877[2] = null);
(statearr_11951_12877[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 18))
{var inst_11888 = (state_11920[2]);var state_11920__$1 = state_11920;var statearr_11952_12878 = state_11920__$1;(statearr_11952_12878[2] = inst_11888);
(statearr_11952_12878[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 19))
{var state_11920__$1 = state_11920;var statearr_11953_12879 = state_11920__$1;(statearr_11953_12879[2] = null);
(statearr_11953_12879[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 20))
{var state_11920__$1 = state_11920;var statearr_11954_12880 = state_11920__$1;(statearr_11954_12880[2] = null);
(statearr_11954_12880[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 21))
{var inst_11913 = (state_11920[2]);var state_11920__$1 = (function (){var statearr_11955 = state_11920;(statearr_11955[17] = inst_11913);
return statearr_11955;
})();var statearr_11956_12881 = state_11920__$1;(statearr_11956_12881[2] = null);
(statearr_11956_12881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 22))
{var inst_11910 = (state_11920[2]);var state_11920__$1 = state_11920;var statearr_11957_12882 = state_11920__$1;(statearr_11957_12882[2] = inst_11910);
(statearr_11957_12882[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 23))
{var inst_11897 = (state_11920[12]);var inst_11901 = (state_11920[2]);var inst_11902 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11897);var state_11920__$1 = (function (){var statearr_11958 = state_11920;(statearr_11958[18] = inst_11901);
return statearr_11958;
})();var statearr_11959_12883 = state_11920__$1;(statearr_11959_12883[2] = inst_11902);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11920__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11921 === 24))
{var inst_11899 = (state_11920[13]);var inst_11849 = (state_11920[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11920,23,Object,null,22);var inst_11906 = cljs.core.async.muxch_STAR_.call(null,inst_11899);var state_11920__$1 = state_11920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11920__$1,25,inst_11906,inst_11849);
} else
{if((state_val_11921 === 25))
{var inst_11908 = (state_11920[2]);var state_11920__$1 = state_11920;var statearr_11960_12884 = state_11920__$1;(statearr_11960_12884[2] = inst_11908);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11920__$1);
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
});})(c__7537__auto___12857,mults,ensure_mult,p))
;return ((function (switch__7467__auto__,c__7537__auto___12857,mults,ensure_mult,p){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_11964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11964[0] = state_machine__7468__auto__);
(statearr_11964[1] = 1);
return statearr_11964;
});
var state_machine__7468__auto____1 = (function (state_11920){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_11920);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e11965){if((e11965 instanceof Object))
{var ex__7471__auto__ = e11965;var statearr_11966_12885 = state_11920;(statearr_11966_12885[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12886 = state_11920;
state_11920 = G__12886;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_11920){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_11920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12857,mults,ensure_mult,p))
})();var state__7539__auto__ = (function (){var statearr_11967 = f__7538__auto__.call(null);(statearr_11967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12857);
return statearr_11967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12857,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__7537__auto___12887 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12887,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12887,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12074){var state_val_12075 = (state_12074[1]);if((state_val_12075 === 1))
{var state_12074__$1 = state_12074;var statearr_12076_12888 = state_12074__$1;(statearr_12076_12888[2] = null);
(statearr_12076_12888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 2))
{var inst_12037 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12038 = 0;var state_12074__$1 = (function (){var statearr_12077 = state_12074;(statearr_12077[7] = inst_12038);
(statearr_12077[8] = inst_12037);
return statearr_12077;
})();var statearr_12078_12889 = state_12074__$1;(statearr_12078_12889[2] = null);
(statearr_12078_12889[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 3))
{var inst_12072 = (state_12074[2]);var state_12074__$1 = state_12074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12074__$1,inst_12072);
} else
{if((state_val_12075 === 4))
{var inst_12038 = (state_12074[7]);var inst_12040 = (inst_12038 < cnt);var state_12074__$1 = state_12074;if(cljs.core.truth_(inst_12040))
{var statearr_12079_12890 = state_12074__$1;(statearr_12079_12890[1] = 6);
} else
{var statearr_12080_12891 = state_12074__$1;(statearr_12080_12891[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 5))
{var inst_12058 = (state_12074[2]);var state_12074__$1 = (function (){var statearr_12081 = state_12074;(statearr_12081[9] = inst_12058);
return statearr_12081;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12074__$1,12,dchan);
} else
{if((state_val_12075 === 6))
{var state_12074__$1 = state_12074;var statearr_12082_12892 = state_12074__$1;(statearr_12082_12892[2] = null);
(statearr_12082_12892[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 7))
{var state_12074__$1 = state_12074;var statearr_12083_12893 = state_12074__$1;(statearr_12083_12893[2] = null);
(statearr_12083_12893[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 8))
{var inst_12056 = (state_12074[2]);var state_12074__$1 = state_12074;var statearr_12084_12894 = state_12074__$1;(statearr_12084_12894[2] = inst_12056);
(statearr_12084_12894[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 9))
{var inst_12038 = (state_12074[7]);var inst_12051 = (state_12074[2]);var inst_12052 = (inst_12038 + 1);var inst_12038__$1 = inst_12052;var state_12074__$1 = (function (){var statearr_12085 = state_12074;(statearr_12085[7] = inst_12038__$1);
(statearr_12085[10] = inst_12051);
return statearr_12085;
})();var statearr_12086_12895 = state_12074__$1;(statearr_12086_12895[2] = null);
(statearr_12086_12895[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 10))
{var inst_12042 = (state_12074[2]);var inst_12043 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12074__$1 = (function (){var statearr_12087 = state_12074;(statearr_12087[11] = inst_12042);
return statearr_12087;
})();var statearr_12088_12896 = state_12074__$1;(statearr_12088_12896[2] = inst_12043);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 11))
{var inst_12038 = (state_12074[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12074,10,Object,null,9);var inst_12047 = chs__$1.call(null,inst_12038);var inst_12048 = done.call(null,inst_12038);var inst_12049 = cljs.core.async.take_BANG_.call(null,inst_12047,inst_12048);var state_12074__$1 = state_12074;var statearr_12089_12897 = state_12074__$1;(statearr_12089_12897[2] = inst_12049);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12074__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 12))
{var inst_12060 = (state_12074[12]);var inst_12060__$1 = (state_12074[2]);var inst_12061 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12060__$1);var state_12074__$1 = (function (){var statearr_12090 = state_12074;(statearr_12090[12] = inst_12060__$1);
return statearr_12090;
})();if(cljs.core.truth_(inst_12061))
{var statearr_12091_12898 = state_12074__$1;(statearr_12091_12898[1] = 13);
} else
{var statearr_12092_12899 = state_12074__$1;(statearr_12092_12899[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 13))
{var inst_12063 = cljs.core.async.close_BANG_.call(null,out);var state_12074__$1 = state_12074;var statearr_12093_12900 = state_12074__$1;(statearr_12093_12900[2] = inst_12063);
(statearr_12093_12900[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 14))
{var inst_12060 = (state_12074[12]);var inst_12065 = cljs.core.apply.call(null,f,inst_12060);var state_12074__$1 = state_12074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12074__$1,16,out,inst_12065);
} else
{if((state_val_12075 === 15))
{var inst_12070 = (state_12074[2]);var state_12074__$1 = state_12074;var statearr_12094_12901 = state_12074__$1;(statearr_12094_12901[2] = inst_12070);
(statearr_12094_12901[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12075 === 16))
{var inst_12067 = (state_12074[2]);var state_12074__$1 = (function (){var statearr_12095 = state_12074;(statearr_12095[13] = inst_12067);
return statearr_12095;
})();var statearr_12096_12902 = state_12074__$1;(statearr_12096_12902[2] = null);
(statearr_12096_12902[1] = 2);
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
});})(c__7537__auto___12887,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7467__auto__,c__7537__auto___12887,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_12100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12100[0] = state_machine__7468__auto__);
(statearr_12100[1] = 1);
return statearr_12100;
});
var state_machine__7468__auto____1 = (function (state_12074){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_12074);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e12101){if((e12101 instanceof Object))
{var ex__7471__auto__ = e12101;var statearr_12102_12903 = state_12074;(statearr_12102_12903[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12074);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12904 = state_12074;
state_12074 = G__12904;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_12074){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_12074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12887,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7539__auto__ = (function (){var statearr_12103 = f__7538__auto__.call(null);(statearr_12103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12887);
return statearr_12103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12887,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7537__auto___12905 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12905,out){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12905,out){
return (function (state_12187){var state_val_12188 = (state_12187[1]);if((state_val_12188 === 1))
{var inst_12158 = cljs.core.vec.call(null,chs);var inst_12159 = inst_12158;var state_12187__$1 = (function (){var statearr_12189 = state_12187;(statearr_12189[7] = inst_12159);
return statearr_12189;
})();var statearr_12190_12906 = state_12187__$1;(statearr_12190_12906[2] = null);
(statearr_12190_12906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12188 === 2))
{var inst_12159 = (state_12187[7]);var inst_12161 = cljs.core.count.call(null,inst_12159);var inst_12162 = (inst_12161 > 0);var state_12187__$1 = state_12187;if(cljs.core.truth_(inst_12162))
{var statearr_12191_12907 = state_12187__$1;(statearr_12191_12907[1] = 4);
} else
{var statearr_12192_12908 = state_12187__$1;(statearr_12192_12908[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12188 === 3))
{var inst_12185 = (state_12187[2]);var state_12187__$1 = state_12187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12187__$1,inst_12185);
} else
{if((state_val_12188 === 4))
{var inst_12159 = (state_12187[7]);var state_12187__$1 = state_12187;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12187__$1,7,inst_12159);
} else
{if((state_val_12188 === 5))
{var inst_12181 = cljs.core.async.close_BANG_.call(null,out);var state_12187__$1 = state_12187;var statearr_12193_12909 = state_12187__$1;(statearr_12193_12909[2] = inst_12181);
(statearr_12193_12909[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12188 === 6))
{var inst_12183 = (state_12187[2]);var state_12187__$1 = state_12187;var statearr_12194_12910 = state_12187__$1;(statearr_12194_12910[2] = inst_12183);
(statearr_12194_12910[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12188 === 7))
{var inst_12166 = (state_12187[8]);var inst_12167 = (state_12187[9]);var inst_12166__$1 = (state_12187[2]);var inst_12167__$1 = cljs.core.nth.call(null,inst_12166__$1,0,null);var inst_12168 = cljs.core.nth.call(null,inst_12166__$1,1,null);var inst_12169 = (inst_12167__$1 == null);var state_12187__$1 = (function (){var statearr_12195 = state_12187;(statearr_12195[8] = inst_12166__$1);
(statearr_12195[10] = inst_12168);
(statearr_12195[9] = inst_12167__$1);
return statearr_12195;
})();if(cljs.core.truth_(inst_12169))
{var statearr_12196_12911 = state_12187__$1;(statearr_12196_12911[1] = 8);
} else
{var statearr_12197_12912 = state_12187__$1;(statearr_12197_12912[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12188 === 8))
{var inst_12159 = (state_12187[7]);var inst_12166 = (state_12187[8]);var inst_12168 = (state_12187[10]);var inst_12167 = (state_12187[9]);var inst_12171 = (function (){var c = inst_12168;var v = inst_12167;var vec__12164 = inst_12166;var cs = inst_12159;return ((function (c,v,vec__12164,cs,inst_12159,inst_12166,inst_12168,inst_12167,state_val_12188,c__7537__auto___12905,out){
return (function (p1__12104_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12104_SHARP_);
});
;})(c,v,vec__12164,cs,inst_12159,inst_12166,inst_12168,inst_12167,state_val_12188,c__7537__auto___12905,out))
})();var inst_12172 = cljs.core.filterv.call(null,inst_12171,inst_12159);var inst_12159__$1 = inst_12172;var state_12187__$1 = (function (){var statearr_12198 = state_12187;(statearr_12198[7] = inst_12159__$1);
return statearr_12198;
})();var statearr_12199_12913 = state_12187__$1;(statearr_12199_12913[2] = null);
(statearr_12199_12913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12188 === 9))
{var inst_12167 = (state_12187[9]);var state_12187__$1 = state_12187;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12187__$1,11,out,inst_12167);
} else
{if((state_val_12188 === 10))
{var inst_12179 = (state_12187[2]);var state_12187__$1 = state_12187;var statearr_12201_12914 = state_12187__$1;(statearr_12201_12914[2] = inst_12179);
(statearr_12201_12914[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12188 === 11))
{var inst_12159 = (state_12187[7]);var inst_12176 = (state_12187[2]);var tmp12200 = inst_12159;var inst_12159__$1 = tmp12200;var state_12187__$1 = (function (){var statearr_12202 = state_12187;(statearr_12202[7] = inst_12159__$1);
(statearr_12202[11] = inst_12176);
return statearr_12202;
})();var statearr_12203_12915 = state_12187__$1;(statearr_12203_12915[2] = null);
(statearr_12203_12915[1] = 2);
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
});})(c__7537__auto___12905,out))
;return ((function (switch__7467__auto__,c__7537__auto___12905,out){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_12207 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12207[0] = state_machine__7468__auto__);
(statearr_12207[1] = 1);
return statearr_12207;
});
var state_machine__7468__auto____1 = (function (state_12187){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_12187);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e12208){if((e12208 instanceof Object))
{var ex__7471__auto__ = e12208;var statearr_12209_12916 = state_12187;(statearr_12209_12916[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12187);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12917 = state_12187;
state_12187 = G__12917;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_12187){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_12187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12905,out))
})();var state__7539__auto__ = (function (){var statearr_12210 = f__7538__auto__.call(null);(statearr_12210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12905);
return statearr_12210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12905,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7537__auto___12918 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12918,out){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12918,out){
return (function (state_12280){var state_val_12281 = (state_12280[1]);if((state_val_12281 === 1))
{var inst_12257 = 0;var state_12280__$1 = (function (){var statearr_12282 = state_12280;(statearr_12282[7] = inst_12257);
return statearr_12282;
})();var statearr_12283_12919 = state_12280__$1;(statearr_12283_12919[2] = null);
(statearr_12283_12919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12281 === 2))
{var inst_12257 = (state_12280[7]);var inst_12259 = (inst_12257 < n);var state_12280__$1 = state_12280;if(cljs.core.truth_(inst_12259))
{var statearr_12284_12920 = state_12280__$1;(statearr_12284_12920[1] = 4);
} else
{var statearr_12285_12921 = state_12280__$1;(statearr_12285_12921[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12281 === 3))
{var inst_12277 = (state_12280[2]);var inst_12278 = cljs.core.async.close_BANG_.call(null,out);var state_12280__$1 = (function (){var statearr_12286 = state_12280;(statearr_12286[8] = inst_12277);
return statearr_12286;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12280__$1,inst_12278);
} else
{if((state_val_12281 === 4))
{var state_12280__$1 = state_12280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12280__$1,7,ch);
} else
{if((state_val_12281 === 5))
{var state_12280__$1 = state_12280;var statearr_12287_12922 = state_12280__$1;(statearr_12287_12922[2] = null);
(statearr_12287_12922[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12281 === 6))
{var inst_12275 = (state_12280[2]);var state_12280__$1 = state_12280;var statearr_12288_12923 = state_12280__$1;(statearr_12288_12923[2] = inst_12275);
(statearr_12288_12923[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12281 === 7))
{var inst_12262 = (state_12280[9]);var inst_12262__$1 = (state_12280[2]);var inst_12263 = (inst_12262__$1 == null);var inst_12264 = cljs.core.not.call(null,inst_12263);var state_12280__$1 = (function (){var statearr_12289 = state_12280;(statearr_12289[9] = inst_12262__$1);
return statearr_12289;
})();if(inst_12264)
{var statearr_12290_12924 = state_12280__$1;(statearr_12290_12924[1] = 8);
} else
{var statearr_12291_12925 = state_12280__$1;(statearr_12291_12925[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12281 === 8))
{var inst_12262 = (state_12280[9]);var state_12280__$1 = state_12280;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12280__$1,11,out,inst_12262);
} else
{if((state_val_12281 === 9))
{var state_12280__$1 = state_12280;var statearr_12292_12926 = state_12280__$1;(statearr_12292_12926[2] = null);
(statearr_12292_12926[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12281 === 10))
{var inst_12272 = (state_12280[2]);var state_12280__$1 = state_12280;var statearr_12293_12927 = state_12280__$1;(statearr_12293_12927[2] = inst_12272);
(statearr_12293_12927[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12281 === 11))
{var inst_12257 = (state_12280[7]);var inst_12267 = (state_12280[2]);var inst_12268 = (inst_12257 + 1);var inst_12257__$1 = inst_12268;var state_12280__$1 = (function (){var statearr_12294 = state_12280;(statearr_12294[10] = inst_12267);
(statearr_12294[7] = inst_12257__$1);
return statearr_12294;
})();var statearr_12295_12928 = state_12280__$1;(statearr_12295_12928[2] = null);
(statearr_12295_12928[1] = 2);
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
});})(c__7537__auto___12918,out))
;return ((function (switch__7467__auto__,c__7537__auto___12918,out){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_12299 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12299[0] = state_machine__7468__auto__);
(statearr_12299[1] = 1);
return statearr_12299;
});
var state_machine__7468__auto____1 = (function (state_12280){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_12280);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e12300){if((e12300 instanceof Object))
{var ex__7471__auto__ = e12300;var statearr_12301_12929 = state_12280;(statearr_12301_12929[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12280);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12930 = state_12280;
state_12280 = G__12930;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_12280){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_12280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12918,out))
})();var state__7539__auto__ = (function (){var statearr_12302 = f__7538__auto__.call(null);(statearr_12302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12918);
return statearr_12302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12918,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7537__auto___12931 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12931,out){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12931,out){
return (function (state_12374){var state_val_12375 = (state_12374[1]);if((state_val_12375 === 1))
{var inst_12351 = null;var state_12374__$1 = (function (){var statearr_12376 = state_12374;(statearr_12376[7] = inst_12351);
return statearr_12376;
})();var statearr_12377_12932 = state_12374__$1;(statearr_12377_12932[2] = null);
(statearr_12377_12932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 2))
{var state_12374__$1 = state_12374;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12374__$1,4,ch);
} else
{if((state_val_12375 === 3))
{var inst_12371 = (state_12374[2]);var inst_12372 = cljs.core.async.close_BANG_.call(null,out);var state_12374__$1 = (function (){var statearr_12378 = state_12374;(statearr_12378[8] = inst_12371);
return statearr_12378;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12374__$1,inst_12372);
} else
{if((state_val_12375 === 4))
{var inst_12354 = (state_12374[9]);var inst_12354__$1 = (state_12374[2]);var inst_12355 = (inst_12354__$1 == null);var inst_12356 = cljs.core.not.call(null,inst_12355);var state_12374__$1 = (function (){var statearr_12379 = state_12374;(statearr_12379[9] = inst_12354__$1);
return statearr_12379;
})();if(inst_12356)
{var statearr_12380_12933 = state_12374__$1;(statearr_12380_12933[1] = 5);
} else
{var statearr_12381_12934 = state_12374__$1;(statearr_12381_12934[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 5))
{var inst_12354 = (state_12374[9]);var inst_12351 = (state_12374[7]);var inst_12358 = cljs.core._EQ_.call(null,inst_12354,inst_12351);var state_12374__$1 = state_12374;if(inst_12358)
{var statearr_12382_12935 = state_12374__$1;(statearr_12382_12935[1] = 8);
} else
{var statearr_12383_12936 = state_12374__$1;(statearr_12383_12936[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 6))
{var state_12374__$1 = state_12374;var statearr_12385_12937 = state_12374__$1;(statearr_12385_12937[2] = null);
(statearr_12385_12937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 7))
{var inst_12369 = (state_12374[2]);var state_12374__$1 = state_12374;var statearr_12386_12938 = state_12374__$1;(statearr_12386_12938[2] = inst_12369);
(statearr_12386_12938[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 8))
{var inst_12351 = (state_12374[7]);var tmp12384 = inst_12351;var inst_12351__$1 = tmp12384;var state_12374__$1 = (function (){var statearr_12387 = state_12374;(statearr_12387[7] = inst_12351__$1);
return statearr_12387;
})();var statearr_12388_12939 = state_12374__$1;(statearr_12388_12939[2] = null);
(statearr_12388_12939[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 9))
{var inst_12354 = (state_12374[9]);var state_12374__$1 = state_12374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12374__$1,11,out,inst_12354);
} else
{if((state_val_12375 === 10))
{var inst_12366 = (state_12374[2]);var state_12374__$1 = state_12374;var statearr_12389_12940 = state_12374__$1;(statearr_12389_12940[2] = inst_12366);
(statearr_12389_12940[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12375 === 11))
{var inst_12354 = (state_12374[9]);var inst_12363 = (state_12374[2]);var inst_12351 = inst_12354;var state_12374__$1 = (function (){var statearr_12390 = state_12374;(statearr_12390[7] = inst_12351);
(statearr_12390[10] = inst_12363);
return statearr_12390;
})();var statearr_12391_12941 = state_12374__$1;(statearr_12391_12941[2] = null);
(statearr_12391_12941[1] = 2);
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
});})(c__7537__auto___12931,out))
;return ((function (switch__7467__auto__,c__7537__auto___12931,out){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_12395 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12395[0] = state_machine__7468__auto__);
(statearr_12395[1] = 1);
return statearr_12395;
});
var state_machine__7468__auto____1 = (function (state_12374){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_12374);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e12396){if((e12396 instanceof Object))
{var ex__7471__auto__ = e12396;var statearr_12397_12942 = state_12374;(statearr_12397_12942[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12374);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12943 = state_12374;
state_12374 = G__12943;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_12374){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_12374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12931,out))
})();var state__7539__auto__ = (function (){var statearr_12398 = f__7538__auto__.call(null);(statearr_12398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12931);
return statearr_12398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12931,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7537__auto___12944 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12944,out){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12944,out){
return (function (state_12503){var state_val_12504 = (state_12503[1]);if((state_val_12504 === 1))
{var inst_12466 = (new Array(n));var inst_12467 = inst_12466;var inst_12468 = 0;var state_12503__$1 = (function (){var statearr_12505 = state_12503;(statearr_12505[7] = inst_12468);
(statearr_12505[8] = inst_12467);
return statearr_12505;
})();var statearr_12506_12945 = state_12503__$1;(statearr_12506_12945[2] = null);
(statearr_12506_12945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 2))
{var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12503__$1,4,ch);
} else
{if((state_val_12504 === 3))
{var inst_12501 = (state_12503[2]);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12503__$1,inst_12501);
} else
{if((state_val_12504 === 4))
{var inst_12471 = (state_12503[9]);var inst_12471__$1 = (state_12503[2]);var inst_12472 = (inst_12471__$1 == null);var inst_12473 = cljs.core.not.call(null,inst_12472);var state_12503__$1 = (function (){var statearr_12507 = state_12503;(statearr_12507[9] = inst_12471__$1);
return statearr_12507;
})();if(inst_12473)
{var statearr_12508_12946 = state_12503__$1;(statearr_12508_12946[1] = 5);
} else
{var statearr_12509_12947 = state_12503__$1;(statearr_12509_12947[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 5))
{var inst_12468 = (state_12503[7]);var inst_12476 = (state_12503[10]);var inst_12471 = (state_12503[9]);var inst_12467 = (state_12503[8]);var inst_12475 = (inst_12467[inst_12468] = inst_12471);var inst_12476__$1 = (inst_12468 + 1);var inst_12477 = (inst_12476__$1 < n);var state_12503__$1 = (function (){var statearr_12510 = state_12503;(statearr_12510[10] = inst_12476__$1);
(statearr_12510[11] = inst_12475);
return statearr_12510;
})();if(cljs.core.truth_(inst_12477))
{var statearr_12511_12948 = state_12503__$1;(statearr_12511_12948[1] = 8);
} else
{var statearr_12512_12949 = state_12503__$1;(statearr_12512_12949[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 6))
{var inst_12468 = (state_12503[7]);var inst_12489 = (inst_12468 > 0);var state_12503__$1 = state_12503;if(cljs.core.truth_(inst_12489))
{var statearr_12514_12950 = state_12503__$1;(statearr_12514_12950[1] = 12);
} else
{var statearr_12515_12951 = state_12503__$1;(statearr_12515_12951[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 7))
{var inst_12499 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12516_12952 = state_12503__$1;(statearr_12516_12952[2] = inst_12499);
(statearr_12516_12952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 8))
{var inst_12476 = (state_12503[10]);var inst_12467 = (state_12503[8]);var tmp12513 = inst_12467;var inst_12467__$1 = tmp12513;var inst_12468 = inst_12476;var state_12503__$1 = (function (){var statearr_12517 = state_12503;(statearr_12517[7] = inst_12468);
(statearr_12517[8] = inst_12467__$1);
return statearr_12517;
})();var statearr_12518_12953 = state_12503__$1;(statearr_12518_12953[2] = null);
(statearr_12518_12953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 9))
{var inst_12467 = (state_12503[8]);var inst_12481 = cljs.core.vec.call(null,inst_12467);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12503__$1,11,out,inst_12481);
} else
{if((state_val_12504 === 10))
{var inst_12487 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12519_12954 = state_12503__$1;(statearr_12519_12954[2] = inst_12487);
(statearr_12519_12954[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 11))
{var inst_12483 = (state_12503[2]);var inst_12484 = (new Array(n));var inst_12467 = inst_12484;var inst_12468 = 0;var state_12503__$1 = (function (){var statearr_12520 = state_12503;(statearr_12520[7] = inst_12468);
(statearr_12520[8] = inst_12467);
(statearr_12520[12] = inst_12483);
return statearr_12520;
})();var statearr_12521_12955 = state_12503__$1;(statearr_12521_12955[2] = null);
(statearr_12521_12955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 12))
{var inst_12467 = (state_12503[8]);var inst_12491 = cljs.core.vec.call(null,inst_12467);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12503__$1,15,out,inst_12491);
} else
{if((state_val_12504 === 13))
{var state_12503__$1 = state_12503;var statearr_12522_12956 = state_12503__$1;(statearr_12522_12956[2] = null);
(statearr_12522_12956[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 14))
{var inst_12496 = (state_12503[2]);var inst_12497 = cljs.core.async.close_BANG_.call(null,out);var state_12503__$1 = (function (){var statearr_12523 = state_12503;(statearr_12523[13] = inst_12496);
return statearr_12523;
})();var statearr_12524_12957 = state_12503__$1;(statearr_12524_12957[2] = inst_12497);
(statearr_12524_12957[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 15))
{var inst_12493 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12525_12958 = state_12503__$1;(statearr_12525_12958[2] = inst_12493);
(statearr_12525_12958[1] = 14);
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
});})(c__7537__auto___12944,out))
;return ((function (switch__7467__auto__,c__7537__auto___12944,out){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_12529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12529[0] = state_machine__7468__auto__);
(statearr_12529[1] = 1);
return statearr_12529;
});
var state_machine__7468__auto____1 = (function (state_12503){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_12503);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e12530){if((e12530 instanceof Object))
{var ex__7471__auto__ = e12530;var statearr_12531_12959 = state_12503;(statearr_12531_12959[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12960 = state_12503;
state_12503 = G__12960;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_12503){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_12503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12944,out))
})();var state__7539__auto__ = (function (){var statearr_12532 = f__7538__auto__.call(null);(statearr_12532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12944);
return statearr_12532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12944,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7537__auto___12961 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto___12961,out){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto___12961,out){
return (function (state_12645){var state_val_12646 = (state_12645[1]);if((state_val_12646 === 1))
{var inst_12604 = [];var inst_12605 = inst_12604;var inst_12606 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12645__$1 = (function (){var statearr_12647 = state_12645;(statearr_12647[7] = inst_12605);
(statearr_12647[8] = inst_12606);
return statearr_12647;
})();var statearr_12648_12962 = state_12645__$1;(statearr_12648_12962[2] = null);
(statearr_12648_12962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 2))
{var state_12645__$1 = state_12645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12645__$1,4,ch);
} else
{if((state_val_12646 === 3))
{var inst_12643 = (state_12645[2]);var state_12645__$1 = state_12645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12645__$1,inst_12643);
} else
{if((state_val_12646 === 4))
{var inst_12609 = (state_12645[9]);var inst_12609__$1 = (state_12645[2]);var inst_12610 = (inst_12609__$1 == null);var inst_12611 = cljs.core.not.call(null,inst_12610);var state_12645__$1 = (function (){var statearr_12649 = state_12645;(statearr_12649[9] = inst_12609__$1);
return statearr_12649;
})();if(inst_12611)
{var statearr_12650_12963 = state_12645__$1;(statearr_12650_12963[1] = 5);
} else
{var statearr_12651_12964 = state_12645__$1;(statearr_12651_12964[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 5))
{var inst_12606 = (state_12645[8]);var inst_12613 = (state_12645[10]);var inst_12609 = (state_12645[9]);var inst_12613__$1 = f.call(null,inst_12609);var inst_12614 = cljs.core._EQ_.call(null,inst_12613__$1,inst_12606);var inst_12615 = cljs.core.keyword_identical_QMARK_.call(null,inst_12606,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12616 = (inst_12614) || (inst_12615);var state_12645__$1 = (function (){var statearr_12652 = state_12645;(statearr_12652[10] = inst_12613__$1);
return statearr_12652;
})();if(cljs.core.truth_(inst_12616))
{var statearr_12653_12965 = state_12645__$1;(statearr_12653_12965[1] = 8);
} else
{var statearr_12654_12966 = state_12645__$1;(statearr_12654_12966[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 6))
{var inst_12605 = (state_12645[7]);var inst_12630 = inst_12605.length;var inst_12631 = (inst_12630 > 0);var state_12645__$1 = state_12645;if(cljs.core.truth_(inst_12631))
{var statearr_12656_12967 = state_12645__$1;(statearr_12656_12967[1] = 12);
} else
{var statearr_12657_12968 = state_12645__$1;(statearr_12657_12968[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 7))
{var inst_12641 = (state_12645[2]);var state_12645__$1 = state_12645;var statearr_12658_12969 = state_12645__$1;(statearr_12658_12969[2] = inst_12641);
(statearr_12658_12969[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 8))
{var inst_12605 = (state_12645[7]);var inst_12613 = (state_12645[10]);var inst_12609 = (state_12645[9]);var inst_12618 = inst_12605.push(inst_12609);var tmp12655 = inst_12605;var inst_12605__$1 = tmp12655;var inst_12606 = inst_12613;var state_12645__$1 = (function (){var statearr_12659 = state_12645;(statearr_12659[7] = inst_12605__$1);
(statearr_12659[8] = inst_12606);
(statearr_12659[11] = inst_12618);
return statearr_12659;
})();var statearr_12660_12970 = state_12645__$1;(statearr_12660_12970[2] = null);
(statearr_12660_12970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 9))
{var inst_12605 = (state_12645[7]);var inst_12621 = cljs.core.vec.call(null,inst_12605);var state_12645__$1 = state_12645;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12645__$1,11,out,inst_12621);
} else
{if((state_val_12646 === 10))
{var inst_12628 = (state_12645[2]);var state_12645__$1 = state_12645;var statearr_12661_12971 = state_12645__$1;(statearr_12661_12971[2] = inst_12628);
(statearr_12661_12971[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 11))
{var inst_12613 = (state_12645[10]);var inst_12609 = (state_12645[9]);var inst_12623 = (state_12645[2]);var inst_12624 = [];var inst_12625 = inst_12624.push(inst_12609);var inst_12605 = inst_12624;var inst_12606 = inst_12613;var state_12645__$1 = (function (){var statearr_12662 = state_12645;(statearr_12662[12] = inst_12623);
(statearr_12662[13] = inst_12625);
(statearr_12662[7] = inst_12605);
(statearr_12662[8] = inst_12606);
return statearr_12662;
})();var statearr_12663_12972 = state_12645__$1;(statearr_12663_12972[2] = null);
(statearr_12663_12972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 12))
{var inst_12605 = (state_12645[7]);var inst_12633 = cljs.core.vec.call(null,inst_12605);var state_12645__$1 = state_12645;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12645__$1,15,out,inst_12633);
} else
{if((state_val_12646 === 13))
{var state_12645__$1 = state_12645;var statearr_12664_12973 = state_12645__$1;(statearr_12664_12973[2] = null);
(statearr_12664_12973[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 14))
{var inst_12638 = (state_12645[2]);var inst_12639 = cljs.core.async.close_BANG_.call(null,out);var state_12645__$1 = (function (){var statearr_12665 = state_12645;(statearr_12665[14] = inst_12638);
return statearr_12665;
})();var statearr_12666_12974 = state_12645__$1;(statearr_12666_12974[2] = inst_12639);
(statearr_12666_12974[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12646 === 15))
{var inst_12635 = (state_12645[2]);var state_12645__$1 = state_12645;var statearr_12667_12975 = state_12645__$1;(statearr_12667_12975[2] = inst_12635);
(statearr_12667_12975[1] = 14);
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
});})(c__7537__auto___12961,out))
;return ((function (switch__7467__auto__,c__7537__auto___12961,out){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_12671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12671[0] = state_machine__7468__auto__);
(statearr_12671[1] = 1);
return statearr_12671;
});
var state_machine__7468__auto____1 = (function (state_12645){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_12645);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e12672){if((e12672 instanceof Object))
{var ex__7471__auto__ = e12672;var statearr_12673_12976 = state_12645;(statearr_12673_12976[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12645);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12977 = state_12645;
state_12645 = G__12977;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_12645){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_12645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto___12961,out))
})();var state__7539__auto__ = (function (){var statearr_12674 = f__7538__auto__.call(null);(statearr_12674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto___12961);
return statearr_12674;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto___12961,out))
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
lt.plugins.autocompleter.core.default_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"completeSingle","completeSingle",2100037203),false,new cljs.core.Keyword(null,"supportsSelection","supportsSelection",3475218138),true,new cljs.core.Keyword(null,"closeOnUnfocus","closeOnUnfocus",2215570266),true,new cljs.core.Keyword(null,"customKeys","customKeys",3726901367),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Up","Up",1013906989),(function (p1__17058_SHARP_,p2__17057_SHARP_){return p2__17057_SHARP_.moveFocus.call(null,-1);
}),new cljs.core.Keyword(null,"Down","Down",1016040500),(function (p1__17060_SHARP_,p2__17059_SHARP_){return p2__17059_SHARP_.moveFocus.call(null,1);
}),new cljs.core.Keyword(null,"Enter","Enter",1081018922),(function (p1__17062_SHARP_,p2__17061_SHARP_){return p2__17061_SHARP_.pick.call(null);
}),new cljs.core.Keyword(null,"Tab","Tab",1013988071),(function (a,b){return b.pick.call(null);
}),new cljs.core.Keyword(null,"Esc","Esc",1013974215),(function (p1__17064_SHARP_,p2__17063_SHARP_){return p2__17063_SHARP_.close.call(null);
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
{return cljs.core.clj__GT_js.call(null,(function (p1__17066_SHARP_){var fst = cljs.core.first.call(null,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(p1__17066_SHARP_));return cljs.core.assoc.call(null,p1__17066_SHARP_,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(fst));
}).call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"list","list",1017226256)],[cljs.core.take.call(null,25,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"text","text",1017460895),lt.plugins.autocompleter.core.distinct_completions.call(null,cljs.core.filter.call(null,(function (p1__17065_SHARP_){return (new cljs.core.Keyword(null,"displayText","displayText",2728236161).cljs$core$IFn$_invoke$arity$1(p1__17065_SHARP_).length < 1000);
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
lt.plugins.autocompleter.core.listen_for_hint_results = (function listen_for_hint_results(ed,channels,hinter_ch){var t = cljs.core.async.timeout.call(null,500);var c__7537__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto__,t){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto__,t){
return (function (state_17152){var state_val_17153 = (state_17152[1]);if((state_val_17153 === 1))
{var inst_17121 = cljs.core.conj.call(null,channels,t);var inst_17122 = cljs.core.PersistentVector.EMPTY;var inst_17123 = inst_17121;var state_17152__$1 = (function (){var statearr_17154 = state_17152;(statearr_17154[7] = inst_17123);
(statearr_17154[8] = inst_17122);
return statearr_17154;
})();var statearr_17155_17204 = state_17152__$1;(statearr_17155_17204[2] = null);
(statearr_17155_17204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17153 === 2))
{var inst_17123 = (state_17152[7]);var inst_17125 = cljs.core.count.call(null,inst_17123);var inst_17126 = cljs.core._EQ_.call(null,1,inst_17125);var state_17152__$1 = state_17152;if(inst_17126)
{var statearr_17156_17205 = state_17152__$1;(statearr_17156_17205[1] = 4);
} else
{var statearr_17157_17206 = state_17152__$1;(statearr_17157_17206[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17153 === 3))
{var inst_17150 = (state_17152[2]);var state_17152__$1 = state_17152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17152__$1,inst_17150);
} else
{if((state_val_17153 === 4))
{var inst_17122 = (state_17152[8]);var inst_17128 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_17122);var state_17152__$1 = state_17152;var statearr_17158_17207 = state_17152__$1;(statearr_17158_17207[2] = inst_17128);
(statearr_17158_17207[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17153 === 5))
{var inst_17123 = (state_17152[7]);var state_17152__$1 = state_17152;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17152__$1,7,inst_17123);
} else
{if((state_val_17153 === 6))
{var inst_17148 = (state_17152[2]);var state_17152__$1 = state_17152;var statearr_17159_17208 = state_17152__$1;(statearr_17159_17208[2] = inst_17148);
(statearr_17159_17208[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17153 === 7))
{var inst_17134 = (state_17152[9]);var inst_17132 = (state_17152[2]);var inst_17133 = cljs.core.nth.call(null,inst_17132,0,null);var inst_17134__$1 = cljs.core.nth.call(null,inst_17132,1,null);var inst_17135 = (inst_17134__$1 === t);var state_17152__$1 = (function (){var statearr_17160 = state_17152;(statearr_17160[9] = inst_17134__$1);
(statearr_17160[10] = inst_17133);
return statearr_17160;
})();if(cljs.core.truth_(inst_17135))
{var statearr_17161_17209 = state_17152__$1;(statearr_17161_17209[1] = 8);
} else
{var statearr_17162_17210 = state_17152__$1;(statearr_17162_17210[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17153 === 8))
{var inst_17122 = (state_17152[8]);var inst_17137 = cljs.core.println.call(null,"WARNING: Timeout waiting for hinter provider channel results");var inst_17138 = cljs.core.async.put_BANG_.call(null,hinter_ch,inst_17122);var state_17152__$1 = (function (){var statearr_17163 = state_17152;(statearr_17163[11] = inst_17137);
return statearr_17163;
})();var statearr_17164_17211 = state_17152__$1;(statearr_17164_17211[2] = inst_17138);
(statearr_17164_17211[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17153 === 9))
{var inst_17123 = (state_17152[7]);var inst_17122 = (state_17152[8]);var inst_17134 = (state_17152[9]);var inst_17133 = (state_17152[10]);var inst_17140 = cljs.core.into.call(null,inst_17122,inst_17133);var inst_17141 = [inst_17134];var inst_17142 = cljs.core.PersistentHashSet.fromArray.call(null,inst_17141,true);var inst_17143 = cljs.core.remove.call(null,inst_17142,inst_17123);var inst_17122__$1 = inst_17140;var inst_17123__$1 = inst_17143;var state_17152__$1 = (function (){var statearr_17165 = state_17152;(statearr_17165[7] = inst_17123__$1);
(statearr_17165[8] = inst_17122__$1);
return statearr_17165;
})();var statearr_17166_17212 = state_17152__$1;(statearr_17166_17212[2] = null);
(statearr_17166_17212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17153 === 10))
{var inst_17146 = (state_17152[2]);var state_17152__$1 = state_17152;var statearr_17167_17213 = state_17152__$1;(statearr_17167_17213[2] = inst_17146);
(statearr_17167_17213[1] = 6);
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
});})(c__7537__auto__,t))
;return ((function (switch__7467__auto__,c__7537__auto__,t){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_17171 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17171[0] = state_machine__7468__auto__);
(statearr_17171[1] = 1);
return statearr_17171;
});
var state_machine__7468__auto____1 = (function (state_17152){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_17152);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e17172){if((e17172 instanceof Object))
{var ex__7471__auto__ = e17172;var statearr_17173_17214 = state_17152;(statearr_17173_17214[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17152);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17172;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17215 = state_17152;
state_17152 = G__17215;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_17152){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_17152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto__,t))
})();var state__7539__auto__ = (function (){var statearr_17174 = f__7538__auto__.call(null);(statearr_17174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto__);
return statearr_17174;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto__,t))
);
return c__7537__auto__;
});
lt.plugins.autocompleter.core.pos_obj__GT_pos = (function pos_obj__GT_pos(p){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),p.ch,new cljs.core.Keyword(null,"line","line",1017226086),p.line], null);
});
lt.plugins.autocompleter.core.from_cm_hints = (function from_cm_hints(res_obj){if(cljs.core.truth_(res_obj))
{var res = cljs.core.js__GT_clj.call(null,res_obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var from = lt.plugins.autocompleter.core.pos_obj__GT_pos.call(null,new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(res));var to = lt.plugins.autocompleter.core.pos_obj__GT_pos.call(null,new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(res));var sym = lt.objs.editor.range.call(null,lt.objs.editor.pool.last_active.call(null),from,to);if(cljs.core.seq.call(null,sym.trim()))
{return cljs.core.map.call(null,((function (res,from,to,sym){
return (function (p1__17175_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[p1__17175_SHARP_,p1__17175_SHARP_,((function (res,from,to,sym){
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
/**
* Creates a channel for writing results that are to be popped up with the hinter ui
* Displays hint results async by calling the showHint plugin callback when
* results are received on the channel
*/
lt.plugins.autocompleter.core.init_show_hint_ch = (function init_show_hint_ch(ed){var ch = cljs.core.async.chan.call(null);CodeMirror.showHint(lt.objs.editor.__GT_cm_ed.call(null,ed),((function (ch){
return (function (_,cb){var c__7537__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__7537__auto__,ch){
return (function (){var f__7538__auto__ = (function (){var switch__7467__auto__ = ((function (c__7537__auto__,ch){
return (function (state_17195){var state_val_17196 = (state_17195[1]);if((state_val_17196 === 2))
{var inst_17191 = (state_17195[2]);var inst_17192 = lt.plugins.autocompleter.core.process_hint_results.call(null,inst_17191);var inst_17193 = cb.call(null,inst_17192);var state_17195__$1 = state_17195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17195__$1,inst_17193);
} else
{if((state_val_17196 === 1))
{var state_17195__$1 = state_17195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17195__$1,2,ch);
} else
{return null;
}
}
});})(c__7537__auto__,ch))
;return ((function (switch__7467__auto__,c__7537__auto__,ch){
return (function() {
var state_machine__7468__auto__ = null;
var state_machine__7468__auto____0 = (function (){var statearr_17200 = [null,null,null,null,null,null,null];(statearr_17200[0] = state_machine__7468__auto__);
(statearr_17200[1] = 1);
return statearr_17200;
});
var state_machine__7468__auto____1 = (function (state_17195){while(true){
var ret_value__7469__auto__ = (function (){try{while(true){
var result__7470__auto__ = switch__7467__auto__.call(null,state_17195);if(cljs.core.keyword_identical_QMARK_.call(null,result__7470__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7470__auto__;
}
break;
}
}catch (e17201){if((e17201 instanceof Object))
{var ex__7471__auto__ = e17201;var statearr_17202_17216 = state_17195;(statearr_17202_17216[5] = ex__7471__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7469__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17217 = state_17195;
state_17195 = G__17217;
continue;
}
} else
{return ret_value__7469__auto__;
}
break;
}
});
state_machine__7468__auto__ = function(state_17195){
switch(arguments.length){
case 0:
return state_machine__7468__auto____0.call(this);
case 1:
return state_machine__7468__auto____1.call(this,state_17195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7468__auto____0;
state_machine__7468__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7468__auto____1;
return state_machine__7468__auto__;
})()
;})(switch__7467__auto__,c__7537__auto__,ch))
})();var state__7539__auto__ = (function (){var statearr_17203 = f__7538__auto__.call(null);(statearr_17203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7537__auto__);
return statearr_17203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7539__auto__);
});})(c__7537__auto__,ch))
);
return c__7537__auto__;
});})(ch))
,cljs.core.clj__GT_js.call(null,lt.plugins.autocompleter.core.default_options));
return ch;
});
lt.plugins.autocompleter.core.__BEH__start_hinting = (function __BEH__start_hinting(ed){var pos = lt.objs.editor.__GT_cursor.call(null,ed);var line_handle = lt.objs.editor.line_handle.call(null,ed,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos));var chs = lt.object.raise_reduce.call(null,ed,new cljs.core.Keyword(null,"init-hints","init-hints",4468593473),cljs.core.PersistentVector.EMPTY);CodeMirror.off(line_handle,"change",lt.plugins.autocompleter.core.on_line_change);
if(cljs.core.seq.call(null,chs))
{lt.plugins.autocompleter.core.listen_for_hint_results.call(null,ed,chs,lt.plugins.autocompleter.core.init_show_hint_ch.call(null,ed));
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
lt.plugins.autocompleter.async_dummy.store_ch = (function store_ch(ed,ch){var chs = (function (){var or__4897__auto__ = new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(or__4897__auto__))
{return or__4897__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var ch_id = lt.plugins.autocompleter.async_dummy.chan_id.call(null,ch);lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168)], null),cljs.core.assoc.call(null,chs,ch_id,ch));
return ch_id;
});
lt.plugins.autocompleter.async_dummy.get_ch = (function get_ch(ed,ch_id){return cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168),ch_id], null));
});
lt.plugins.autocompleter.async_dummy.remove_ch = (function remove_ch(ed,ch_id){var chs = (function (){var or__4897__auto__ = new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(or__4897__auto__))
{return or__4897__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return lt.object.assoc_in_BANG_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"async-dummy-channels","async-dummy-channels",3252762168)], null),cljs.core.dissoc.call(null,chs,ch_id));
});
lt.plugins.autocompleter.async_dummy.background_worker = lt.objs.thread.thread_STAR_.call(null,(function tfun13294(){var orig__9934__auto__ = argsArray(arguments);var msg__9935__auto__ = orig__9934__auto__.shift();var args__9936__auto__ = orig__9934__auto__.map(cljs.reader.read_string);var raise = ((function (orig__9934__auto__,msg__9935__auto__,args__9936__auto__){
return (function (obj__9937__auto__,k__9938__auto__,v__9939__auto__){return _send(obj__9937__auto__,k__9938__auto__,cljs.core.pr_str.call(null,v__9939__auto__),"clj");
});})(orig__9934__auto__,msg__9935__auto__,args__9936__auto__))
;args__9936__auto__.unshift(msg__9935__auto__.obj);
return ((function (orig__9934__auto__,msg__9935__auto__,args__9936__auto__,raise){
return (function (obj_id,token,ch_id){return setTimeout(((function (orig__9934__auto__,msg__9935__auto__,args__9936__auto__,raise){
return (function (){var all_hints = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["map","map-indexed","map-reduce","max","min"], null);var starts_with = ((function (all_hints,orig__9934__auto__,msg__9935__auto__,args__9936__auto__,raise){
return (function (p1__13291_SHARP_,p2__13292_SHARP_){return cljs.core._EQ_.call(null,0,p1__13291_SHARP_.indexOf(p2__13292_SHARP_));
});})(all_hints,orig__9934__auto__,msg__9935__auto__,args__9936__auto__,raise))
;var sym = new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token);return _send(obj_id,new cljs.core.Keyword(null,"async-hint-results","async-hint-results",1351910867),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sym","sym",1014018617),sym,new cljs.core.Keyword(null,"chid","chid",1016956850),ch_id,new cljs.core.Keyword(null,"list","list",1017226256),cljs.core.filter.call(null,((function (all_hints,starts_with,sym,orig__9934__auto__,msg__9935__auto__,args__9936__auto__,raise){
return (function (p1__13293_SHARP_){return starts_with.call(null,p1__13293_SHARP_,sym);
});})(all_hints,starts_with,sym,orig__9934__auto__,msg__9935__auto__,args__9936__auto__,raise))
,all_hints),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(token)], null)], null)));
});})(orig__9934__auto__,msg__9935__auto__,args__9936__auto__,raise))
,(200 + cljs.core.rand_int.call(null,1)));
});})(orig__9934__auto__,msg__9935__auto__,args__9936__auto__,raise))
.apply(null,args__9936__auto__);
}));
lt.plugins.autocompleter.async_dummy.__GT_hints = (function __GT_hints(ed,res_obj){var map__13297 = cljs.core.js__GT_clj.call(null,res_obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var map__13297__$1 = ((cljs.core.seq_QMARK_.call(null,map__13297))?cljs.core.apply.call(null,cljs.core.hash_map,map__13297):map__13297);var res = map__13297__$1;var to = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"from","from",1017056028));var sym = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));var token = lt.plugins.autocompleter.core.get_token.call(null,ed);if(((new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(token) - new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(to)) < 2))
{return cljs.core.map.call(null,((function (map__13297,map__13297__$1,res,to,from,sym,token){
return (function (p1__13295_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"text","text",1017460895),new cljs.core.Keyword(null,"displayText","displayText",2728236161),new cljs.core.Keyword(null,"render","render",4374279432),new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949)],[p1__13295_SHARP_,p1__13295_SHARP_,((function (map__13297,map__13297__$1,res,to,from,sym,token){
return (function (el,self,data){return lt.util.dom.html.call(null,el,wrapMatch(data.displayText,{"matched": sym}));
});})(map__13297,map__13297__$1,res,to,from,sym,token))
,from,to]);
});})(map__13297,map__13297__$1,res,to,from,sym,token))
,new cljs.core.Keyword(null,"list","list",1017226256).cljs$core$IFn$_invoke$arity$1(res));
} else
{return cljs.core.PersistentVector.EMPTY;
}
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