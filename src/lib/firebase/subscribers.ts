import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db } from './config';

// Название коллекции для хранения подписчиков
const COLLECTION_NAME = 'subscribers';

// Интерфейс для подписчика
export interface Subscriber {
  email: string;
  source?: string;
  userAgent?: string;
  createdAt: Timestamp;
}

// Интерфейс для нового подписчика (без id и с необязательным createdAt)
export interface NewSubscriber {
  email: string;
  source?: string;
  userAgent?: string;
  createdAt?: Timestamp;
}

/**
 * Добавляет нового подписчика в Firestore
 * @param subscriber Данные подписчика
 * @returns Объект с результатом операции
 */
export async function addSubscriber(subscriber: NewSubscriber) {
  try {
    // Проверяем, существует ли уже такой email
    const emailExists = await checkEmailExists(subscriber.email);
    if (emailExists) {
      return { 
        success: false, 
        error: 'This email is already subscribed.' 
      };
    }

    // Добавляем timestamp, если он не был предоставлен
    const subscriberData: Subscriber = {
      ...subscriber,
      createdAt: subscriber.createdAt || Timestamp.now()
    };

    // Добавляем документ в коллекцию
    const docRef = await addDoc(collection(db, COLLECTION_NAME), subscriberData);
    
    return { 
      success: true, 
      data: { 
        id: docRef.id,
        ...subscriberData 
      } 
    };
  } catch (error) {
    console.error('Error adding subscriber:', error);
    return { 
      success: false, 
      error: 'Failed to add subscriber.' 
    };
  }
}

/**
 * Проверяет, существует ли подписчик с указанным email
 * @param email Email для проверки
 * @returns true, если email уже существует, иначе false
 */
async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('email', '==', email)
    );
    
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking email existence:', error);
    // В случае ошибки возвращаем false, чтобы позволить добавить email
    // (лучше добавить дубликат, чем потерять подписчика)
    return false;
  }
}
