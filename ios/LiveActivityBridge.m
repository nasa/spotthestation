//
//  LiveActivityBridge.m
//  STSApp
//
//  Created by Олег Скосарєв on 17.05.2023.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(LiveActivityModule, NSObject)

RCT_EXTERN_METHOD(startLiveActivity:(double) interval)
RCT_EXTERN_METHOD(updateLiveActivity:(double) interval)
RCT_EXTERN_METHOD(endLiveActivity)

@end
