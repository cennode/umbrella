import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# 1. 인증 정보 및 파이어베이스 설정
cred = credentials.Certificate("umbrella-e6536-firebase-adminsdk-fbsvc-443acc4bbe.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://umbrella-e6536-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

# 2. 우산 2개(umbrella_01, umbrella_02) 초기 데이터 구조 설정
# 'umbrellas'라는 큰 폴더 안에 각각의 우산 정보를 넣습니다.
ref = db.reference('umbrellas')
ref.set({
    "umbrella_01": {
        "status": "available",      # 현재 상태 (available: 대여가능 / rented: 대여중)
        "student_id": "",           # 대여한 학생 학번 (처음엔 빈칸)
        "student_name": "",         # 대여한 학생 이름 (처음엔 빈칸)
        "rented_at": ""             # 대여 시간 (처음엔 빈칸)
    },
    "umbrella_02": {
        "status": "available",
        "student_id": "",
        "student_name": "",
        "rented_at": ""
    }
})

print("우산 2개 초기화 완료!")

# 3. 등록된 데이터가 잘 들어갔는지 확인하기 위해 읽어오기
print("현재 파이어베이스 우산 상태:")
print(ref.get())