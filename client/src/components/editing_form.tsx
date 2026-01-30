import React, {useState} from "react";
import {Form, Input, Button} from "@heroui/react";

interface IProps { 
    hero: any;
    onSubmit: (data: FormData) => Promise<void>;
    onClose: () => void;
}


export default function EditingForm({ hero, onSubmit, onClose } : IProps) {

    const [formData, setFormData] = useState({
        nickname: hero.nickname,
        realName: hero.real_name,
        originDescription: hero.origin_description,
        superpowers: hero.superpowers,
        catchPhrase: hero.catch_phrase,
    })


    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const data = new FormData();
        data.append("nickname", formData.nickname);
        data.append("real_name", formData.realName);
        data.append("origin_description", formData.originDescription);
        data.append("superpowers", formData.superpowers);
        data.append("catch_phrase", formData.catchPhrase);
        
        if (file) {
            data.append("image", file);
        }

        await onSubmit(data);
    };


    return (
        <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
          <Input
            isRequired
            label="Nickname"
            name="nickname"
            placeholder="Псевдонім супергероя"
            type="text"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm focus:outline-none"
            }}
            value={formData.nickname}
            onChange={(e) => setFormData({...formData, nickname: e.target.value})}
            validate={(value) => {
                if(!value) return "Псевдонім обо'язковий!";
                return null;
            }}
          />
    
    
          <Input
            isRequired
            label="RealName"
            name="RealName"
            placeholder="Справжнє ім'я супергероя"
            type="text"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm focus:outline-none"
            }}
            value={formData.realName}
            onChange={(e) => setFormData({...formData, realName: e.target.value})}
            validate={(value) => {
                if(!value) return "Ім'я обо'язкове!";
                return null;
            }}
          />
    
    
          <Input
            isRequired
            label="OriginDescription"
            name="OriginDescription"
            placeholder="Походження супергероя"
            type="text"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm focus:outline-none"
            }}
            value={formData.originDescription}
            onChange={(e) => setFormData({...formData, originDescription: e.target.value})}
            validate={(value) => {
                if(!value) return "Походження обо'язкове!";
                return null;
            }}
          />
    
    
          <Input
            isRequired
            label="Superpowers"
            name="Superpowers"
            placeholder="Суперсила"
            type="text"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm focus:outline-none"
            }}
            value={formData.superpowers}
            onChange={(e) => setFormData({...formData, superpowers: e.target.value})}
            validate={(value) => {
                if(!value) return "Суперсила обо'язкова!";
                return null;
            }}
          />
          
    
            <Input
                isRequired
                label="CatchPhrase"
                name="CatchPhrase"
                placeholder="Коронний вираз"
                type="text"
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none"
                }}
                value={formData.catchPhrase}
                onChange={(e) => setFormData({...formData, catchPhrase: e.target.value})}
                validate={(value) => {
                    if(!value) return "Коронний вираз обо'язковий!";
                    return null;
                }}
            />
    
    
            <Input
                label="Додати нове зображення"
                name="ImageUrl"
                placeholder="Зображення супергероя"
                type="file"
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          
    
          <div className="flex w-full justify-end gap-4 items-center pt-8">
            <Button onPress={onClose} variant="light">
                Закрити
            </Button>
    
            <Button type="submit" color="primary">
                Зберегти
            </Button>
          </div>
        </Form>
      );
}
