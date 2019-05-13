import React from 'react';
import { notification, Icon } from 'antd';
import '../../../static/resources/admin-account.scss';

export function showWarning(message) { notification.open({ message: <span className="error-text-login">{message}</span>, icon: <Icon type="warning" style={{ color: '#108ee9' }} className="error-icon-login" />, className: 'notification-warning-toast' }) }
export function showSuccess(message) { notification.open({ message: <span className="error-text-login">{message}</span>, icon: <Icon type="check-circle" style={{ color: '#108ee9' }} className="error-icon-login" />, className: 'notification-warning-toast' }) }