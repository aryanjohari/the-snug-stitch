import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "../components/CustomForm";


const MailchimpFormContainer = props => {

    const postUrl = `https://gmail.us14.list-manage.com/subscribe/post?u=1f01bac381764b79e85ac751f&id=6237f48903`;
    return (
        <div className="">
            <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status} 
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
             />
        </div>
    );
};

export default MailchimpFormContainer;