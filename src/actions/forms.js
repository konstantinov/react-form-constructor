

const createAction = (type, payload = {}) => ({ type, payload });

export const downloadFormsAction = 'forms/download';
export const downloadFormsSuccessAction = 'forms/downloadSuccess';
export const saveFormAction = 'forms/save';
export const saveFormSuccessAction = 'forms/saveSuccess';

export const downloadForms = () => createAction(downloadFormsAction);
export const downloadFormsSuccess = (payload) => createAction(downloadFormsSuccessAction, payload);
export const saveForm = (payload) => createAction(saveFormAction, payload);
export const saveFormSuccess = () => createAction(saveFormSuccessAction);