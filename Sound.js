// ==UserScript==
// @name         ManageEngine Task Sound Alert
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Play sound when new tasks detected
// @author       You
// @match        https://your-manageengine-url.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    let lastTaskCount = 0;
    let isSoundPlaying = false;
    function checkForNewTasks() {
        // عدل هذا السيلكتور حسب موقعك
        const taskElements = document.querySelectorAll('.hover');
        const currentCount = taskElements.length;
        lastTaskCount = currentCount
        
        
        if (currentCount > lastTaskCount) {
            playNotificationSound();
            showCustomAlert('🎯 New Task Available!');
            console.log('New Task Available!');
            
        }
        
        lastTaskCount = currentCount;
    }
    
    // function playNotificationSound() {
    //     isSoundPlaying = true;
        
    //     // اختر أحد هذه الأصوات:
    //     const soundUrls = [
    //         'https://assets.mixkit.co/sfx/preview/mixkit-alarm-tone-996.mp3',
    //         'https://assets.mixkit.co/sfx/preview/mixkit-notification-urgent-588.mp3',
    //         'https://assets.mixkit.co/sfx/preview/mixkit-positive-notification-951.mp3'
    //     ];
        
    //     const audio = new Audio(soundUrls[0]);
    //     audio.volume = 0.7;
        
    //     audio.play().then(() => {
    //         setTimeout(() => {
    //             isSoundPlaying = false;
    //         }, 3000);
    //     }).catch(error => {
    //         console.log('Sound play failed:', error);
    //         isSoundPlaying = false;
    //     });
    // }
    
    // function showCustomAlert(New_Taske_Available) {
    //     const alertDiv = document.createElement('div');
    //     alertDiv.style.cssText = `
    //         position: fixed;
    //         top: 20px;
    //         right: 20px;
    //         background: #4CAF50;
    //         color: white;
    //         padding: 15px;
    //         border-radius: 5px;
    //         z-index: 10000;
    //         font-family: Arial;
    //         box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    //     `;
    //     alertDiv.textContent = New_Taske_Available;
        
    //     document.body.appendChild(alertDiv);
        
    //     setTimeout(() => {
    //         document.body.removeChild(alertDiv);
    //     }, 5000);
    // }
    
    // // بدء المراقبة كل 10 ثواني
    // console.log('ManageEngine Sound Alert activated!');
    // setInterval(checkForNewTasks, 10000);
    
    // // مراقبة فورية أيضاً
    // checkForNewTasks();
})();