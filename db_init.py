import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# 1. 인증 정보 및 파이어베이스 설정
cred = credentials.Certificate("umbrella-e6536-firebase-adminsdk-fbsvc-443acc4bbe.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://umbrella-e6536-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

# 2. 우산 2개(umbrella_01, umbrella_02) 초기 데이터 구조 설정 (푸시 알림용 토큰 필드 추가)
ref = db.reference('umbrellas')
ref.set({
    "umbrella_01": {
        "status": "available",
        "student_id": "",
        "student_name": "",
        "rented_at": "",
        "student_token": ""         # FCM 웹푸시 알림용 디바이스 주소값 필드 추가
    },
    "umbrella_02": {
        "status": "available",
        "student_id": "",
        "student_name": "",
        "rented_at": "",
        "student_token": ""
    }
})

print("우산 2개 및 푸시 인프라 초기화 완료!")
print("현재 파이어베이스 우산 상태:")
print(ref.get())
